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

text = open('Resources/read.txt', encoding='utf-8').read() # encoding - standard process
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
with open('Resources/emotions.txt', 'r') as file:
    for line in file:
        clear_line = line.replace("n", '').replace(",", '').replace("'", '').strip() # Replace new lines, quotes, commas with empty characters 'nothing'
        # print(clear_line)
        word, emotion = clear_line.split(':') # Looks for character of colon, anything before colon is stored in word, anything after colon is stored in emotion
        # print("Word : " + word + " " + " Emotion: " + emotion)

        if word in final_words: 
            emotion_list.append(emotion)

print(f"------------------ \n \nAll emotions detected: {emotion_list}")
w = Counter(emotion_list)
print(f"\nCounter: {w} \n")

def sentiment_analyse(sentiment_text):
    score = SentimentIntensityAnalyzer().polarity_scores(sentiment_text)
    print(f"Overall score: {score} \n") 
    neg = score['neg']
    pos = score['pos']
    if neg > pos:
        print("Overall: Negative Sentiment")
    elif pos > neg:
        print("Overall: Positive Sentiment")
    else:
        print("Overall: Neutral Sentiment.")
    print("\n------------------ \n")

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

#TODO: books extraction, other APIs, news, BERT model, audio model (hume)