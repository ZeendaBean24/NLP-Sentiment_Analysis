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
    print(f"Overall score: {score}\n") 
    neg = score['neg']
    pos = score['pos']
    if neg > pos:
        print("Overall: Negative Sentiment")
    elif pos > neg:
        print("Overall: Positive Sentiment")
    else:
        print("Overall: Neutral Sentiment.")
    print("\n------------------\n")

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
    print("------------------ \n")
    print("Randomly selected review: \n")
    print(f"Summary: {random_review[0]}")
    print(f"Book Title: {random_review[1]}")
    print(f"Author: {random_review[2]}")
    print("\n------------------")
    # Process the summary text for NLP
    final_words = process_text(random_review[0])
    
    # Analyze emotions
    emotion_counts = analyze_emotions(final_words)
    
    print(f"------------------ \n\nAll emotions detected: {list(emotion_counts.elements())}")
    print(f"\nCounter: {emotion_counts}\n")
    
    # Perform sentiment analysis
    sentiment_analyse(random_review[0])
    
    # Plot emotions
    plot_emotions(emotion_counts)
    
else: # If the query has no returns
    print("No reviews found.")