let aDeviner, nmbChance, nombre_choisit, essais, elementMessage, elementChanceMessage, inputElement, formElement, chanceRestante, popupForm, rejouerButton, partirBtn;
// message en rouge indiquer win or loose

let chanceReduite = 3



// récupération de l'input du joueur
document.addEventListener("DOMContentLoaded", () => {

    elementMessage = document.querySelector('#messageFin')
    // message indiquant le nombre de chance et les derniers chiffres
    elementChanceMessage = document.querySelector('#infoChance')
    // je récupere l'élement saisie par le joueur
    inputElement = document.querySelector('#inputField')
    formElement = document.querySelector('#form')
    chanceRestante = document.querySelector('#chanceRestante')
    popupForm = document.querySelector("#popup")
    rejouerButton = document.querySelector("#rejouerButton")
    partirBtn = document.querySelector("#partirBtn")

    console.log(partirBtn);

    nouvellePartie()

    formElement.addEventListener('submit', function(e){

        e.preventDefault()
        nombre_choisit = inputElement.value
        //console.log(nombre_choisit);

        continuerPartie()

    })

    rejouerButton.addEventListener('click', function(e){
        e.preventDefault()
        nouvellePartie()
    })

    partirBtn.addEventListener('click', function(e){
        e.preventDefault()
        theEnd()
    })

});


function nouvellePartie(){

    // clean du champ input a la saisie
    inputElement.value = ""

    // tableau stockant les essaies
    essais = []

    nmbChance = chanceReduite 

    /**
     * Création du numéro aléatoire entre 1 et 100
     */
    aDeviner = Math.floor(Math.random() * 100) + 1
    console.log(aDeviner);

    chanceRestante.innerHTML = 'TU COMMENCE LE JEU AVEC ' + chanceReduite + ' CHANCES'
}


function continuerPartie(){

    // clean du champ input a la saisie
    inputElement.value = ""


    if(isNaN(nombre_choisit) || nombre_choisit >100 || nombre_choisit <0 ){

        //console.log("je suis bien dans la condition le chiffre saisie n'est pas bon je dois afficher un message");
        elementMessage.innerHTML = "merci de saisir un chiffre valide entre 1 et 100  bordel de merde"  
      
        return  
    }

    // on doit controller la donnée et la convertir en entier
    nombre_choisit = parseInt(nombre_choisit, 10)
    //console.log(nombre_choisit);
        

    // on décremente a chaque tout
    nmbChance = nmbChance - 1

    // on stock l'essaie dans le tableau
    essais.push(nombre_choisit);
    console.log(essais);

    // on compare maintenant le chiifre saisie et le chiffre aléatoire
    comparerLeChiffreChoisitEtLeNombreAleatoire()

}



function comparerLeChiffreChoisitEtLeNombreAleatoire(){

    let lastEssai = essais[essais.length - 1]

    if (lastEssai == aDeviner) {

        // si il arrive a trouver 3 fois avec les chances sui se décrementent
        if(chanceReduite === 1 ){
            popupForm.style.display = "block"  
            return
            // separer le block en classe a part
        }

        elementChanceMessage.innerHTML = "C'est tout bon, tu as joué " + (3 - nmbChance) + " fois et tes derniers numéro était " + essais.join('-')
        elementMessage.innerHTML = "bravo tu as gagné, est ce que tu veux " +  "<button> rejouer <button>"

        chanceReduite = chanceReduite - 1

        nouvellePartie();
           
    
    } else {
       
        
        if( nmbChance === 0){
            // T'as perdu…    
            elementMessage.innerHTML = "déso tu as perdu, est ce que tu veux rejouer " 
            elementChanceMessage.innerHTML = "Arfff dommage, tu as joué " + (3 - nmbChance) + "fois et tes derniers numéro était " + essais.join('-')
            chanceReduite.innerHTML ="tu n as malheureeseent plus de chance"

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

function theEnd(){
    console.log("bonjoru");
    document.location.href = "https://www.w3schools.com"

}





