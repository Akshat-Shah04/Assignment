# How will you compare two lists?
list1 = [1,2,3]
list2 = [1,2,3]
list3 = [3,2,1]
list4 = [2,3,1,4]

print(list1 == list2)
print(list2 == list3)
print(list2 == list4)
print(sorted(list1) == sorted(list3))
print(sorted(list1) == sorted(list4))

