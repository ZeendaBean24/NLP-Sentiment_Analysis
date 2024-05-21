import requests, os, json
from dotenv import load_dotenv
from bs4 import BeautifulSoup

load_dotenv()

NYTIMES_BOOKS_API = os.getenv("NYTIMES_BOOKS_API")

author = "Stephen+King"

URL = f"https://api.nytimes.com/svc/books/v3/reviews.json?author={author}&api-key={NYTIMES_BOOKS_API}"

response = requests.get(url = URL)
data = response.json()

review_urls = [[result['summary'], result['book_title'], result['book_author']] for result in data['results'] if 'summary' in result and result['summary']]

# print(review_urls)


