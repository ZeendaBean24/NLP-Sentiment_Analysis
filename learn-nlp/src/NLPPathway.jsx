import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NLPPathway.css';

function NLPPathway() {
  let navigate = useNavigate();
  function handleNavigate(path) {
    navigate(path);
  }

  const [isPageOneDone, setIsPageOneDone] = useState(false);

  useEffect(() => {
    const pageOneDone = localStorage.getItem('page1-done') === 'true';
    setIsPageOneDone(pageOneDone);
  }, []);

  const [isPageOneOneDone, setIsPageOneOneDone] = useState(false);

  useEffect(() => {
    const pageOneOneDone = localStorage.getItem('page1.1-done') === 'true';
    setIsPageOneOneDone(pageOneOneDone);
  }, []);

  const [isPageOneTwoDone, setIsPageOneTwoDone] = useState(false);

  useEffect(() => {
    const pageOneTwoDone = localStorage.getItem('page1.2-done') === 'true';
    setIsPageOneTwoDone(pageOneTwoDone);
  }, []);

  const [isPageOneThreeDone, setIsPageOneThreeDone] = useState(false);

  useEffect(() => {
    const pageOneThreeDone = localStorage.getItem('page1.3-done') === 'true';
    setIsPageOneThreeDone(pageOneThreeDone);
  }, []);

  const [isPageTwoDone, setIsPageTwoDone] = useState(false);

  useEffect(() => {
    const pageTwoDone = localStorage.getItem('page2-done') === 'true';
    setIsPageTwoDone(pageTwoDone);
  }, []);

  const [isPageTwoOneDone, setIsPageTwoOneDone] = useState(false);

  useEffect(() => {
    const pageTwoOneDone = localStorage.getItem('page2.1-done') === 'true';
    setIsPageTwoOneDone(pageTwoOneDone);
  }, []);

  const [isPageTwoTwoDone, setIsPageTwoTwoDone] = useState(false);

  useEffect(() => {
    const pageTwoTwoDone = localStorage.getItem('page2.2-done') === 'true';
    setIsPageTwoTwoDone(pageTwoTwoDone);
  }, []);

  const allNNodesDone = isPageOneDone && isPageOneOneDone && isPageOneTwoDone && isPageOneThreeDone;
  const allLNodesDone = isPageTwoDone && isPageTwoOneDone && isPageTwoTwoDone;

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
        <div className={`node main-node n1 ${isPageOneDone ? 'done' : ''}`} onClick={() => handleNavigate('/n1')}>1</div>
        <div className={`node minor-node n2 ${isPageOneOneDone ? 'done' : ''}`} onClick={() => handleNavigate('/n1.1')}>1.1</div>
        <div className={`node minor-node n3 ${isPageOneTwoDone ? 'done' : ''}`} onClick={() => handleNavigate('/n1.2')}>1.2</div>
        <div className={`node minor-node n4 ${isPageOneThreeDone ? 'done' : ''}`} onClick={() => handleNavigate('/n1.3')}>1.3</div>
        <div className="letter n">N</div>
        
        {/* L Nodes */}
        <div className={`node main-node l1 ${isPageTwoDone ? 'done' : ''}`} onClick={() => handleNavigate('/l2')}>2</div>
        <div className={`node minor-node l2 ${isPageTwoOneDone ? 'done' : ''}`} onClick={() => handleNavigate('/l2.1')}>2.1</div>
        <div className={`node minor-node l3 ${isPageTwoTwoDone ? 'done' : ''}`} onClick={() => handleNavigate('/l2.2')}>2.2</div>
        <div className="letter l">L</div>
        
        {/* P Nodes */}
        <div className="node main-node p1" onClick={() => handleNavigate('/p3')}>3</div>
        <div className="node minor-node p2" onClick={() => handleNavigate('/p3.1')}>3.1</div>
        <div className="node minor-node p3" onClick={() => handleNavigate('/p3.2')}>3.2</div>
        <div className="node minor-node p4" onClick={() => handleNavigate('/p3.3')}>3.3</div>
        <div className="letter p">P</div>
        
        {/* ! Nodes */}
        <div className="node main-node exclamation1" onClick={() => handleNavigate('/ex4')}>4</div>
        <div className="node minor-node exclamation2" onClick={() => handleNavigate('/ex4.1')}>4.1</div>
        <div className="node end-node exclamation3" onClick={() => handleNavigate('/end')}>4.2</div>
        <div className="letter ex">!</div>

        {allNNodesDone && (
          <>
            <svg class="fuel n" viewBox="0 0 64 64">
              <path d="M32 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
              <path d="M42 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
              <path d="M22 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
              <path d="M32 54c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z" fill="var(--flame-secondary)"/>
            </svg>
          </>
        )}

        {allLNodesDone && (
          <>
            <svg class="fuel l" viewBox="0 0 64 64">
              <path d="M32 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
              <path d="M42 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
              <path d="M22 64c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z"/>
              <path d="M32 54c-5-15-10-20-15-25s-10-10-10-15 5-10 10-10 10 5 15 5 10-5 15-5 10 5 10 10-5 10-10 15-10 10-15 25z" fill="var(--flame-secondary)"/>
            </svg>
          </>
        )}
          
            {/* <svg class="fuel p" viewBox="0 0 64 64">
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
            </svg> */}
      </div>
    </div>
  );
}

export default NLPPathway;
