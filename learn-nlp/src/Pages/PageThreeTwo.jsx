import React, { useState, useEffect } from 'react';
import './styles.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from 'react-router-dom';

function PageThreeTwo() {
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
    const savedState = localStorage.getItem('page1.2-done') === 'true';
    setIsDone(savedState);
  }, []);

  const handleDoneToggle = () => {
    const newState = !isDone;
    setIsDone(newState);
    localStorage.setItem('page1.2-done', newState);
  };

  const snippet1 = `
  import string  # For handling punctuation
  from nltk.tokenize import word_tokenize  # For splitting text into words
  from nltk.corpus import stopwords  # For removing stop words  
  `;

  const snippet2 = `
  def process_text(text):
    # Convert text to lowercase
    lower_case = text.lower()
    
    # Remove punctuation
    cleaned_text = lower_case.translate(str.maketrans('', '', string.punctuation))
    
    # Tokenize the text
    tokenized_words = word_tokenize(cleaned_text, "english")
    
    # Remove stop words
    final_words = [word for word in tokenized_words if word not in stopwords.words('english')]
    
    return final_words
  `
  return (
    <div className="page">
      <h1 className="page-title">3.2 - Processing Text for Analysis</h1>
        <hr></hr>
      <div className="section-divider">
        <p className="intro">We will clean and tokenize the fetched review text to prepare it for analysis. This step includes converting text to lowercase, removing punctuation, and filtering out stop words.</p>
      </div>
      <hr></hr>  
        <div className="section-divider">
          <h2 className="subheading">Importing Libraries for Text Processing</h2>
          <p className="description">We import libraries for tokenizing text and removing stop words.</p>
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
        <h2 className="subheading">Defining the Function to Process Text</h2>
        <p className="description">This function cleans the text by converting it to lowercase, removing punctuation, and filtering out stop words. The result is a list of meaningful words.</p>
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

export default PageThreeTwo;