str = input("Enter a String : ")
word = input(f"Enter the word you want to enter in the string '{str} : ")
length = len(str) // 2
new_str = str[:length] + word + str[length:]
print(f"New String is : {new_str}")

