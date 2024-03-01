// Inside upload-video-app/src/App.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('video', file);

    try {
      const response = await axios.post('http://localhost:3002/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error uploading video:', error);
      setMessage('Failed to upload video');
    }
  };

  return (
    <div>
      <h1>Upload Video</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
