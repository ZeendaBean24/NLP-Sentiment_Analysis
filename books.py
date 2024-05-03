import requests, os, json
from dotenv import load_dotenv

load_dotenv()

NYTIMES_BOOKS_API = os.getenv("NYTIMES_BOOKS_API")

author = "Stephen+King"

URL = f"https://api.nytimes.com/svc/books/v3/reviews.json?author={author}&api-key={NYTIMES_BOOKS_API}"

response = requests.get(url = URL)
data = response.json()

review_urls = [result['url'] for result in data['results'] if 'url' in result]

print(review_urls)
