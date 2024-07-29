# Write a Python program to add 'ing' at the end of a given string (length should be at least 3). If the given string already ends with 'ing' then add 'ly' instead if the string length of the given string is less than 3, leave it unchanged.

str = input("Enter a string : ")
count = 0
for i in str:
    count = count + 1

# print(count)

if count >= 3:
    if str.endswith('ing'):
        str = str + 'ly'
    else :
        str = str + 'ing'
else :
    pass

print(str)