a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
b = [0, 2, 4, 6, 8, 10]
c = [11, 3, 23, 45, 67]

def commonMember(list1, list2):
    flag = 0
    common = []
    for i in list1:
        if i in list2:
            common.append(i)
            flag = 1
    if flag == 1:
        return common
    else:
        return "No common elements found"
        
res1 = commonMember(a, b)
res2 = commonMember(c, b)
res3 = commonMember(a, c)

print("For list a & b =>", res1)
print("For list c & b =>", res2)
print("For list a & c =>", res3)
