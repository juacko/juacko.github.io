let preguntas_aleatorias = true;
let mostrar_pantalla_juego_términado = true;
let reiniciar_puntos_al_reiniciar_el_juego = true;
var inicio_juego = false;
var canal = 0;

var valor1 = 0;
var valor2 = 0;
var valor3 = 0;
var valor4 = 0;
var valor5 = 0;
var valor6 = 0;
var valor7 = 0;
var valor8 = 0;

var inicio1= 0;
var inicio2= 0;
var inicio3= 0;
var inicio4= 0;
var inicio5= 0;
var inicio6= 0;
var inicio7= 0;
var inicio8= 0;

var fin1 = 0;
var fin2 = 0;
var fin3 = 0;
var fin4 = 0;
var fin5 = 0;
var fin6 = 0;
var fin7 = 0;
var fin8 = 0;




window.onload = function () {
  base_preguntas = readText("base-preguntas.json");
  interprete_bp = JSON.parse(base_preguntas);
  
  //escogerPreguntaAleatoria();
};
let pregunta;
let posibles_respuestas;
btn_correspondiente = [
  select_id("btn1"),
  select_id("btn2"),
  select_id("btn3"),
  select_id("btn4"),
];
let npreguntas = [];

let preguntas_hechas = 0;
let preguntas_correctas = 0;

function iniciarExamen() {
  closeModal();
  showQuizPanel()
  obtenerdatos();
  entrada1 = document.getElementById("entrada1").value;
}

function obtenerdatos(){
  var entrada1 = document.getElementById("entrada1").value;
  var entrada2 = document.getElementById("entrada2").value;
  var entrada3 = document.getElementById("entrada3").value;
  var entrada4 = document.getElementById("entrada4").value;
  var entrada5 = document.getElementById("entrada5").value;
  var entrada6 = document.getElementById("entrada6").value;
  var entrada7 = document.getElementById("entrada7").value;
  var entrada8 = document.getElementById("entrada8").value;

  valor1 = parseInt(entrada1)

  valor2 =
    parseInt(entrada1) +
    parseInt(entrada2)

  valor3 =
    parseInt(entrada1) +
    parseInt(entrada2) +
    parseInt(entrada3)

  valor4 =
    parseInt(entrada1) +
    parseInt(entrada2) +
    parseInt(entrada3) +
    parseInt(entrada4)

  valor5 =
    parseInt(entrada1) +
    parseInt(entrada2) +
    parseInt(entrada3) +
    parseInt(entrada4) +
    parseInt(entrada5)
  
  valor6 =
    parseInt(entrada1) +
    parseInt(entrada2) +
    parseInt(entrada3) +
    parseInt(entrada4) +
    parseInt(entrada5) +
    parseInt(entrada6)
  
  valor7 =
    parseInt(entrada1) +
    parseInt(entrada2) +
    parseInt(entrada3) +
    parseInt(entrada4) +
    parseInt(entrada5) +
    parseInt(entrada6)+
    parseInt(entrada7)
  
  valor8 =
    parseInt(entrada1) +
    parseInt(entrada2) +
    parseInt(entrada3) +
    parseInt(entrada4) +
    parseInt(entrada5) +
    parseInt(entrada6) +
    parseInt(entrada7) +
    parseInt(entrada8);

    switch (canal) {
      case 1:
        inicio1= 0;
        inicio2= 5;
        inicio3= 10;
        inicio4= 15;
        inicio5= 20;
        inicio6= 25;
        inicio7= 30;
        inicio8= 35;

        fin1 = 4;
        fin2 = 9;
        fin3 = 14;
        fin4 = 19;
        fin5 = 24;
        fin6 = 29;
        fin7 = 34;
        fin8 = 39;
      
        break;
      case 2:
        inicio1= 0;
        inicio2= 5;
        inicio3= 10;
        inicio4= 15;
        inicio5= 20;
        inicio6= 25;
        inicio7= 30;
        inicio8= 35;

        fin1 = 4;
        fin2 = 9;
        fin3 = 14;
        fin4 = 19;
        fin5 = 24;
        fin6 = 29;
        fin7 = 34;
        fin8 = 39;
        break;
      case 3:
        inicio1= 0;
        inicio2= 5;
        inicio3= 10;
        inicio4= 15;
        inicio5= 20;
        inicio6= 25;
        inicio7= 30;
        inicio8= 35;

        fin1 = 4;
        fin2 = 9;
        fin3 = 14;
        fin4 = 19;
        fin5 = 24;
        fin6 = 29;
        fin7 = 34;
        fin8 = 39;
        break;
      case 4:
        inicio1= 0;
        inicio2= 5;
        inicio3= 10;
        inicio4= 15;
        inicio5= 20;
        inicio6= 25;
        inicio7= 30;
        inicio8= 35;

        fin1 = 4;
        fin2 = 9;
        fin3 = 14;
        fin4 = 19;
        fin5 = 24;
        fin6 = 29;
        fin7 = 34;
        fin8 = 39;
        break;
      default:
        return
    }

    escogerPreguntaAleatoria()



}

