str = []
n = int(input("Enter the number of string you want to enter in the list :"))
count = 0
for i in range(n):
    word = input(f"Enter string {i+1} : ")
    str.append(word)
    if len(word) >= 2 and word[0] == word[-1]:
        count = count + 1
    
print("Count of words having length >2 and same first and last character is: ",count) 