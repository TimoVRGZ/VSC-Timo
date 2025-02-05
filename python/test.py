a = 31
toure = 0

while a != 1:
    if (a%2) == 0:
        a = a/2
    else:
        a = a * 3 + 1
    toure += 1

print(toure)