function escogerPreguntaAleatoria() {
 
  let n;

  if (npreguntas.length+1<=valor1){

    if (preguntas_aleatorias) {
      n = Math.floor(Math.random() * ((fin1+1) - inicio1) + inicio1);
    } else {
      n = 0;
    }

    console.log("paso1")

  }

  if (npreguntas.length+1>valor1){

    if(npreguntas.length+1<=valor2){

        if (preguntas_aleatorias) {
          n = Math.floor(Math.random() * ((fin2+1) - inicio2) + inicio2);
        } else {
          n = 0;
        }

        console.log("paso2")

    }

  }

  if (npreguntas.length+1>valor2){

    if(npreguntas.length+1<=valor3){

        if (preguntas_aleatorias) {
          n = Math.floor(Math.random() * ((fin3+1) - inicio3) + inicio3);
        } else {
          n = 0;
        }

        console.log("paso3")

    }

  }

  if (npreguntas.length+1>valor3){

    if(npreguntas.length+1<=valor4){

        if (preguntas_aleatorias) {
          n = Math.floor(Math.random() * ((fin4+1) - inicio4) + inicio4);
        } else {
          n = 0;
        }

        console.log("paso4")

    }

  }
  
  if (npreguntas.length+1>valor4){

    if(npreguntas.length+1<=valor5){

        if (preguntas_aleatorias) {
          n = Math.floor(Math.random() * ((fin5+1) - inicio5) + inicio5);
        } else {
          n = 0;
        }

        console.log("paso5")

    }

  }

  if (npreguntas.length+1>valor5){

    if(npreguntas.length+1<=valor6){

        if (preguntas_aleatorias) {
          n = Math.floor(Math.random() * ((fin6+1) - inicio6) + inicio6);
        } else {
          n = 0;
        }

        console.log("paso6")

    }

  }

  if (npreguntas.length+1>valor6){

    if(npreguntas.length+1<=valor7){

        if (preguntas_aleatorias) {
          n = Math.floor(Math.random() * ((fin7+1) - inicio7) + inicio7);
        } else {
          n = 0;
        }

        console.log("paso7")

    }

  }

  if (npreguntas.length+1>valor7){

    if(npreguntas.length+1<=valor8){

        if (preguntas_aleatorias) {
          n = Math.floor(Math.random() * ((fin8+1) - inicio8) + inicio8);
        } else {
          n = 0;
        }

        console.log("paso8")

    }

  }
 

  while (npreguntas.includes(n)) {
    n++;
    if (n >= interprete_bp.length) {
      n = 0;
    }
  }

  console.log(npreguntas.length)

  if (npreguntas.length == valor8) {
    //reemplazar interprete_bp por la numero de preguntas(por crear)
    //Aquí es donde el juego se reinicia
    if (mostrar_pantalla_juego_términado) {
      swal
        .fire({
          title: "Examen Terminado",
          text: "Puntuacion:" + preguntas_correctas + "/" + preguntas_hechas,
          icon: "success",
          showCancelButton: true,
          cancelButtonText: "Salir",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Intentar de nuevo!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Reiniciando!", "Selecciona una categoria", "success");
          }
         hideQuizPanel()
        });
    }

    if (reiniciar_puntos_al_reiniciar_el_juego) {
      preguntas_correctas = 0;
      preguntas_hechas = 0;
      npreguntas = [];
      return;
    }

    npreguntas = [];
  }
  npreguntas.push(n);

  preguntas_hechas++;
 
  escogerPregunta(n);
}

