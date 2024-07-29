# Write a Python program to get a single string from two given strings, separated by a space and swap the first two characters of each string.
str = input("Enter a sentence containing 2 words: ")
word = []
word = str.split(' ')
def splitWords(word1,word2):
    new_word1 = word2[:2] + word1[2:]
    new_word2 = word1[:2] + word2[2:]
    return new_word1,new_word2

a,b = splitWords(word[0],word[1])
print(a,b)
