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

print(cleaned_text)