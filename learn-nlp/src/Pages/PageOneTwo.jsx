import React from 'react';
import './styles.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from 'react-router-dom';

function PageOneTwo() {
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
      <h1 className="page-title">1.2 - Manual Emotion Detection</h1>
        <hr></hr>
      <div className="section-divider">
        <p className="intro">In this part, we detect emotions in the text by comparing words with an emotion dictionary. This helps us understand the emotional tone of the text. By counting the occurrences of each emotion, we can see the overall emotional profile of the text.</p>
      </div>
      <hr></hr>  
        <div className="section-divider">
          <h2 className="subheading">Initializing and Reading the Emotion File</h2>
          <p className="description">We read the emotion dictionary and clean each line to prepare for comparison.</p>
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
        <h2 className="subheading">Matching Words with Emotions</h2>
        <p className="description">We match each word with its corresponding emotion and count how many times each emotion appears.</p>
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

export default PageOneTwo;