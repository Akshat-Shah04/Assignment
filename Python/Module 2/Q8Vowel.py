# Write a Python program to test whether a passed letter is a vowel or not
char = input("Enter a character : ").lower()
if(char == 'a' or char == 'e' or char == 'i' or char == 'o' or char == 'u'):
    print(f"{char} is a vowel.")
else:
    print(f"{char} is a consonant.")