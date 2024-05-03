import requests, os, json
from dotenv import load_dotenv

load_dotenv()

NYTIMES_BOOKS_API = os.getenv("NYTIMES_BOOKS_API")

author = "Stephen+King"

URL = f"https://api.nytimes.com/svc/books/v3/reviews.json?author={author}&api-key={NYTIMES_BOOKS_API}"

r = requests.get(url = URL)

data = r.json()

