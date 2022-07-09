 const mensaje = document.querySelector('.mensaje');
 const puntos = document.querySelector('.puntos');
 const buttons = document.querySelectorAll('button');
 const winnerPuntos = [0, 0];
 let juegoTerminado = true;


 for (let i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener('click', playGame);
 }

 function playGame(e) {

     let playerSelection = e.target.innerText;

     let shakiraSelection = Math.random();


     if (shakiraSelection < .34) {
         shakiraSelection = 'Piedra';
     } else if (shakiraSelection <= .67) {
         shakiraSelection = 'Papel';
     } else {
         shakiraSelection = 'Tijera';
     }


     let result = checkWinner(playerSelection, shakiraSelection);


     if (result === 'Jugador') {
         result += ' sumó un punto';

         winnerPuntos[0]++;
     }

     if (result === 'Shakira') {
         result += ' sumó un punto';
         winnerPuntos[1]++;
     }

     if (result === 'Uf') {
         result += '. Es un empate'
     }


     puntos.innerHTML = 'Jugador: [ ' + winnerPuntos[0] + ' ] Shakira: [ ' + winnerPuntos[1] + ' ]';


     messenger('Jugador: <strong>' + playerSelection + '</strong> Shakira: <strong>' + shakiraSelection + '</strong><br>' + result);
 }

 function messenger(selectionMensaje) {
     mensaje.innerHTML = selectionMensaje;
 }

 function checkWinner(player, shakira) {
     if (player === shakira) {
         return 'Uf';
     }

     if (player === 'Piedra') {
         if (shakira === 'Papel') {
             return 'Shakira';
         } else {
             return 'Jugador';
         }
     }

     if (player === 'Papel') {
         if (shakira === 'Tijera') {
             return 'Shakira';
         } else {
             return 'Jugador';
         }
     }

     if (player === 'Tijera') {
         if (shakira === 'Piedra') {
             return 'Shakira';
         } else {
             return 'Jugador';
         }
     }
 }

 if (npreguntas.length == interprete_bp.length) {
    if (juegoTerminado) {
      swal.fire({
        title: "Juego finalizado",
        text:
          "Puntuación: " + preguntas_correctas + "/" + (preguntas_hechas - 1),
        icon: "success"
      });
    }
}