import React, { useState, useEffect } from 'react';
import './styles.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from 'react-router-dom';

function PageFourOne() {
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
    const savedState = localStorage.getItem('page3.1-done') === 'true';
    setIsDone(savedState);
  }, []);

  const handleDoneToggle = () => {
    const newState = !isDone;
    setIsDone(newState);
    localStorage.setItem('page3.1-done', newState);
  };

const installCommands = `
  from nltk.sentiment.vader import SentimentIntensityAnalyzer  # For sentiment analysis
`

const snippet1 = `
  def sentiment_analyse(sentiment_text):
      # Get sentiment scores from VADER
      score = SentimentIntensityAnalyzer().polarity_scores(sentiment_text)
      print(f"\\n\\n**NLTK Sentiment Analysis**\\nOverall score: {score}") 
      neg = score['neg']
      pos = score['pos']
`;

const snippet2 = `
  # Determine overall sentiment
  if neg > pos:
      print("Overall: Negative Sentiment")
  elif pos > neg:
      print("Overall: Positive Sentiment")
  else:
      print("Overall: Neutral Sentiment.")
  print("\\n------------------\\n")
`;

  return (
    <div className="page">
      <h1 className="page-title">4.1 - Sentiment Analysis Using VADER</h1>
      <hr></hr>
      <div className="section-divider">
        <p className="intro">We will use the VADER sentiment analysis tool to determine whether the text is positive, negative, or neutral.</p>
        <h2 className="subheading">Installation Commands</h2>
          <div className="code-container" style={{ position: 'relative' }}>
            <SyntaxHighlighter language="bash" style={ solarizedlight }>
              {installCommands}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(installCommands)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
              Copy
            </button>
          </div>
        <p className="description">Again, we use <strong>NLTK,</strong> a library for sentiment analysis</p>
      </div>
      <hr></hr>  
      <div className="section-divider">
        <h2 className="subheading">Defining the Function for Sentiment Analysis</h2>
        <p className="description">We define a function to get sentiment scores from VADER and print the results.</p>
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
        <h2 className="subheading">Determining Overall Sentiment</h2>
        <p className="description">We determine the overall sentiment based on the scores and print the result.</p>
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

export default PageFourOne;