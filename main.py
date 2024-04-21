# Cleaning Text Steps
# 1) Create a text file and take the text from it
# 2) Convert the letter into lowercase ('Apple' is not equal to 'apple')
# 3) Remove punctuations like .,!? etc. 

import string

text = open('read.txt', encoding='utf-8').read() # encoding - standard process
lower_case = text.lower()
# print(string.punctuation) - all the punctuation
cleaned_text = lower_case.translate(str.maketrans('','',string.punctuation)) # maketrans - 3 parameters
# str1 : Specifies the list of characters that needs to be replaced
# str2 : Specifies the list of characters with which the characters need to be replaced
# str3 : Specifies the list of characters that need to be deleted (only relevant param in our case)

# Tokenize
tokenized_words = cleaned_text.split()
# print(tokenized_words)

# Stop Words
stop_words = ["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself",
              "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself",
              "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these",
              "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do",
              "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while",
              "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before",
              "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again",
              "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each",
              "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than",
              "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"]

# Remove stop words
final_words = []
for word in tokenized_words:
    if word not in stop_words:
        final_words.append(word)

print(final_words)