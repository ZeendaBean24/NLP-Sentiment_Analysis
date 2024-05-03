import requests, os
from dotenv import load_dotenv

load_dotenv()

NYTIMES_BOOKS_API = os.getenv("NYTIMES_BOOKS_API")

URL = f"https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key={NYTIMES_BOOKS_API}"

print(URL)
print(NYTIMES_BOOKS_API)