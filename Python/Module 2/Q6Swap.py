# Write python program that swap two number with temp variable and without temp variable

n1 = int(input("Enter number 1 : "))
n2 = int(input("Enter number 2 : "))

def tempVarSwap(n1,n2): # with 3rd variable
    temp = n1    
    n1 = n2
    n2 = temp
    return n1,n2

def SwapNoTemp(n1,n2): # without 3rd variable
    n1 = n1 + n2
    n2 = n1 - n2
    n1 = n1 - n2
    return n1,n2    

a,b = tempVarSwap(n1,n2)
print("Using temp variable : ")
print("A : {}, B : {}".format(a,b))

x,y = SwapNoTemp(n1,n2)
print("Without using temp variable : ")
print("X : {}, Y : {}".format(x,y))