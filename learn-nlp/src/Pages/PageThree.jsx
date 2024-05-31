import React, { useState, useEffect } from 'react';
import './styles.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from 'react-router-dom';

function PageThree() {
  let navigate = useNavigate();

  function handleNavigate(path) {
    navigate(path);
  }

  const copyToClipboard = (text) => {
    if (navigator.clipboard) { // Modern async clipboard API
      navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    } else { // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        alert('Text copied to clipboard');
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
      document.body.removeChild(textarea);
    }
  };

  const [isDone, setIsDone] = useState(false);  // State to manage the "Mark as Done" button

  // Retrieve the initial state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('page3-done') === 'true';
    setIsDone(savedState);
  }, []);

  const handleDoneToggle = () => {
    const newState = !isDone;
    setIsDone(newState);
    localStorage.setItem('page3-done', newState);
  };

  const snippet1 = `
  import os  # For accessing environment variables
  from dotenv import load_dotenv  # For loading environment variables from a .env file

  # Load environment variables from .env file
  load_dotenv()
  TMDB_API_KEY = os.getenv("TMDB_API_KEY")  # Get API key from environment variables
`;

  return (
    <div className="page">
      <h1 className="page-title">3 - Fetching and Processing Movie Reviews</h1>
      <hr></hr>
      <div className="section-divider">
          <h1 className="heading">Setting Up the Environment and Getting the API Key</h1>
          <p className="description">First, create a file in your directory called <strong>movie_reviews.py</strong>. We will be working in this file for Unit 2.</p>
          <p className="description">Next, go online and search "TMDB". Sign up for an account and navigate to the API section and generate an API key. <strong>This is very important!</strong></p>
          <p className="description">Finally, in your existing .env file, write: <em>"TMDB_API_KEY=PASTE_API_KEY_HERE"</em></p>
          <p className="description">This will keep the API key secure and can be easily loaded onto the script.</p>
      </div>
      <div className="section-divider">
        <p className="intro">We need to set up our environment and get an API key from The Movie Database (TMDB). This API key will allow us to fetch movie data.</p>
      </div>
      <hr></hr>  
        <div className="section-divider">
          <h2 className="subheading">Importing Libraries and Loading Environment Variables</h2>
          <p className="description">We import the necessary libraries and load the API key from the .env file. This is essential for securely using the API key.</p>
          <div className="code-container" style={{ position: 'relative' }}>
            <SyntaxHighlighter language="python" style={ solarizedlight }>
              {snippet1}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(snippet1)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
              Copy
            </button>
        </div>
      </div>
      <hr></hr>
      <div className="footer">
        <button className="back-button" style={{ marginTop: '20px', cursor: 'pointer' }} onClick={() => handleNavigate('/')}>
          Back
        </button>
        <label className="isDone" style={{ marginLeft: '10px' }}>
          <input type="checkbox" checked={isDone} onChange={handleDoneToggle} />
          Mark as Done
        </label>
      </div>
    </div>
  );
}

export default PageThree;