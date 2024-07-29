str = input("Enter a string: ")

first_not = str.find('not')
first_poor = str.find('poor')

if first_not > first_poor:
    result = str[:first_poor] + 'good' + str[first_not + 3:]
else:
    result = str

print("Modified string:", result)
