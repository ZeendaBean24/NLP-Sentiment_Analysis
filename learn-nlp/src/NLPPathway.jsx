import React from 'react';
import './NLPPathway.css';

function NLPPathway() {
  return (
    <div className="nlp-container">
      {/* N Nodes */}
      <div className="node main-node n1">N</div>
      <div className="node minor-node n2"></div>
      <div className="node minor-node n3"></div>
      <div className="node minor-node n4"></div>
      <div className="letter n">N</div>
      
      {/* L Nodes */}
      <div className="node main-node l1">L</div>
      <div className="node minor-node l2"></div>
      <div className="node minor-node l3"></div>
      <div className="letter l">L</div>
      
      {/* P Nodes */}
      <div className="node main-node p1">P</div>
      <div className="node minor-node p2"></div>
      <div className="node minor-node p3"></div>
      <div className="node minor-node p4"></div>
      <div className="letter p">P</div>
      
      {/* ! Nodes */}
      <div className="node main-node exclamation1">!</div>
      <div className="node minor-node exclamation2"></div>
      <div className="node end-node exclamation3"></div>
      <div className="letter ex">!</div>
    </div>
  );
}

export default NLPPathway;
