import React, { useState, useEffect } from 'react';
import './styles.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from 'react-router-dom';

function PageOneThree() {
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
    const savedState = localStorage.getItem('page1.3-done') === 'true';
    setIsDone(savedState);
  }, []);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const handleDoneToggle = () => {
    const newState = !isDone;
    setIsDone(newState);
    localStorage.setItem('page1.3-done', newState);
  };

  const snippet1 = `
  from nltk.sentiment.vader import SentimentIntensityAnalyzer  # For sentiment analysis
  import matplotlib.pyplot as plt  # For plotting graphs
  
  # Function to analyze sentiment
  def sentiment_analyse(sentiment_text):
      score = SentimentIntensityAnalyzer().polarity_scores(sentiment_text)  # Get sentiment scores
      print(f"Overall score: {score}") 
      neg = score['neg']
      pos = score['pos']
      if neg > pos:
          print("Overall: Negative Sentiment")
      elif pos > neg:
          print("Overall: Positive Sentiment")
      else:
          print("Overall: Neutral Sentiment.")
      print("\\n------------------\\n")
  
  # Analyze sentiment of the cleaned text
  sentiment_analyse(cleaned_text)  
  `;

  const snippet2 = `
  # Plotting the sentiment count using matplotlib
  fig, ax1 = plt.subplots()
  ax1.bar(w.keys(), w.values(), color='skyblue')
  ax1.set_title('Count of Sentiments in the Text', fontsize=14, fontweight='bold')
  ax1.set_xlabel('Sentiments', fontsize=12, fontweight='bold')
  ax1.set_ylabel('Count', fontsize=12, fontweight='bold')
  ax1.tick_params(axis='x', rotation=45)
  ax1.tick_params(axis='both', which='major', labelsize=10)
  plt.grid(axis='y', linestyle='--', linewidth=0.7)
  fig.tight_layout()
  plt.savefig('graph.png')
  plt.show()
  `

  const snippet3 = `
  # Cleaning Text Steps
  # 1) Create a text file and take the text from it
  # 2) Convert the letter into lowercase ('Apple' is not equal to 'apple')
  # 3) Remove punctuations like .,!? etc. 
  
  import string
  from collections import Counter 
  from nltk.tokenize import word_tokenize
  from nltk.corpus import stopwords
  from nltk.sentiment.vader import SentimentIntensityAnalyzer
  import matplotlib.pyplot as plt
  
  text = open('read.txt', encoding='utf-8').read() # encoding - standard process
  lower_case = text.lower()
  # print(string.punctuation) - all the punctuation
  cleaned_text = lower_case.translate(str.maketrans('','',string.punctuation)) # maketrans - 3 parameters
  # str1 : Specifies the list of characters that needs to be replaced
  # str2 : Specifies the list of characters with which the characters need to be replaced
  # str3 : Specifies the list of characters that need to be deleted (only relevant param in our case)
  
  # Tokenize
  # tokenized_words = cleaned_text.split()
  tokenized_words = word_tokenize(cleaned_text, "english") #.split takes a lot more time
  
  # Remove stop words
  final_words = []
  for word in tokenized_words:
      if word not in stopwords.words('english'): # can choose the language
          final_words.append(word)
  
  # print(final_words)
  
  # NLP Emotion Algorithm
  # 1) Check if the word in the final word list is also present in emotion.txt
  #   - Open the emotion file
  #   - Loop through each line and clear it
  #   - Extract the word and emotion using split
  
  # 2) If word is present -> Add the emotion to emotion_list
  # 3) Finally count each emotion in the emotion list
  
  emotion_list = []
  with open('emotions.txt', 'r') as file:
      for line in file:
          clear_line = line.replace("n", '').replace(",", '').replace("'", '').strip() # Replace new lines, quotes, commas with empty characters 'nothing'
          # print(clear_line)
          word, emotion = clear_line.split(':') # Looks for character of colon, anything before colon is stored in word, anything after colon is stored in emotion
          # print("Word : " + word + " " + " Emotion: " + emotion)
  
          if word in final_words: 
              emotion_list.append(emotion)
  
  print(f"------------------ \\n \\nAll emotions detected: {emotion_list}")
  w = Counter(emotion_list)
  print(f"\\nCounter: {w} \\n")
  
  def sentiment_analyse(sentiment_text):
      score = SentimentIntensityAnalyzer().polarity_scores(sentiment_text)
      print(f"Overall score: {score} \\n") 
      neg = score['neg']
      pos = score['pos']
      if neg > pos:
          print("Overall: Negative Sentiment")
      elif pos > neg:
          print("Overall: Positive Sentiment")
      else:
          print("Overall: Neutral Sentiment.")
      print("\\n------------------ \\n")
  
  sentiment_analyse(cleaned_text)
  
  # Print counter using matplotlib graph
  fig, ax1 = plt.subplots()
  ax1.bar(w.keys(), w.values(), color='skyblue')
  ax1.set_title('Count of Sentiments in the Text', fontsize=14, fontweight='bold')
  ax1.set_xlabel('Sentiments', fontsize=12, fontweight='bold')
  ax1.set_ylabel('Count', fontsize=12, fontweight='bold')
  ax1.tick_params(axis='x', rotation=45)
  ax1.tick_params(axis='both', which='major', labelsize=10)
  plt.grid(axis='y', linestyle='--', linewidth=0.7)
  fig.tight_layout()
  plt.savefig('graph.png')
  plt.show()
  `

  return (
    <div className="page">
      <h1 className="page-title">1.3 - Sentiment Analysis and Visualization</h1>
        <hr></hr>
      <div className="section-divider">
        <p className="intro">In this part, we analyze the overall sentiment of the text and visualize the results. Sentiment analysis tells us whether the text is positive, negative, or neutral, and visualization helps us understand the data at a glance.</p>
      </div>
      <hr></hr>  
        <div className="section-divider">
          <h2 className="subheading">Analyzing Sentiment</h2>
          <p className="description">We use a sentiment analysis tool to determine whether the text is overall positive, negative, or neutral.</p>
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
        <h2 className="subheading">Visualizing the Results</h2>
        <p className="description">We create a bar chart to visualize the count of each sentiment, making it easier to understand the emotional tone of the text. It should have also saved an image of the graph called <strong>graph.png</strong> in your current directory. Check it out!</p>
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
      <div className="section-divider">
        <h2 className="subheading">Full Code from Unit 1</h2>
        <button onClick={toggleCollapse} className="toggle-button" style={{ marginTop: '20px', cursor: 'pointer' }}>
          {isOpen ? 'Hide' : 'Show'} main.py
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

export default PageOneThree;