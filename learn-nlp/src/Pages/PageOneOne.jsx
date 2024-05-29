import React, {useState} from 'react';
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

  const installCommands = `
  pip install nltk
  pip install matplotlib
  `;

  return (
    <div className="page">
      <h1 className="heading">1.1 - What is NLP? (Setup, Installation) </h1>
        <hr></hr>
      <div className="section-divider">
        <p className="description">Natural language processing, or NLP, combines computational linguistics—rule-based modeling of human language—with statistical and machine learning models to enable computers and digital devices to recognize, understand and generate text and speech. (Source: IBM) For our case, we will be focused on <strong>text-based NLP</strong> and deal with <strong>Sentiment Analysis</strong>.</p>
        <p className="description">If this is a foreign concept to you: DO NOT WORRY! These series of modules will guide you to become an NLP expert.</p>
      </div>
      <hr></hr>  
        <div className="section-divider">
          <h2 className="subheading">Installation Commands</h2>
          <p className="description">Before we start analyzing text, you need to set up your environment by installing some necessary Python libraries. These libraries will help us process and analyze the text.</p>
          <div className="code-container" style={{ position: 'relative' }}>
            <SyntaxHighlighter language="bash" style={ solarizedlight }>
              {installCommands}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(installCommands)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
              Copy
            </button>
        </div>
      </div>
      <hr></hr>
      <div className="section-divider">
        <h2 className="subheading">Create read.txt</h2>
        <p className="description">For our example, create a text file in your IDE named <strong>read.txt</strong> and copy the text below:</p>
        <p className="description">This is the text that will get analyzed later.</p>
      </div>
      <hr></hr>
      <div className="section-divider">
        <h2 className="subheading">Create emotions.txt</h2>
        <p className="description">For our example, create a text file in your IDE named <strong>emotion.txt</strong> and copy the text below:</p>
        <p className="description">This will be used later to manually connect different words with different emotions.</p>
      </div>
      <hr></hr>
      <button className="back-button" style={{ marginTop: '20px', cursor: 'pointer' }} onClick={() => handleNavigate('/')}>
        Back
      </button>
    </div>
  );
}

export default PageOneOne;