words = []
n = int(input("Enter the number of words you want to enter: "))
for i in range(n):
    word = input(f"Enter word {i + 1}: ")
    words.append(word)
print("List of the words entered :", words)
