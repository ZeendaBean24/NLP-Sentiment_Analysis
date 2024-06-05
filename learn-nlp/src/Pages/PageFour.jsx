import React, { useState, useEffect } from 'react';
import './styles.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from 'react-router-dom';

function PageFour() {
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
    const savedState = localStorage.getItem('page4-done') === 'true';
    setIsDone(savedState);
  }, []);

  const handleDoneToggle = () => {
    const newState = !isDone;
    setIsDone(newState);
    localStorage.setItem('page4-done', newState);
  };

  const installCommands =`
    pip install requests
    pip install python-dotenv
    pip install nltk
    pip install matplotlib
    pip install transformers
  `

  const snippet1 = `
  from transformers import pipeline  # For using pre-trained transformer models
`;

  const snippet2 = `
  def analyze_emotions_transformers(text):
    # Initialize the emotion analysis pipeline
    emotion_analyzer = pipeline("text-classification", model="j-hartmann/emotion-english-distilroberta-base", top_k=None)
`;

const snippet3 = `
  # Truncate text to the first 350 tokens (to be safe)
  tokenized_text = text.split()
  truncated_text = ' '.join(tokenized_text[:350])
`;

const snippet4 = `
  # Get emotions from the analyzer
  emotions = emotion_analyzer(truncated_text)
`;

const snippet5 = `
  # Flatten the results and sum the scores for each emotion
  emotion_counts = {}
  for emotion_set in emotions:
      for emotion in emotion_set:
          label = emotion['label']
          score = emotion['score']
          if label in emotion_counts:
              emotion_counts[label] += score
          else:
              emotion_counts[label] = score

  return emotion_counts
`;

  return (
    <div className="page">
      <h1 className="page-title">4 - Analyzing Emotions Using Transformers</h1>
      <hr></hr>
      <div className="section-divider">
        <p className="intro">We will use a pre-trained transformer model to analyze emotions in the text. This will help us understand the emotional tone of the review.</p>
          <h2 className="subheading">Installation Commands</h2>
          <p className="description">For this part specifically, other than all the libraries we have seen before, we also need to install the `transformers` library, so we can pipeline a Hugging Face model later.</p>
          <div className="code-container" style={{ position: 'relative' }}>
            <SyntaxHighlighter language="bash" style={ solarizedlight }>
              {installCommands}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(installCommands)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
              Copy
            </button>
          </div>
        <p className="description"><strong>Transformers</strong> is used here to pipeline pre-trained transformer models to analyze emotions.</p>
      </div>
      <hr></hr>  
      <div className="section-divider">
          <h2 className="subheading">Importing the Transformers Library</h2>
          <p className="description">We import the pipeline from the transformers library to use pre-trained models.</p>
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
          <h2 className="subheading">Defining the Function to Analyze Emotions</h2>
          <p className="description">We define a function to initialize the emotion analysis pipeline using a pre-trained model.</p>
          <div className="code-container" style={{ position: 'relative' }}>
            <SyntaxHighlighter language="python" style={ solarizedlight }>
              {snippet2}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(snippet2)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
              Copy
            </button>
          </div>
        </div>
        <div className="section-divider">
          <h2 className="subheading">Truncating the Text</h2>
          <p className="description">We truncate the text to the first 350 tokens to avoid processing very long texts.</p>
          <div className="code-container" style={{ position: 'relative' }}>
            <SyntaxHighlighter language="python" style={ solarizedlight }>
              {snippet3}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(snippet3)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
              Copy
            </button>
          </div>
        </div>
        <div className="section-divider">
          <h2 className="subheading">Getting Emotions from the Analyzer</h2>
          <p className="description">We pass the truncated text to the emotion analyzer to get the predicted emotions.</p>
          <div className="code-container" style={{ position: 'relative' }}>
            <SyntaxHighlighter language="python" style={ solarizedlight }>
              {snippet4}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(snippet4)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
              Copy
            </button>
          </div>
        </div>
        <div className="section-divider">
          <h2 className="subheading">Summing the Scores for Each Emotion</h2>
          <p className="description">We sum the scores for each emotion to get the final emotion counts.</p>
          <div className="code-container" style={{ position: 'relative' }}>
            <SyntaxHighlighter language="python" style={ solarizedlight }>
              {snippet5}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(snippet5)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
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

export default PageFour;