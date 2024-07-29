str = input("Enter a string : ").lower()
found_list = []
words = []
words = str.split(' ')
# print(words)
for i in words:
    count = words.count(i)
    if i not in found_list:
        found_list.append(i)
        print(f"{i} is repeated {count} times.")
    else:
        pass
    
