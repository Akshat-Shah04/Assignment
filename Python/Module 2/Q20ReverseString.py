str = input("Enter a string : ")
length = len(str)
if length % 4 == 0:
    rev_str = str[::-1]
    print(f"Reversed String is : {rev_str}")
else:
    pass