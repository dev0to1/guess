class Game {

    constructor(){
        this.dernierNombreSaisit = "";
        this.nombreAleatoire = "";
        this.chances = 3;
    }

    lancerLeJeu(){
        this.nombreAleatoire = this.genererUnChiffreAleatoire();
        this.saisirUnNumero();
    }

    genererUnChiffreAleatoire() {
        return Math.floor(Math.random() * 100) + 1;
    }

    saisirUnNumero(){
        this.dernierNombreSaisit = parseInt(prompt("Saisissez un nombre entre 1 et 100"));
        this.verifierLeNombreSaisi();
    }

    verifierLeNombreSaisi(){
        if( this.chances < 1){
            this.perdu()
            return;
        }

        if(this.dernierNombreSaisit === this.nombreAleatoire){
            this.gagner();
        } else if(this.dernierNombreSaisit > this.nombreAleatoire){
            this.tropHaut();
        } else if(this.dernierNombreSaisit < this.nombreAleatoire){
            this.tropBas();
        }

        return;

    }

    rejouer(){
        let rejouer = confirm("Voulez-vous rejouer ?");
        console.log(rejouer);
        if( rejouer ){
            this.lancerLeJeu();
        }
        return;
    }

    tropHaut(){
        this.chances--;
        alert("Trop haut");
        this.saisirUnNumero();
    }

    tropBas(){
        this.chances--;
        alert("Trop haut");
        this.saisirUnNumero();
    }

    gagner(){
        alert("Vous avez gagné !");
        this.rejouer();
    }

    perdu(){
        alert("Vous avez perdu !");
        this.rejouer();
    }
}

let devineUnNombre = new Game();
devineUnNombre.lancerLeJeu();

console.log(devineUnNombre);
