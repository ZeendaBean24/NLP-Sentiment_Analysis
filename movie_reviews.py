import requests
import random
import os
from dotenv import load_dotenv

# Load API key from .env file
load_dotenv()
TMDB_API_KEY = os.getenv("TMDB_API_KEY")

def get_movie_review(query):
    # Replace spaces with '+'
    query = query.replace(" ", "+")
    
    # Define the search URL
    search_url = f"https://api.themoviedb.org/3/search/movie?api_key={TMDB_API_KEY}&query={query}"
    
    # Make the API call to search for movies
    search_response = requests.get(search_url)
    search_data = search_response.json()
    
    if not search_data['results']:
        print("No results found for the query.")
        return None

    # Randomly select a movie from the search results
    movie = random.choice(search_data['results'])
    movie_id = movie['id']
    movie_title = movie['title']
    
    # Define the review URL
    review_url = f"https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key={TMDB_API_KEY}"
    
    # Make the API call to get reviews
    review_response = requests.get(review_url)
    review_data = review_response.json()
    
    if not review_data['results']:
        print(f"No reviews found for the movie '{movie_title}'.")
        return None

    # Randomly select a review from the reviews
    review = random.choice(review_data['results'])
    review_text = review['content']
    
    print(f"Movie: {movie_title}")
    print(f"Review: {review_text}")
    return review_text

# User input
query = input("\n(Search online to make sure the EXACT name so the query search is correct) \n\nEnter the movie name: ")
review_text = get_movie_review(query)

#TODO: How actual rating compares to the NLP.
#TODO: Less strict on query search