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

    /**
     * @description : cette fonction permet de mettre les lettres une chaine de
     * caractère en majuscules en fonction de l'indices des caractères et retourne
     * un tableau des 2 possibles combinaison (les indices paires en majuscules dans le premiers
     * élément du tableau et les indices impaires en miniscules dans le second élément du
     * tableau)
     * @param : character -> chaine à traiter
     * @param : newWord1, newWord -> chaine transformé
     * @returns capitalizedTable;
     */

    let capitalizedTable = [];
    let newWord = "";
    let newWord1 = "";

    if(character.split(" ").length > 1) {

        console.log("character should'nt have space");
        return;

    }

    for(let i = 0; i < character.length; i++) {

        if(i % 2 == 0) {
            newWord += character.charAt(i).toUpperCase();
            newWord1 += character.charAt(i)
        }
        else {
            newWord += character.charAt(i)
            newWord1 += character.charAt(i).toUpperCase();
        }
    }

    capitalizedTable.push(newWord);
    capitalizedTable.push(newWord1);

    return capitalizedTable;

}

capitalize("abcdef");

/* ****************** End Exercice 2 ********************* */