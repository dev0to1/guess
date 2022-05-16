let aDeviner, nmbChance, essais, nombre_choisit;

function proposerDeRejouer(){
    /**
     * Création du numéro aléatoire entre 1 et 100
     */
    aDeviner = Math.floor(Math.random() * 100) + 1
    console.log(aDeviner);

    /**
     * On initie une variable chance avec 10 tentatives
     */
    nmbChance = 10

    continuerPartie();
}

function continuerPartie(){
    /**
     * Demande du numéro initial au joueur
     */
     essais = []
     nombre_choisit = prompt('merci de saisir un numéro entre 1 et 100')
 
     essais.push(nombre_choisit);

     comparerLeChiffreChoisitEtLeNombreAleatoire()

}

function comparerLeChiffreChoisitEtLeNombreAleatoire(){

    if (nmbChance <= 0) {
        // T'as perdu…
        alert('you loose')
        proposerDeRejouer()
    
    } else {
        // T'as encore des chances
        /**
         * On affiche le nmb d'essaies restant et le numéro précedent
         */
    
        // Nombre chance restante
        let nmbChanceRestante = nmbChance - essais.length
    
        alert('Merci de saisir un nouveau numéro, il vous reste ' + nmbChanceRestante + ' chances ' + ' et vos numero précedent son ' + essais.join('-'))
    
    
        /**
         * 
         */
        let lastEssai = essais[essais.length - 1]
    
        if( lastEssai == aDeviner){
            // t'as gagné.
            alert('vous avez gagner')
            proposerDeRejouer()
    
        } else {
            // T'as perdu
            if(lastEssai < aDeviner){
                alert('tu es trop bas')
    
            } else{
                alert('tu es trop bas')
                
            }
            nmbChance = nmbChance - 1
            // revenir a l'etape #2
            continuerPartie();
        }
    
    }
}


proposerDeRejouer();














// for (nmbChance = 10; nmbChance <= 0; nmbChance--) {

//     // Si il n'a plus de chance il a perdu et on lui demande si il souhaite jouer a nouveau
//     /*if(nmbChance <=0){
//         alert('vous n\'avez plus de chance désolé c\'est perdu')
//         confirm('souhaitez-vous jouez de nouveau ?')
//         break
//     }
//     */
//     // si l'essaie est égal au nmb a deviner alors il gagne et on lui propose de jouer une nouvelle fois
//     if (essais === aDeviner) {
//         alert('vous avez gagner yahouououou')
//         confirm('souhaitez-vous jouez de nouveau ?')
//         break


//         //si l'essaie est en dessous alors on lui demande de reessayer 
//     } else if (essais < aDeviner) {
//         alert('vous etes trop bas, essayer encore')
//         prompt(afficherEssais)


//     } else {
//         alert('vous etes trop haut, essayer encore')
//         prompt(afficherEssais)
//     }



// }