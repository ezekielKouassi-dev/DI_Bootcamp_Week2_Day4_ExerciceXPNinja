/**
 * @author : ezekiel kouassi
 */

/* ***************** Exercice 1 : Random Numebr ****************** */

// 1 - Get a random number between 1 and 100.

function randomNumber() {

    /**
     * @description : cette fonction permet d'afficher les nombres de 0 à un nombres 
     * qui est généré par la maachine
     * @param : rdnNumber -> nombre généré
     */
    
    let rdmNumber = Math.floor(Math.random(1) * 100);
    console.log(rdmNumber);

    // 2 - Console.log all even numebrs from 0 to the random number

    for(let i = 0; i < rdmNumber; i++) {

        console.log(i);

    }
}

randomNumber();

/* **************** End Exercice 1 ************************ */

/* ********************* Exercice 2 : Capitalized Letters ***************** */

// 1 - create a function that takes a string as an argument

function capitalize(character) {

    let capitalizedTable = [];

    if(character.split(" ").length > 1) {

        console.log("character should'nt have space");
        return;

    }
    
}