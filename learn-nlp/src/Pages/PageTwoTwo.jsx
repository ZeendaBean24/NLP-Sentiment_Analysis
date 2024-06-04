import React, { useState, useEffect } from 'react';
import './styles.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from 'react-router-dom';

function PageTwoTwo() {
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

  const [isOpen, setIsOpen] = useState(false);  // State to manage the collapsible section
  const [isDone, setIsDone] = useState(false);  // State to manage the "Mark as Done" button

  // Retrieve the initial state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('page2.2-done') === 'true';
    setIsDone(savedState);
  }, []);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const handleDoneToggle = () => {
    const newState = !isDone;
    setIsDone(newState);
    localStorage.setItem('page2.2-done', newState);
  };

  const snippet1 = `
  from nltk.sentiment.vader import SentimentIntensityAnalyzer  # For sentiment analysis
  import matplotlib.pyplot as plt  # For plotting graphs  
  `;

  const snippet2 = `
  def sentiment_analyse(sentiment_text):
  score = SentimentIntensityAnalyzer().polarity_scores(sentiment_text)  # Get sentiment scores
  print(f"Overall score: {score}\\n") 
  neg = score['neg']
  pos = score['pos']
  if neg > pos:
      print("Overall: Negative Sentiment")
  elif pos > neg:
      print("Overall: Positive Sentiment")
  else:
      print("Overall: Neutral Sentiment.")
  print("\\n------------------\\n")
  `

  const snippet3 = `
  import requests, os, json, random, string
  from dotenv import load_dotenv
  from bs4 import BeautifulSoup
  from collections import Counter
  from nltk.tokenize import word_tokenize
  from nltk.corpus import stopwords
  from nltk.sentiment.vader import SentimentIntensityAnalyzer
  import matplotlib.pyplot as plt
  
  load_dotenv()
  
  NYTIMES_BOOKS_API = os.getenv("NYTIMES_BOOKS_API")
  
  def get_author_book_reviews(name):
      # Format the author name for the search query
      author_query = name.replace(" ", "+")
      URL = f"https://api.nytimes.com/svc/books/v3/reviews.json?author={author_query}&api-key={NYTIMES_BOOKS_API}"
      response = requests.get(url = URL)
      data = response.json()
      # Extract review summaries, book titles, and authors
      review_urls = [[result['summary'], result['book_title'], result['book_author']] for result in data['results'] if 'summary' in result and result['summary']]
      return review_urls
  
  def process_text(text):
      lower_case = text.lower()
      cleaned_text = lower_case.translate(str.maketrans('', '', string.punctuation))
      tokenized_words = word_tokenize(cleaned_text, "english")
      
      final_words = [word for word in tokenized_words if word not in stopwords.words('english')]
      
      return final_words
  
  def analyze_emotions(final_words):
      emotion_list = []
      with open('emotions.txt', 'r') as file:
          for line in file:
              clear_line = line.replace("n", '').replace(",", '').replace("'", '').strip()
              word, emotion = clear_line.split(':')
              if word in final_words:
                  emotion_list.append(emotion)
      
      return Counter(emotion_list)
  
  def sentiment_analyse(sentiment_text):
      score = SentimentIntensityAnalyzer().polarity_scores(sentiment_text)
      print(f"Overall score: {score}\\n") 
      neg = score['neg']
      pos = score['pos']
      if neg > pos:
          print("Overall: Negative Sentiment")
      elif pos > neg:
          print("Overall: Positive Sentiment")
      else:
          print("Overall: Neutral Sentiment.")
      print("\\n------------------\\n")
  
  def plot_emotions(emotion_counts):
      fig, ax1 = plt.subplots()
      ax1.bar(emotion_counts.keys(), emotion_counts.values(), color='skyblue')
      ax1.set_title('Count of Sentiments in the Text', fontsize=14, fontweight='bold')
      ax1.set_xlabel('Sentiments', fontsize=12, fontweight='bold')
      ax1.set_ylabel('Count', fontsize=12, fontweight='bold')
      ax1.tick_params(axis='x', rotation=45)
      ax1.tick_params(axis='both', which='major', labelsize=10)
      plt.grid(axis='y', linestyle='--', linewidth=0.7)
      fig.tight_layout()
      # plt.savefig('graph.png')
      plt.show()
  
  # ------------ Implementation of Functions ------------
  author_name = input("Enter the author's name: ")
  reviews = get_author_book_reviews(author_name)
  # print(review_urls)
  
  # Select a random review from the list
  if reviews: 
      random_review = random.choice(reviews)
      print("------------------ \\n")
      print("Randomly selected review: \\n")
      print(f"Summary: {random_review[0]}")
      print(f"Book Title: {random_review[1]}")
      print(f"Author: {random_review[2]}")
      print("\\n------------------")
      # Process the summary text for NLP
      final_words = process_text(random_review[0])
      
      # Analyze emotions
      emotion_counts = analyze_emotions(final_words)
      
      print(f"------------------ \\n\\nAll emotions detected: {list(emotion_counts.elements())}")
      print(f"\\nCounter: {emotion_counts}\\n")
      
      # Perform sentiment analysis
      sentiment_analyse(random_review[0])
      
      # Plot emotions
      plot_emotions(emotion_counts)
      
  else: # If the query has no returns
      print("No reviews found.")
  `

  const snippet4 = `
  def plot_emotions(emotion_counts):
  fig, ax1 = plt.subplots()
  ax1.bar(emotion_counts.keys(), emotion_counts.values(), color='skyblue')
  ax1.set_title('Count of Sentiments in the Text', fontsize=14, fontweight='bold')
  ax1.set_xlabel('Sentiments', fontsize=12, fontweight='bold')
  ax1.set_ylabel('Count', fontsize=12, fontweight='bold')
  ax1.tick_params(axis='x', rotation=45)
  ax1.tick_params(axis='both', which='major', labelsize=10)
  plt.grid(axis='y', linestyle='--', linewidth=0.7)
  fig.tight_layout()
  plt.show()
  `

  const snippet5 = `
  # ------------ Implementation of Functions ------------
  author_name = input("Enter the author's name: ")
  reviews = get_author_book_reviews(author_name)
  
  # Select a random review from the list
  if reviews: 
      random_review = random.choice(reviews)
      print("------------------ \\n")
      print("Randomly selected review: \\n")
      print(f"Summary: {random_review[0]}")
      print(f"Book Title: {random_review[1]}")
      print(f"Author: {random_review[2]}")
      print("\\n------------------")
      
      # Process the summary text for NLP
      final_words = process_text(random_review[0])
      
      # Analyze emotions
      emotion_counts = analyze_emotions(final_words)
      
      print(f"------------------ \\n\\nAll emotions detected: {list(emotion_counts.elements())}")
      print(f"\\nCounter: {emotion_counts}\\n")
      
      # Perform sentiment analysis
      sentiment_analyse(random_review[0])
      
      # Plot emotions
      plot_emotions(emotion_counts)
      
  else: 
      print("No reviews found.")  
  `

  return (
    <div className="page">
      <h1 className="page-title">2.2 - Sentiment Analysis and Visualization</h1>
        <hr></hr>
      <div className="section-divider">
        <p className="intro">Finally, we analyze the overall sentiment of the text and visualize the results. Sentiment analysis tells us if the text is positive, negative, or neutral. Visualization helps us understand the data at a glance.</p>
      </div>
      <hr></hr>  
        <div className="section-divider">
          <h2 className="subheading">Importing Libraries for Sentiment Analysis and Visualization</h2>
          <p className="description">We import libraries for performing sentiment analysis and creating visualizations.</p>
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
        <h2 className="subheading">Function for Sentiment Analysis</h2>
        <p className="description">This function uses the VADER sentiment analyzer to determine the overall sentiment of the text.</p>
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
        <h2 className="subheading">Function to Plot Emotions</h2>
        <p className="description">This function creates a bar chart to visualize the count of each sentiment, making it easier to understand the emotional tone of the text.</p>
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
        <h2 className="subheading">Putting It All Together</h2>
        <p className="description">This will implement all the functions that we create above.</p>
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
      <div className="section-divider">
        <h2 className="subheading">Full Code from Unit 2</h2>
        <button onClick={toggleCollapse} className="toggle-button" style={{ marginTop: '20px', cursor: 'pointer' }}>
          {isOpen ? 'Hide' : 'Show'} book_summary.py
        </button>
        {isOpen && (
          <div className="collapsible-content" style={{ marginTop: '10px', position: 'relative' }}>
            <SyntaxHighlighter language="python" style={ solarizedlight }>
              { snippet3 }
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(snippet3)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
              Copy
            </button>
          </div>
        )}
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

export default PageTwoTwo;