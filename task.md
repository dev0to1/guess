# Exercice n°1 : Guess the number

ok - Je vous demande de créer un jeu simple de devinette de nombre. 

ok - Le jeu choisit aléatoirement un nombre entre 1 et 100

ok - Puis il met le joueur au défi de le deviner en 10 tentatives maxi. 

ok - À chaque tour, le joueur doit être informé s'il a deviné ou non le bon nombre — si ce n'est pas le cas, le jeu lui indique si son estimation est trop basse ou trop élevée. 

Le jeu doit également rappeler au joueur les nombres déjà proposés. 

Le jeu se termine quand le joueur a deviné le nombre mystère, ou s'il a épuisé ses 10 chances.

À la fin du jeu, le joueur a la possibilité de débuter une nouvelle partie.



# Exercice n°1 : Transcription

1 - choisir aléatoirement un numéro entre 1 et 100 

- Créer une variable **aDeviner** ou l'on va stocker le chiffre tout au long du jeu (const ?)
- Utiliser Math.random qui donnera un chiffre entre 0.xxx et 1
- Faire en sorte que le numéro soit un entier
- Le multiplié par 100

2 - Proposer le jeu à l'utilisateur en lui demandant de choisir un numéro

- Afficher une fenetre qui lui demande le numéro et le stoker dans un tableau **essaie**
- A chaque tour on push le numéro proposé par le joueur dans le tableau 
- ON affichera la tableau 

3 - Le joueur a que 10 tentatives

- Mise en place d'une variable **chances** avec 10 que l'on décrementera dans la boucle
- Si le compteur est < 0 alors le jeu s'arretera

4 - Lancement du jeu


ON BOUCLE POUR QUE LE JOUEUR PUISSE JOUER 10 FOIS

ON DEMANDE LE 1 CHIFFRE ET ON LE STOCK DANS **essaie** 

ON AFFICHE LES CHIFFRES PRECEDENTS LORS DE LA NOUVELLE DEMANDE

&ensp; *SI* **essaie n ** EGALE  **aDeviner** ALORS

&ensp; ON INDIQUE TU AS GAGNE - *on sort donc de la boucle*

&ensp; *SINON* ON REGARDE SI **essaie n** INFERIEUR A **aDeviner**

&ensp; ON INDIQUE TU EST TROP BAS
&ensp; &ensp; ON REDEMANDE UN NUMERO

&ensp; *ALORS* TU ES TROP HAUT
&ensp; &ensp; ON REDEMANDE UN NUMERO

LA BOUCLE REPREND

*Sortie de la boucle* ON DEMANDE SI LE JOUEUR VEUT REJOUER