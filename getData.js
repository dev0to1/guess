let aDeviner, nmbChance, nombre_choisit, essais;
// message en rouge indiquer win or loose
let elementMessage =  document.querySelector('#messageFin')
// message indiquant le nombre de chance et les derniers chiffres
let elementChanceMessage =  document.querySelector('#infoChance')
// je récupere l'élement saisie par le joueur
let inputElement = document.querySelector('#inputField')
let formElement = document.querySelector('#form')




document.addEventListener("DOMContentLoaded", () => {

    formElement.addEventListener('submit', function(e){

        e.preventDefault()
        nombre_choisit = inputElement.value
        //console.log(nombre_choisit);

        continuerPartie()
  
    })

});



function nouvellePartie(){

    // clean du champ input a la saisie
    inputElement.value = ""

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
  

}


function continuerPartie(){

    // clean du champ input a la saisie
    inputElement.value = ""


    if(isNaN(nombre_choisit) || nombre_choisit >100 || nombre_choisit <0 ){

        //console.log("je suis bien dans la condition le chiffre saisie n'est pas bon je dois afficher un message");
        elementMessage.innerHTML = "merci de saisir un chiffre valide entre 1 et 100  bordel de merde"  
        
        return
        
    }


    nombre_choisit = parseInt(nombre_choisit, 10)
    //console.log(nombre_choisit);
        

    // on doit controller la donnée et la convertir en entier
    nmbChance = nmbChance - 1

    essais.push(nombre_choisit);
    console.log(essais);

    comparerLeChiffreChoisitEtLeNombreAleatoire()

}


function comparerLeChiffreChoisitEtLeNombreAleatoire(){

    let lastEssai = essais[essais.length - 1]

    if (lastEssai == aDeviner) {

        elementChanceMessage.innerHTML = "C'est tout bon, tu as joué " + (3 - nmbChance) + "fois et tes derniers numéro était " + essais.join('-')
        
        elementMessage.innerHTML = "bravo tu as gagné, est ce que tu veux " +  "<button> rejouer <button>"

        nouvellePartie();

           
    
    } else {
       
        
        if( nmbChance === 0  ){
            // T'as perdu…    
            elementMessage.innerHTML = "déso tu as perdu, est ce que tu veux rejouer " 
            elementChanceMessage.innerHTML = "Arfff dommage, tu as joué " + (3 - nmbChance) + "fois et tes derniers numéro était " + essais.join('-')

            nouvellePartie();

    
        } else {
            // T'as perdu
            if(lastEssai < aDeviner){    
                elementChanceMessage.innerHTML = "Tu es trop bas, merci de saisir un nouveau numéro, il te reste " + nmbChance + " chance et tes derniers numéro son " + essais.join('-')   
                elementMessage.innerHTML = " Essaie encore " 
    
            } else{
                elementChanceMessage.innerHTML = "Tu es trop haut, merci de saisir un nouveau numéro, il te reste " + nmbChance + " chance et tes derniers numéro son " + essais.join('-')
                elementMessage.innerHTML = " Essaie encore " 
                
            }
    
            return

        }
    
    }
}



nouvellePartie();



