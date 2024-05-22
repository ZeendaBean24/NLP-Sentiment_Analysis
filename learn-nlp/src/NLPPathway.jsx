import React from 'react';
import './NLPPathway.css';

function NLPPathway() {
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
        <div className="node main-node n1"></div>
        <div className="node minor-node n2"></div>
        <div className="node minor-node n3"></div>
        <div className="node minor-node n4"></div>
        <div className="letter n">N</div>
        
        {/* L Nodes */}
        <div className="node main-node l1"></div>
        <div className="node minor-node l2"></div>
        <div className="node minor-node l3"></div>
        <div className="letter l">L</div>
        
        {/* P Nodes */}
        <div className="node main-node p1"></div>
        <div className="node minor-node p2"></div>
        <div className="node minor-node p3"></div>
        <div className="node minor-node p4"></div>
        <div className="letter p">P</div>
        
        {/* ! Nodes */}
        <div className="node main-node exclamation1"></div>
        <div className="node minor-node exclamation2"></div>
        <div className="node end-node exclamation3"></div>
        <div className="letter ex">!</div>
      </div>
    </div>
  );
}

export default NLPPathway;
