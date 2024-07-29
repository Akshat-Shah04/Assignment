a = ['a','b','c','d','e']
def convert(list1):
    str = ""
    for i in list1:
        str += i
    return str

res = convert(a)
print("List : ",a)
print("String : ",res)