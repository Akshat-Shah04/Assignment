# Write a Python program to count the number of characters (character frequency) in a string
str = input("Enter a string : ")
str1 = list(str)
n = input("Enter the character you want to check count of :")
count = str1.count(n)
print(f"Count of {n} in String '{str}' is {count}")
