import React from 'react';
import './styles.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from 'react-router-dom';

function PageOneOne() {
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

  const snippet1 = `
  from nltk.corpus import stopwords  # For removing stop words

  # List to store meaningful words
  final_words = []
  `;

  const snippet2 = `
  # Filtering out stop words
  for word in tokenized_words:
      if word not in stopwords.words('english'):  # Checks if the word is a stop word
          final_words.append(word)  # Adds the word to the list if it is not a stop word
  
  `
  return (
    <div className="page">
      <h1 className="page-title">1.1 - Removing Stop Words</h1>
        <hr></hr>
      <div className="section-divider">
        <p className="intro">In this part, we filter out common words like 'and' and 'the', known as stop words. This is important because stop words do not carry significant meaning and can clutter our analysis. Removing them allows us to focus on the meaningful words.</p>
      </div>
      <hr></hr>  
        <div className="section-divider">
          <h2 className="subheading">Importing and Initializing Stop Words</h2>
          <p className="description">We import the stopwords module and initialize a list to store the words that matter.</p>
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
        <h2 className="subheading">Filtering Out Stop Words</h2>
        <p className="description">We loop through the tokenized words and only keep those that are not stop words, ensuring our list contains meaningful words.</p>
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
      <button className="back-button" style={{ marginTop: '20px', cursor: 'pointer' }} onClick={() => handleNavigate('/')}>
        Back
      </button>
    </div>
  );
}

export default PageOneOne;