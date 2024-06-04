import React, { useState, useEffect } from 'react';
import './styles.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from 'react-router-dom';

function PageFourTwo() {
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
    const savedState = localStorage.getItem('page4.2-done') === 'true';
    setIsDone(savedState);
  }, []);

  const handleDoneToggle = () => {
    const newState = !isDone;
    setIsDone(newState);
    localStorage.setItem('page4.2-done', newState);
  };

  const snippet1 = `
    import matplotlib.pyplot as plt  # For plotting graphs
  `

  const snippet2 = `
    # Implementation of Functions
    movie_query = input("Enter the movie name: ")
    review_text = get_movie_review(movie_query)  
  `;

  const snippet3 = `
    if review_text:
    # Process the review text for NLP
    final_words = process_text(review_text)
    
    # Analyze emotions using Hugging Face Transformers
    emotion_counts = analyze_emotions_transformers(review_text)
    
    print("------------------ \\n\\n**HuggingFace Model**\\nAll emotions detected with their scores:")
    for emotion, score in emotion_counts.items():
        print(f"{emotion}: {score:.4f}")
    
    # Perform sentiment analysis using VADER
    sentiment_analyse(review_text)
    
    # Plot emotions
    plot_emotions(emotion_counts)
  else:
    print("No reviews found.")
  `;



  return (
    <div className="page">
      <h1 className="page-title">4.2 - Visualizing Emotions</h1>
        <hr></hr>
      <div className="section-divider">
        <p className="intro">We will create a bar chart to visualize the emotion counts from the text. This helps us see the emotional distribution at a glance.</p>
      </div>
      <hr></hr>  
        <div className="section-divider">
          <h2 className="subheading">Importing the Matplotlib Library</h2>
          <p className="description">We import the matplotlib.pyplot library to create plots.</p>
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
          <h2 className="subheading">Defining the Function to Plot Emotions</h2>
          <p className="description">We define a function to plot the emotion counts as a bar chart.</p>
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
          <h2 className="subheading">Implementation: Processing, Analyzing, and Visualizing the Review</h2>
          <p className="description">We process the review text, analyze emotions using a transformer model, perform sentiment analysis using VADER, and visualize the emotions.</p>
          <div className="code-container" style={{ position: 'relative' }}>
            <SyntaxHighlighter language="python" style={ solarizedlight }>
              {snippet3}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(snippet3)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
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

export default PageFourTwo;