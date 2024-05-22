import React from 'react';
import './NLPPathway.css';

function NLPPathway() {
  return (
    <div className="nlp-container">
      <div className="nlp-letter" onClick={() => alert("Manual NLP Techniques")}>N</div>
      <div className="nlp-letter" onClick={() => alert("NLTK Sentiment Analysis")}>L</div>
      <div className="nlp-letter" onClick={() => alert("Applying New York Times API")}>P</div>
      <div className="nlp-exclamation" onClick={() => alert("Using Hugging Face for Movie Reviews")}>!</div>
    </div>
  );
}

export default NLPPathway;
