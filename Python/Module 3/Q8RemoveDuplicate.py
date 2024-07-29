a = []
n = int(input("Enter how many numbers you want to input in list : "))
# Method 1
for i in range(0,n):
    num = int(input(f"Enter a number {i+1} : "))
    a.append(num)
print("Original List : ",a)
newlist = set(a)    
newlist = list(newlist)
# Method 2
rem = []
for i in a:
    if(i not in rem):
        rem.append(i)
        
# print("List after removing duplicates : ",newlist)
print("new list:",rem)


