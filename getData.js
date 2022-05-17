

const jouerButton = document.querySelector('button')

console.log(jouerButton);

document.addEventListener("DOMContentLoaded", (event) => {

    

    jouerButton.addEventListener('click', event => {

        jouerButton.innerHTML = `Nombre de clics : ${event.detail}`;
        
    
    })

});