function escogerPregunta(n) {
  pregunta = interprete_bp[n];
  select_id("categoria").innerHTML = pregunta.categoria;
  select_id("pregunta").innerHTML = pregunta.pregunta;
  select_id("numero").innerHTML = n + 1; //para que la pregunta comience en 1
  let pc = preguntas_correctas;
  if (preguntas_hechas > 1) {
    select_id("puntaje").innerHTML = pc + "/" + preguntas_hechas;
  } else {
    select_id("puntaje").innerHTML = "";
  }

  style("imagen").objectFit = pregunta.objectFit;
  desordenarRespuestas(pregunta);
  if (pregunta.imagen) {
    select_id("imagen").setAttribute("src", pregunta.imagen);
    style("imagen").height = "200px";
    style("imagen").width = "100%";
  } else {
    style("imagen").height = "0px";
    style("imagen").width = "0px";
    setTimeout(() => {
      select_id("imagen").setAttribute("src", "");
    }, 500);
  }
}

function desordenarRespuestas(pregunta) {
  posibles_respuestas = [
    pregunta.respuesta,
    pregunta.incorrecta1,
    pregunta.incorrecta2,
    pregunta.incorrecta3,
  ];
  posibles_respuestas.sort(() => Math.random() - 0.5);

  select_id("btn1").innerHTML = posibles_respuestas[0];
  select_id("btn2").innerHTML = posibles_respuestas[1];
  select_id("btn3").innerHTML = posibles_respuestas[2];
  select_id("btn4").innerHTML = posibles_respuestas[3];
}

let suspender_botones = false;

function oprimir_btn(i) {
  //evento onclick desde HTML
  if (suspender_botones) {
    return;
  }
  suspender_botones = true;
  if (posibles_respuestas[i] == pregunta.respuesta) {
    preguntas_correctas++;
    btn_correspondiente[i].style.background = "lightgreen";
  } else {
    btn_correspondiente[i].style.background = "pink";
  }
  for (let j = 0; j < 4; j++) {
    if (posibles_respuestas[j] == pregunta.respuesta) {
      btn_correspondiente[j].style.background = "lightgreen";
      break;
    }
  }
  setTimeout(() => {
    reiniciar();
    suspender_botones = false;
  }, 1000);
}

// let p = prompt("numero")

function reiniciar() {
  for (const btn of btn_correspondiente) {
    btn.style.background = "white";
  }
  escogerPreguntaAleatoria();
}

function select_id(id) {
  return document.getElementById(id);
}

function style(id) {
  return select_id(id).style;
}

function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}

function reiniciarDatos() {
  preguntas_correctas = 0;
  preguntas_hechas = 0;
  npreguntas = [];
}

function lanzarPregunta(m) {
  preguntas_correctas = 0;
  preguntas_hechas = 0;
  npreguntas = [];
  materias(m);
  document.getElementById("modalPregunta").style.display = "block";
}
function closeModal() {
  document.getElementById("modalPregunta").style.display = "none";
}

