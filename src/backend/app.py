from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from models import db, User
from config import Config
import logging
from buddy.main import ChatbotFlow

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
jwt = JWTManager(app)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}, supports_credentials=True)

logging.basicConfig(level=logging.DEBUG)

@app.route('/api/register', methods=['OPTIONS', 'POST'])
def register():
    if request.method == 'OPTIONS':
        response = make_response('', 204)
        response.headers['Access-Control-Allow-Origin'] = 'http://localhost:5173'
        response.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        response.headers['Access-Control-Allow-Credentials'] = 'true'
        return response

    # Log the incoming request headers and data
    logging.debug(f"Request headers: {request.headers}")
    logging.debug(f"Request data: {request.get_json()}")

    try:
        data = request.get_json()
        
        # Validate input
        if not all(key in data for key in ['fullName', 'email', 'password']):
            return jsonify({'error': 'Missing required fields'}), 400
        
        # Check if user already exists
        if User.query.filter_by(email=data['email']).first():
            return jsonify({'error': 'Email already registered'}), 400
        
        # Create new user
        user = User(
            full_name=data['fullName'],
            email=data['email']
        )
        user.set_password(data['password'])
        
        db.session.add(user)
        db.session.commit()
        
        return jsonify({'message': 'User registered successfully'}), 201
    
    except Exception as e:
        db.session.rollback()
        logging.error(f"Exception: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    
    if user and user.check_password(data['password']):
        access_token = create_access_token(identity=user.id)
        return jsonify({
            'access_token': access_token,
            'user': {
                'id': user.id,
                'email': user.email,
                'fullName': user.full_name
            }
        })
    
    return jsonify({'error': 'Invalid credentials'}), 401

@app.route('/api/user', methods=['GET'])
@jwt_required()
def get_user():
    try:
        current_user_id = get_jwt_identity()
        app.logger.debug(f"Current user ID: {current_user_id}")
        user = User.query.get(current_user_id)
        if not user:
            return jsonify({'error': 'User not found'}), 404
        return jsonify({
            'id': user.id,
            'email': user.email,
            'fullName': user.full_name
        })
    except Exception as e:
        app.logger.error(f"Error fetching user: {e}")
        return jsonify({'error': 'Unauthorized'}), 401
    
@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        # Get the user question from the request
        data = request.get_json()
        question = data.get('message', '')

        if not question:
            return jsonify({'error': 'Message is required'}), 400

        logging.info(f"Received chat request with message: {question}")

        # Start the ChatbotFlow with the user's question
        chatbot_flow = ChatbotFlow()
        final_response = chatbot_flow.kickoff(inputs={"topic": question})

        logging.info(f"Generated response: {final_response}")

        # Return the response to the frontend
        return jsonify({'response': final_response}), 200

    except Exception as e:
        logging.error(f"Error in chat endpoint: {str(e)}", exc_info=True)
        return jsonify({'error': 'Something went wrong. Please try again later.'}), 500

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
