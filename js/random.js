
function seleccionarRespuestaAlAzar(respuesta) {
    return respuesta[Math.floor(Math.random() * respuesta.length)]
}

let respuestas = ["Si", "No", "Tal vez", "Ni se te ocurra", "Pensalo mejor", "De ninguna manera", "No estoy segura", "Por supuesto", "Pero claro que si", "Un rotundo no", "Cómo se te ocurre?", 
"No escribí New Rules para ésto", "Mejor anda a escuchar Future Nostalgia"];

let pregunta = null;



function dua(){
   pregunta = document.getElementsByName("preg")[0].value;
   if (pregunta != "") {
    Swal.fire({
        title: 'Dua dice: ' + ' ' + seleccionarRespuestaAlAzar(respuestas),
        width: 600,
        padding: '3em',
        color: '#de3487',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("../img/duapipa.png")
          left top
          no-repeat
        `
      })
} else {
    Swal.fire('Dua dice: no me preguntaste nada');
}
  };