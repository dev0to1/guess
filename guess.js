let aDeviner, nmbChance, nombre_choisit;
let essais = []


function nouvellePartie(){

    essais = []

    nmbChance = 3

    /**
     * Création du numéro aléatoire entre 1 et 100
     */
    aDeviner = Math.floor(Math.random() * 100) + 1
    console.log(aDeviner);

    /**
     * On initie une variable chance avec 10 tentatives
     */
  

    continuerPartie();
}



function continuerPartie(){
    

     nombre_choisit = prompt('merci de saisir un numéro entre 1 et 100')
     nmbChance = nmbChance - 1
 
     essais.push(nombre_choisit);
     console.log(essais);


     comparerLeChiffreChoisitEtLeNombreAleatoire()

}


function comparerLeChiffreChoisitEtLeNombreAleatoire(){

    let lastEssai = essais[essais.length - 1]

    if (lastEssai == aDeviner) {

        reJouer(' gagner ', 'tu as été bon donc bravo et a bientôt' )
    
    } else {
       
        
        if( nmbChance == 0  ){
            // T'as perdu…   

            reJouer(' perdu ', ' au non tu pars déja ')

    
        } else {
            // T'as perdu
            if(lastEssai < aDeviner){
                alert('Tu es trop bas merci de saisir un nouveau numéro, il vous reste ' + nmbChance + ' chances ' + ' et vos numero précedent son ' + essais.join('-'))
    
            } else{
                alert('Tu es trop haut merci de saisir un nouveau numéro, il vous reste ' + nmbChance + ' chances ' + ' et vos numero précedent son ' + essais.join('-'))
                
            }
    

            // revenir a l'etape #2
            continuerPartie();
        }
    
    }
}

function reJouer(state, depart){
    // t'as gagné.
    let reJouer = confirm('vous avez'+  state + 'est ce que vous voulez rejouer ?')

    if(reJouer) {
        nouvellePartie()
    }else{
        alert(depart)
    }
}


nouvellePartie();














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