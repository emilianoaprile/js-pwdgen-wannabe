// # Password Generator

// ### Chiedere il nome all'utente:
//     - dichiarare una variabile "nome"
        let userName;
//     - assegnare alla variabile il valore restituito da un prompt
        userName = prompt ('Ciao, inserisci il tuo nome!');
        console.log (userName);

// ### Chiedere il cognome all'utente:
//     - dichiarare una variabile "cognome"
        let userSurname;
//     - asseganre alla variabile il valore restituito da un prompt
        userSurname = prompt ('Perfetto, ora inserisci il tuo cognome!');
        console.log (userSurname);

// ### Chiedere il colore preferito all'utente:
//     - dichiarare una variabile "colore preferito"
        let userColor;
//     - assegnare alla variabile il valore restituito da un prompt
        userColor = prompt ('Ottimo, adesso inserisci il tuo colore preferito!');
        console.log (userColor);

// ## Decidere un numero da inserire nella password:
//     - dichiarare una variabile "numero"
        let pswNumber;
//     - asseganre alla variabile il valore del numero scelto
        pswNumber = '21';
        console.log (pswNumber);

// ## Risultato: concatenare la password 
//     - concatenare le variabili "nome" + "cognome" + "colore preferito" + "numero"
        let userPassword;
//     - assegnare una variabile con le variabili concatenate "userPassword"
        userPassword = userName + userSurname + userColor + pswNumber;
        console.log (userPassword);

// ## Stampare il risultato sul browser:
//     - inserire nell'html un tag con id="userPassword"
//     - recuperare con js l'elemento con id="userPassword"
        const userPasswordDomElement = document.getElementById('userPassword')
//     - modificare l'innerHTML del tag con il valore della variabile "userPassword"
        userPasswordDomElement.innerHTML = userPassword