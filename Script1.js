// JavaScript source code
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
    computerMove = 'kamie�';
}

printMessage('M�j ruch to: ' + computerMove);
if (randomNumber == 2) {
    computerMove = 'papier';
}
printMessage('M�j ruch to: ' + computerMove);
if (randomNumber == 3) {
    computerMove = 'no�yce';
}
printMessage('M�j ruch to: ' + computerMove);

let playerInput = prompt('Wybierz sw�j ruch! 1: kamie�, 2: papier, 3: no�yce.');

console.log('Gracz wpisa�: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamie�';
}

printMessage('Tw�j ruch to: ' + playerMove);
if (playerInput == '2') {
    playerMove = 'papier';
}

printMessage('Tw�j ruch to: ' + playerMove);
if (playerInput == '3') {
    playerrMove = 'no�yce';
}

printMessage('Tw�j ruch to: ' + playerMove);

if (computerMove == 'kamie�' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
    if (computerMove == 'papier' && playerMove == 'kamie�') {
        printMessage('Ty przegrywasz!');
        if (computerMove == 'no�yce' && playerMove == 'papier') {
            printMessage('Ty przegrywasz!');
            if (computerMove == 'kamie�' && playerMove == 'kamie�') {
                printMessage('REMIS!');
                if (computerMove == 'no�yce' && playerMove == 'no�yce') {
                    printMessage('REMIS!');
                    if (computerMove == 'papier' && playerMove == 'papier') {
                        printMessage('REMIS!');
                        if (computerMove == 'kamie�' && playerMove == 'no�yce') {
                            printMessage('Ty przegrywasz!');
                            if (computerMove == 'papier' && playerMove == 'no�yce') {
                                printMessage('Ty wygrywasz!');
                                if (computerMove == 'no�yce' && playerMove == 'kamie�') {
                                    printMessage('Ty wygrywasz!');
                                    if (playerMove == 'nieznany ruch') {
                                        printMessage('Nieznany ruch!');
