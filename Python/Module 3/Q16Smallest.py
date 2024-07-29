def smallestNum(list1):
    min = list1[0]
    for i in list1:
        if min > i:
            min = i
        else:
            pass
    return min

a = [1,2,3,4,5,-4,-19,44,22,-14]
minimum = smallestNum(a)
print("List :",a)
print("Smallest Number of the List :",minimum)