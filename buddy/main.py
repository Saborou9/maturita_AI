#!/usr/bin/env python
from dotenv import load_dotenv
from crewai.flow.flow import Flow, listen, start

from buddy.User_Input_Processing_Crew.User_Input_Crew import User_Input_Crew
from buddy.Data_Gathering_and_Analysis_Crew.Data_Analysis_Crew import Data_Analysis_crew
from buddy.Strategy_Recommendation_Crew.Strategy_Crew import Strategy_crew
from buddy.Quality_Assurance_Fact_Checking_Crew.Fact_Check_Crew import Fact_check_crew

class ChatbotFlow(Flow):
    """
    Flow to manage crews in a sequence and produce final outputs for the frontend.
    """

    @start()
    def user_input_processing(self):
        print("Starting the flow with User Input Processing Crew")
        
        try:
            if not self.inputs or 'topic' not in self.inputs:
                raise ValueError("Missing 'topic' in inputs")
                
            inputs = {"topic": self.inputs['topic']}
            print(f"Processing input: {inputs}")
            
            user_input_crew = User_Input_Crew()
            response = user_input_crew.kickoff(inputs=inputs)
            
            if not response:
                raise ValueError("Empty response from User Input Processing Crew")
                
            print(f"User Input Processing Results: {response}")
            return response
            
        except Exception as e:
            print(f"Error in user_input_processing: {str(e)}")
            raise

    @listen(user_input_processing)
    def data_gathering_and_analysis(self, user_input_results):
        print("Proceeding to Data Gathering and Analysis Crew")

        data_gathering_crew = Data_Analysis_crew()
        response = data_gathering_crew.kickoff(inputs=user_input_results)

        print(f"Data Gathering and Analysis Results: {response}")
        return response

    @listen(data_gathering_and_analysis)
    def strategy_recommendation(self, data_gathering_results):
        print("Proceeding to Strategy Recommendation Crew")

        strategy_crew = Strategy_crew()
        response = strategy_crew.kickoff(inputs=data_gathering_results)

        print(f"Strategy Recommendation Results: {response}")
        return response

    @listen(strategy_recommendation)
    def quality_assurance(self, strategy_results):
        print("Proceeding to Quality Assurance Crew")

        qa_crew = Fact_check_crew()
        response = qa_crew.kickoff(inputs=strategy_results)

        print(f"Quality Assurance Results: {response}")
        return response


# Run the flow
if __name__ == "__main__":
    flow = ChatbotFlow()
    result = flow.kickoff()

    print(f"Final Result for Frontend: {result}")
