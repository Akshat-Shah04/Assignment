def maximum(a):
    max = a[0]
    for i in a:
        if i > max:
            max = i
    return max

def minimum(a):
    min = a[0]
    for i in a:
        if i<min:
            min = i
    return min

def summation(a):
    sum = 0
    for i in a:
        sum = sum + i
    return sum

list1 = []
n = int(input("How many numbers you want to enter in the list : "))
for i in range(n):
    num = int(input(f"Enter any number {i + 1}: "))
    list1.append(num)

max = maximum(list1)
min = minimum(list1)
sum = summation(list1)

print(f"Original List : {list1}")
print(f"Maximum : {max}")
print(f"Minimum : {min}")
print(f"Summation : {sum}")

