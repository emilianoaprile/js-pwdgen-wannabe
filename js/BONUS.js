// # Password Generator Bonus

// ### Chiedere il nome all'utente:
//     - dichiarare una variabile "nome"
        let userNameBonus;
//     - assegnare alla variabile il valore restituito da un prompt
        userNameBonus = prompt ('Ciao, inserisci il nome!');
        console.log(userNameBonus);

// ### Chiedere il cognome all'utente:
//     - dichiarare una variabile "cognome"
        let userSurnameBonus;
//     - asseganre alla variabile il valore restituito da un prompt
        userSurnameBonus = prompt ('Perfetto, ora inserisci il tuo cognome!');
        console.log(userSurnameBonus);

// ### Chiedere il colore preferito all'utente:
//     - dichiarare una variabile "colore preferito"
        let userColorBonus;
//     - assegnare alla variabile il valore restituito da un prompt
        userColorBonus = prompt ('Ottimo, ora inserisci il tuo colore preferito!')
        console.log(userColorBonus);

// ## Creare un numero random da inserire nella password:
//     - dichiarare il range minimo e massimo del numero:
//         - assegnare una variabile "min"
        let minNumber = 1;
//         - assegnare una variabile "max"
        let maxNumber = 900;
//     - dichiare una variabile random:
//         - assegnare una variabile "randomNumber" 
        let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1 )) + minNumber;
        console.log(randomNumber);
//     - trasformare in stringa il numero random
        let randomString = randomNumber.toString();

// ## Risultato: concatenare la password 
//     - concatenare le variabili "nome" + "cognome" + "colore preferito" + "randomNumber"
        let userPasswordRandom;
//     - assegnare una variabile con le variabili concatenate "userPasswordRandom"
        userPasswordRandom = userNameBonus + userSurnameBonus + userColorBonus + randomNumber;
        console.log(userPasswordRandom);


// ## Stampare il risultato sul browser:
//     - inserire nell'html un tag con id="userPasswordRandom"
//     - recuperare con js l'elemento con id="userPasswordRandom"
        const userPasswordRandomDomElement = document.getElementById('userPasswordRandom');
//     - modificare l'innerHTML del tag con il valore della variabile "userPasswordRandom"
        userPasswordRandomDomElement.innerHTML = userPasswordRandom;

