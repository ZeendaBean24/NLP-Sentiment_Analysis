import React, { useState, useEffect } from 'react';
import './styles.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from 'react-router-dom';

function PageThreeOne() {
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
    const savedState = localStorage.getItem('page2-done') === 'true';
    setIsDone(savedState);
  }, []);

  const handleDoneToggle = () => {
    const newState = !isDone;
    setIsDone(newState);
    localStorage.setItem('page2-done', newState);
  };

  const snippet1 = `
  import requests  # For making HTTP requests
`;

const snippet2 = `
  def get_movie_review(query):
    # Replace spaces in the query with '+'
    query = query.replace(" ", "+")
    search_url = f"https://api.themoviedb.org/3/search/movie?api_key={TMDB_API_KEY}&query={query}"

    # Make the request to TMDB
    search_response = requests.get(search_url)
    search_data = search_response.json()
`;

const snippet3 = `
  if not search_data['results']:
      print("No results found for the query.")
      return None
`;

const snippet4 = `
  # Use the first result for the most relevant
  movie = search_data['results'][0]
  movie_id = movie['id']
  movie_title = movie['title']
`;

const snippet5 = `
  review_url = f"https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key={TMDB_API_KEY}"
  review_response = requests.get(review_url)
  review_data = review_response.json()

  if not review_data['results']:
      print(f"No reviews found for the movie '{movie_title}'.")
      return None
`;

const snippet6 = `
  # Select a random review
  review = random.choice(review_data['results'])
  review_text = review['content']

  print(f"Movie: {movie_title}")
  print(f"Review: {review_text}")
  return review_text
`;

  return (
    <div className="page">
      <h1 className="page-title">3.1 - Fetching Movie Reviews</h1>
      <hr></hr>
      <div className="section-divider">
        <p className="intro">We will fetch movie reviews from TMDB using the API key. This involves making HTTP requests and parsing JSON data.</p>
      </div>
      <hr></hr>  
      <div className="section-divider">
        <h2 className="subheading">Importing the Requests Library</h2>
        <p className="description">We import the requests library to handle HTTP requests.</p>
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
        <h2 className="subheading">Defining the Function to Fetch Movie Reviews</h2>
        <p className="description">We define a function to format the movie query, make a request to the TMDB API, and parse the JSON response.</p>
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
        <h2 className="subheading">Handling No Results</h2>
        <p className="description">We check if the search returned any results. If not, we print a message and return None.</p>
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
        <h2 className="subheading">IGetting the Movie ID and Title</h2>
        <p className="description">We extract the movie ID and title from the first search result, assuming it is the most relevant.</p>
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
        <h2 className="subheading">Fetching Reviews for the Movie</h2>
        <p className="description">We make another request to fetch reviews for the movie using its ID and handle cases where no reviews are found.</p>
        <div className="code-container" style={{ position: 'relative' }}>
          <SyntaxHighlighter language="python" style={ solarizedlight }>
            {snippet5}
          </SyntaxHighlighter>
          <button onClick={() => copyToClipboard(snippet5)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
            Copy
          </button>
        </div>
      </div>
      <div className="section-divider">
        <h2 className="subheading">Selecting and Returning a Random Review</h2>
        <p className="description">We select a random review from the list of reviews and return its content.</p>
        <div className="code-container" style={{ position: 'relative' }}>
          <SyntaxHighlighter language="python" style={ solarizedlight }>
            {snippet6}
          </SyntaxHighlighter>
          <button onClick={() => copyToClipboard(snippet6)} className="copy-button" style={{ position: 'absolute', top: '5px', right: '5px' }}>
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

export default PageThreeOne;