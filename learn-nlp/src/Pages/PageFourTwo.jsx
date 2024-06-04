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

  const [isOpen, setIsOpen] = useState(false);  // State to manage the collapsible section
  const [isDone, setIsDone] = useState(false);  // State to manage the "Mark as Done" button

  // Retrieve the initial state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('page4.2-done') === 'true';
    setIsDone(savedState);
  }, []);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

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

  const snippet4 = `
  #TODO - Compare Actual Ratings to NLP: Analyze how the actual movie ratings compare to the sentiment analysis results.
  #TODO - Relax Query Search: Make the query search less strict by allowing for partial matches.
  #TODO - Query Length: Filter out shorter, less relevant queries to improve search accuracy.
  `

  const snippet5 = `
  import requests
  import os
  import random
  import string
  from dotenv import load_dotenv
  from nltk.tokenize import word_tokenize
  from nltk.corpus import stopwords
  from nltk.sentiment.vader import SentimentIntensityAnalyzer
  import matplotlib.pyplot as plt
  from transformers import pipeline
  
  # Load API key from .env file
  load_dotenv()
  TMDB_API_KEY = os.getenv("TMDB_API_KEY")
  
  def get_movie_review(query):
      query = query.replace(" ", "+")
      search_url = f"https://api.themoviedb.org/3/search/movie?api_key={TMDB_API_KEY}&query={query}"
      search_response = requests.get(search_url)
      search_data = search_response.json()
      
      if not search_data['results']:
          print("No results found for the query.")
          return None
      
      movie = search_data['results'][0]  # Use the first result for the most relevant
      movie_id = movie['id']
      movie_title = movie['title']
      
      review_url = f"https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key={TMDB_API_KEY}"
      review_response = requests.get(review_url)
      review_data = review_response.json()
      
      if not review_data['results']:
          print(f"No reviews found for the movie '{movie_title}'.")
          return None
      
      review = random.choice(review_data['results'])
      review_text = review['content']
      
      print(f"Movie: {movie_title}")
      print(f"Review: {review_text}")
      return review_text
  
  def process_text(text):
      lower_case = text.lower()
      cleaned_text = lower_case.translate(str.maketrans('', '', string.punctuation))
      tokenized_words = word_tokenize(cleaned_text, "english")
      
      final_words = [word for word in tokenized_words if word not in stopwords.words('english')]
      
      return final_words
  
  def analyze_emotions_transformers(text):
      emotion_analyzer = pipeline("text-classification", model="j-hartmann/emotion-english-distilroberta-base", top_k=None)
      
      # Truncate text to the first 256 tokens (512 is max, to be safe)
      tokenized_text = text.split()
      truncated_text = ' '.join(tokenized_text[:300])
      
      emotions = emotion_analyzer(truncated_text)
      
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
  
  def sentiment_analyse(sentiment_text):
      score = SentimentIntensityAnalyzer().polarity_scores(sentiment_text)
      print(f"\\n\\n**NLTK Sentiment Analysis**\\nOverall score: {score}") 
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
      ax1.set_title('Count of Emotions in the Text', fontsize=14, fontweight='bold')
      ax1.set_xlabel('Emotions', fontsize=12, fontweight='bold')
      ax1.set_ylabel('Count', fontsize=12, fontweight='bold')
      ax1.tick_params(axis='x', rotation=45)
      ax1.tick_params(axis='both', which='major', labelsize=10)
      plt.grid(axis='y', linestyle='--', linewidth=0.7)
      fig.tight_layout()
      plt.show()
  
  # ------------ Implementation of Functions ------------
  movie_query = input("\\n(Search online to make sure the EXACT name so the query search is correct) \\n\\nEnter the movie name: ")
  review_text = get_movie_review(movie_query)
  
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
      <div className="section-divider">
          <h2 className="subheading">Extensions</h2>
          <p className="description">By following these steps, students can fetch movie reviews, process text for analysis, perform emotion and sentiment analysis, and visualize the results. This structured approach makes the code easier to understand and extend.</p>
          <div className="code-container" style={{ position: 'relative' }}>
            <SyntaxHighlighter language="python" style={ solarizedlight }>
              {snippet4}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(snippet4)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
              Copy
            </button>
        </div>
      </div>
      <hr></hr>
      <div className="section-divider">
        <h2 className="subheading">Full Code from Unit 3</h2>
        <button onClick={toggleCollapse} className="toggle-button" style={{ marginTop: '20px', cursor: 'pointer' }}>
          {isOpen ? 'Hide' : 'Show'} movie_reviews.py
        </button>
        {isOpen && (
          <div className="collapsible-content" style={{ marginTop: '10px', position: 'relative' }}>
            <SyntaxHighlighter language="python" style={ solarizedlight }>
              { snippet5 }
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard(snippet5)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
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

export default PageFourTwo;