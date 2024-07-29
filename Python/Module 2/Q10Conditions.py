# Write a Python program that will return true if the two given integervalues are equal or their sum or difference is 5.

n1 = int(input("Enter number 1 : "))
n2 = int(input("Enter number 2 : "))

if (n1 == n2 or n1+n2 == 5 or n1-n2 == 5):
    flag = True
else :
    flag = False
print("Result :",flag)
    