

const jouerButton = document.querySelector('button')

console.log(jouerButton);


jouerButton.addEventListener('click', event => {

    jouerButton.innerHTML = `Nombre de clics : ${event.detail}`;
    

})