import React, { useState, useEffect } from 'react';
import './styles.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from 'react-router-dom';

function PageTwo() {
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
    const savedState = localStorage.getItem('page2-done') === 'true';
    setIsDone(savedState);
  }, []);

  const handleDoneToggle = () => {
    const newState = !isDone;
    setIsDone(newState);
    localStorage.setItem('page2-done', newState);
  };

  const installCommands = `
  pip install dotenv
  `

  const snippet1 = `
  from collections import Counter  # For counting occurrences of each emotion

  # List to store detected emotions
  emotion_list = []

  # Opening and reading the emotions file
  with open('emotions.txt', 'r') as file:
      for line in file:
          clear_line = line.replace("\\n", '').replace(",", '').replace("'", '').strip()  # Clean each line
          word, emotion = clear_line.split(':')  # Split the line into word and emotion
  `;

  const snippet2 = `
  if word in final_words:  # If the word is in the final_words list
  emotion_list.append(emotion)  # Add the corresponding emotion to the emotion_list

  # Counting the occurrences of each emotion
  w = Counter(emotion_list)  # Counts each emotion

  print(f"All emotions detected: {emotion_list}")
  print(f"Counter: {w}")
  `
  return (
    <div className="page">
      <h1 className="page-title">2 - Fetching Book Reviews</h1>
      <hr></hr>
      <div className="section-divider">
          <h1 className="heading">Setup</h1>
          <p className="description">First, create a file in your directory called <strong>book_summary.py</strong>. We will be working in this file for Unit 2.</p>
          <p className="description">Next, go online and search "New York Times API". Sign up and copy your API key. <strong>This is very important!</strong></p>
          <p className="description">Finally, in your directory, create a file called <strong>.env</strong>. In this file, write: <em>"NYTIMES_BOOKS_API=PASTE_API_KEY_HERE"</em></p>
          <h2 className="subheading">Installation Commands</h2>
          <div className="code-container" style={{ position: 'relative' }}>
            <SyntaxHighlighter language="bash" style={ solarizedlight }>
              {installCommands}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(installCommands)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
              Copy
            </button>
          <p className="description"><strong>dotenv</strong> is a useful library to conceal sensensitive information. In this case this will be your New York Times API key.</p>
        </div>
      </div>
      <div className="section-divider">
        <p className="intro">In this part, we will fetch book reviews for a given author using the New York Times Books API. This is important because it gives us the text data (reviews) that we will analyze for sentiment and emotions.</p>
      </div>
      <hr></hr>  
        <div className="section-divider">
          <h2 className="subheading">Importing Libraries and Loading Environment Variables</h2>
          <p className="description">We load necessary libraries and environment variables. This setup is essential for making API requests securely using an API key.</p>
          <div className="code-container" style={{ position: 'relative' }}>
            <SyntaxHighlighter language="python" style={ solarizedlight }>
              {snippet1}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(snippet1)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
              Copy
            </button>
        </div>
      </div>
      <div className="section-divider">
        <h2 className="subheading">Fetching Reviews for a Given Author</h2>
        <p className="description">This function formats the author's name, sends a request to the API, and extracts relevant information from the response.</p>
        <div className="code-container" style={{ position: 'relative' }}>
            <SyntaxHighlighter language="python" style={ solarizedlight }>
              {snippet2}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(snippet2)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
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

export default PageTwo;