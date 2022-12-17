def moyenne(tab):
    if tab == []:
        print('erreur')
        return None
    else:
        somme = 0
        for elt in tab:
            somme += elt
        return somme / len(tab)
