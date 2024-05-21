import requests, os, json
from dotenv import load_dotenv
from bs4 import BeautifulSoup

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

author_name = input("Enter the author's name: ")
reviews = get_author_book_reviews(author_name)
# print(review_urls)


