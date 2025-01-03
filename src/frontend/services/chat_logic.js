export const fetchBotResponse = async (message) => {
  try {
    // Send initial request
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({ message }),
      credentials: 'include',
      mode: 'cors'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // If we got an immediate response
    if (data.status === 'processing') {
      // Start polling for final response
      return await pollForResponse(data.response_id);
    }
    
    return data.response;
  } catch (error) {
    console.error('Error fetching bot response:', error);
    throw error;
  }
};

const pollForResponse = async (responseId) => {
  const maxAttempts = 30;
  const delay = 2000; // 2 seconds
  
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      const statusResponse = await fetch(`/api/chat/status/${responseId}`, {
        method: 'GET',
        credentials: 'include',
        mode: 'cors'
      });

      if (!statusResponse.ok) {
        throw new Error(`HTTP error! status: ${statusResponse.status}`);
      }

      const statusData = await statusResponse.json();
      
      if (statusData.status === 'complete') {
        return statusData.response;
      }
      
      // If still processing, wait and try again
      await new Promise(resolve => setTimeout(resolve, delay));
    } catch (error) {
      console.error('Error polling for response:', error);
      throw error;
    }
  }
  
  throw new Error('Response timeout');
};
