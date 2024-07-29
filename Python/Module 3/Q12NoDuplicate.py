# li = [1,2,3,4,1,2,5,2,4]
# def removeDuplicates(list1,list2):
#     for i in list1:
#         if  i not in list2:
#             list2.append(i)
#         else:
#             pass
#     return list2  
# li2 = []
# res = []
# res = removeDuplicates(li,li2)
# print(res)

def unique_elements(input_list):
    unique_list = []
    for element in input_list:
        if element not in unique_list:
            unique_list.append(element)
    return unique_list

example_list = [1, 2, 2, 3, 4, 4, 5]
unique_list = unique_elements(example_list)
print("Unique elements:", unique_list)
