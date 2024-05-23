import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NLPPathway.css';

function NLPPathway() {
  let navigate = useNavigate();

  function handleNavigate(path) {
    navigate(path);
  }

  return (
    <div>
      {/* <div className="App-header">
        <h1 className='header-text'>Welcome to the NLP Learning Pathway</h1>
      </div> */}
      <div className="star">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div className="nlp-container">
        {/* N Nodes */}
        <div className="node main-node n1" onClick={() => handleNavigate('/n1')}>1</div>
        <div className="node minor-node n2" onClick={() => handleNavigate('/n1.1')}>1.1</div>
        <div className="node minor-node n3" onClick={() => handleNavigate('/n1.2')}>1.2</div>
        <div className="node minor-node n4" onClick={() => handleNavigate('/n1.3')}>1.3</div>
        <div className="letter n">N</div>
        
        {/* L Nodes */}
        <div className="node main-node l1" onClick={() => handleNavigate('/l1')}>2</div>
        <div className="node minor-node l2" onClick={() => handleNavigate('/l2.1')}>2.1</div>
        <div className="node minor-node l3" onClick={() => handleNavigate('/l2.2')}>2.2</div>
        <div className="letter l">L</div>
        
        {/* P Nodes */}
        <div className="node main-node p1" onClick={() => handleNavigate('/p1')}>3</div>
        <div className="node minor-node p2" onClick={() => handleNavigate('/p3.1')}>3.1</div>
        <div className="node minor-node p3" onClick={() => handleNavigate('/p3.2')}>3.2</div>
        <div className="node minor-node p4" onClick={() => handleNavigate('/p3.3')}>3.3</div>
        <div className="letter p">P</div>
        
        {/* ! Nodes */}
        <div className="node main-node exclamation1" onClick={() => handleNavigate('/ex1')}>4</div>
        <div className="node minor-node exclamation2" onClick={() => handleNavigate('/ex4.1')}>4.1</div>
        <div className="node end-node exclamation3" onClick={() => handleNavigate('/end')}>4.2</div>
        <div className="letter ex">!</div>

        <svg class="fuel n" viewBox="0 0 64 64">
          <path d="M32 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
          <path d="M42 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
          <path d="M22 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
          <path d="M32 54c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z" fill="var(--flame-secondary)"/>
        </svg>

        <svg class="fuel l" viewBox="0 0 64 64">
          <path d="M32 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
          <path d="M42 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
          <path d="M22 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
          <path d="M32 54c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z" fill="var(--flame-secondary)"/>
        </svg>

        <svg class="fuel p" viewBox="0 0 64 64">
          <path d="M32 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
          <path d="M42 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
          <path d="M22 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
          <path d="M32 54c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z" fill="var(--flame-secondary)"/>
        </svg>

        <svg class="fuel ex" viewBox="0 0 64 64">
          <path d="M32 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
          <path d="M42 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
          <path d="M22 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
          <path d="M32 54c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z" fill="var(--flame-secondary)"/>
        </svg>
      </div>
    </div>
  );
}

export default NLPPathway;
