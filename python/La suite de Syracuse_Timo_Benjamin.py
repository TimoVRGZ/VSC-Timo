def suivant(n):
    if (n % 2) == 0:
        return (n / 2)
    
    else:
        return (n * 3 + 1)

def trajet(n):
    chaine = []
    while n != 1:
        n = suivant(n)
        chaine.append(n)
        
    return chaine

def max(n):
    resultat = trajet(n)[0]
    for i in range (1, (len(trajet(n)))):
        if resultat < trajet(n)[i]:
            resultat = trajet(n)[i]
    return resultat

longueur = 0
N = 0

while longueur < 30:
    N += 1
    longueur = len(trajet(N))

print("N =", N, "nécessite", longueur, "étapes pour arriver à 1. \n Le plus grand nombre rencontré est:", max(N))