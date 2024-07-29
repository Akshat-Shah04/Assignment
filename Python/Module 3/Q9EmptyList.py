def isEmpty(a):
    if(len(a)==0):
        return True
    else :
        return False

a = []
b = [1,2,3,5]
c = ['a','b','v',1,23]
for i in a,b,c:
    if(isEmpty(i)) :
        print(i," is Empty List")
    else:
        print(i,"is Not Empty List")
