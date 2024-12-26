export const fetchBotResponse = async (userMessage) => {
  try {
    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch bot response');
    }

    const data = await response.json();
    return data.response; // Assume the backend sends a JSON object with a "response" field
  } catch (error) {
    console.error('Error fetching bot response:', error);
    return 'Sorry, something went wrong.';
  }
};
