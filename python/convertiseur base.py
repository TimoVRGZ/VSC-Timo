#ce programme est un exercice, il n'utilisera pas les fonctions "bin", "dec" ou "hex". Le but est de crée ces fonctions
print("Ce programme convertie des nombre dans diferente base")
Basenombre = int(input("En quel base est le nombre à convertire ? Entrez 2 pour binaire, 10 pour decimal ou 16 pour hexadecimal : "))
Baseresultat = int(input("dans quel base voulez vous covertire votre nombre ? : "))
nombre = str(input("Quel est le nombre à convertire ? : "))


def bin_dec(x):
    resultat = 0
    puissance = 0
    for i in range((len(x)-1), -1, -1):
        resultat = resultat + (int(x[i])*(2**puissance))
        puissance = puissance + 1
    print("votre nombre converti en decimal est:", resultat)

def bin_hex(x):
    

if Basenombre == 2 and Baseresultat == 10:    
    bin_dec(nombre)
