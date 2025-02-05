# La suite Syracuse est une suite qui prend un nombre de depare. Si ce nombre est paire, il est diviser par 2 (/2). Si il est impaire, il est multiplier par 3 puis est additioner avec 1  (*3+1). Le nouveau nombre subit la meme chose, ainsi de suite jus'qu'à arriver à 1.
# Ce programme permet de connaitre le nombre de depare le plus petit avec le quel on ateint x étapes. (ici: 30)

# Fonctions:
# retourne le prochain nombre dans la suite Syracuse
def suivant(n):
    if (n % 2) == 0:
        return (n / 2)
    
    else:
        return (n * 3 + 1)

# retourne une liste contenant toutes les étapes jusqu'à arriver à 1
def trajet(n):
    chaine = []
    while n != 1:
        n = suivant(n)
        chaine.append(n)
    return chaine

# retourne le plus grand nombre du trajet de la suite
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
