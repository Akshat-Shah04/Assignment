str = input("Enter a String : ")

if len(str) == 2:
    result = str*2
elif len(str) < 2:
    result = ""
else :
    result = str[:2] + str[-2:]

print(f"Original String is : {str}")
print(f"Expected String is : {result}")