function materias(m) {
  switch (m) {
    case 1:
      document.getElementById("materia1").innerHTML = "Razonamiento verbal";
      document.getElementById("materia2").innerHTML = "Razonamiento matemático";
      document.getElementById("materia3").innerHTML = "Aritmetica y álgebra";
      document.getElementById("materia4").innerHTML =
        "Geometria y Trigonometria";
      document.getElementById("materia5").innerHTML = "Lenguaje";
      document.getElementById("materia6").innerHTML = "Biología";
      document.getElementById("materia7").innerHTML = "Física";
      document.getElementById("materia8").innerHTML = "Química";
      document.getElementById("entrada1").value = 6;
      document.getElementById("entrada2").value = 6;
      document.getElementById("entrada3").value = 3;
      document.getElementById("entrada4").value = 2;
      document.getElementById("entrada5").value = 2;
      document.getElementById("entrada6").value = 9;
      document.getElementById("entrada7").value = 5;
      document.getElementById("entrada8").value = 7;
      canal = 1
      break;
    case 2:
      document.getElementById("materia1").innerHTML = "Razonamiento verbal";
      document.getElementById("materia2").innerHTML = "Razonamiento matemático";
      document.getElementById("materia3").innerHTML = "Aritmetica y álgebra";
      document.getElementById("materia4").innerHTML =
        "Geometria y Trigonometria";
      document.getElementById("materia5").innerHTML = "Lenguaje";
      document.getElementById("materia6").innerHTML = "Lógica";
      document.getElementById("materia7").innerHTML = "Física";
      document.getElementById("materia8").innerHTML = "Química";
      document.getElementById("entrada1").value = 6;
      document.getElementById("entrada2").value = 6;
      document.getElementById("entrada3").value = 7;
      document.getElementById("entrada4").value = 7;
      document.getElementById("entrada5").value = 1;
      document.getElementById("entrada6").value = 2;
      document.getElementById("entrada7").value = 6;
      document.getElementById("entrada8").value = 5;
      canal = 2
      break;
    case 3:
      document.getElementById("materia1").innerHTML = "Razonamiento verbal";
      document.getElementById("materia2").innerHTML = "Razonamiento matemático";
      document.getElementById("materia3").innerHTML = "Aritmetica y álgebra";
      document.getElementById("materia4").innerHTML = "Literatura";
      document.getElementById("materia5").innerHTML = "Lenguaje";
      document.getElementById("materia6").innerHTML = "Historia";
      document.getElementById("materia7").innerHTML = "Geografía";
      document.getElementById("materia8").innerHTML = "Economía";
      document.getElementById("entrada1").value = 6;
      document.getElementById("entrada2").value = 6;
      document.getElementById("entrada3").value = 4;
      document.getElementById("entrada4").value = 5;
      document.getElementById("entrada5").value = 7;
      document.getElementById("entrada6").value = 5;
      document.getElementById("entrada7").value = 4;
      document.getElementById("entrada8").value = 3;
      canal = 3
      break;
    case 4:
      document.getElementById("materia1").innerHTML = "Razonamiento verbal";
      document.getElementById("materia2").innerHTML = "Razonamiento matemático";
      document.getElementById("materia3").innerHTML = "Aritmetica y álgebra";
      document.getElementById("materia4").innerHTML =
        "Geometria y Trigonometria";
      document.getElementById("materia5").innerHTML = "Lenguaje";
      document.getElementById("materia6").innerHTML = "Historia";
      document.getElementById("materia7").innerHTML = "Geografía";
      document.getElementById("materia8").innerHTML = "Economía";
      document.getElementById("entrada1").value = 6;
      document.getElementById("entrada2").value = 6;
      document.getElementById("entrada3").value = 6;
      document.getElementById("entrada4").value = 3;
      document.getElementById("entrada5").value = 5;
      document.getElementById("entrada6").value = 4;
      document.getElementById("entrada7").value = 3;
      document.getElementById("entrada8").value = 7;
      canal = 4
      break;
    default:
      document.getElementById("materia1").innerHTML = "Celda 8";
  }
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
/* OCULTAR / MOSTRAR PANEL DE PREGUNTAS */
function hideQuizPanel(){
  document.getElementById("quizPanel").style.visibility = "hidden"; // oculta
}

function showQuizPanel(){
  document.getElementById("quizPanel").style.visibility = "visible"; // muestra
}
