def fibonacci(n):
    fib = [0, 1]
    for i in range(2, n):
        nT = fib[-1] + fib[-2]
        fib.append(nT)
    return fib[:n]

n = int(input("Enter the range : ")) 
print(fibonacci(n))
