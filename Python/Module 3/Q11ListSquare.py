sq = []
for i in range(1,30):
    i = i**2
    sq.append(i)    
res = sq[:5] + sq[-5:]
print(res)