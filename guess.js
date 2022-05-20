let aDeviner, nmbChance, nombre_choisit,essais;


function nouvellePartie(){

    essais = []

    nmbChance = 3

    /**
     * Création du numéro aléatoire entre 1 et 100
     */
    aDeviner = Math.floor(Math.random() * 100) + 1
    //console.log(aDeviner);

    /**
     * On initie une variable chance avec 10 tentatives
     */
  

    continuerPartie();
}


function continuerPartie(){

    //nombre_choisit = prompt('merci de saisir un numéro entre 1 et 100')

    //console.log(isNaN(nombre_choisit));


    if (isNaN(nombre_choisit) || nombre_choisit >100 || nombre_choisit <0 ){

        //alert('merci de saisir un chiffre valide entre 1 et 100  bordel de merde')
        continuerPartie()
    }


    nombre_choisit = parseInt(nombre_choisit, 10)
    console.log(nombre_choisit);
        
    // console.log(nombre_choisit);

    // on doit controller la donnée et la convertir en entier
    nmbChance = nmbChance - 1

    essais.push(nombre_choisit);
    console.log(essais);


    comparerLeChiffreChoisitEtLeNombreAleatoire()

}


function comparerLeChiffreChoisitEtLeNombreAleatoire(){

    let lastEssai = essais[essais.length - 1]

    if (lastEssai == aDeviner) {

        reJouer('gagner', 'tu as été bon donc bravo et a bientôt' )
           
    
    } else {
       
        
        if( nmbChance === 0  ){
            // T'as perdu…   

            reJouer('perdu', 'au non tu pars déja')

    
        } else {
            // T'as perdu
            if(lastEssai < aDeviner){
                //alert('Tu es trop bas merci de saisir un nouveau numéro, il vous reste ' + nmbChance + ' chances ' + ' et vos numero précedent son ' + essais.join('-'))
    
            } else{
                //alert('Tu es trop haut merci de saisir un nouveau numéro, il vous reste ' + nmbChance + ' chances ' + ' et vos numero précedent son ' + essais.join('-'))
                
            }
    

            // revenir a l'etape #2
            continuerPartie();
        }
    
    }
}

function reJouer(state, depart){
    // t'as gagné.
    //let reJouer = confirm('vous avez '+ state + ' est ce que vous voulez rejouer ?')

    if(reJouer) {
        nouvellePartie()
    }
    //alert(depart)
}

nouvellePartie();



