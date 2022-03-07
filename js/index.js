let preguntas_aleatorias = true;
let mostrar_pantalla_juego_términado = true;
let reiniciar_puntos_al_reiniciar_el_juego = true;

var horas = 1;
var minutos = 0;
var segundos = 0;

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
  validarfor()
  horas = 0
  minutos = 0
  segundos = 0
  closeModal();
  showQuizPanel()
  obtenerdatos();
  showTimerQuiz();
  /* entrada1 = document.getElementById("entrada1").value; */
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
        inicio1= 104;
        inicio2= 0;
        inicio3= 377;
        inicio4= 481;
        inicio5= 1097;
        inicio6= 1434;
        inicio7= 590;
        inicio8= 690;

        fin1 = 376;
        fin2 = 103;
        fin3 = 480;
        fin4 = 589;
        fin5 = 1223;
        fin6 = 1555;
        fin7 = 689;
        fin8 = 789;
      
        break;
      case 2:
        inicio1= 104;
        inicio2= 0;
        inicio3= 377;
        inicio4= 481;
        inicio5= 1097;
        inicio6= 790;
        inicio7= 590;
        inicio8= 690;

        fin1 = 376;
        fin2 = 103;
        fin3 = 480;
        fin4 = 589;
        fin5 = 1223;
        fin6 = 849;
        fin7 = 689;
        fin8 = 789;
        break;
      case 3:
        inicio1= 104;
        inicio2= 0;
        inicio3= 377;
        inicio4= 1224;
        inicio5= 1097;
        inicio6= 950;
        inicio7= 1324;
        inicio8= 850;

        fin1 = 376;
        fin2 = 103;
        fin3 = 480;
        fin4 = 1323;
        fin5 = 1223;
        fin6 = 1096;
        fin7 = 1433;
        fin8 = 949;
        break;
      case 4:
        inicio1= 104;
        inicio2= 0;
        inicio3= 377;
        inicio4= 481;
        inicio5= 1097;
        inicio6= 950;
        inicio7= 1324;
        inicio8= 850;

        fin1 = 376;
        fin2 = 103;
        fin3 = 480;
        fin4 = 589;
        fin5 = 1223;
        fin6 = 1096;
        fin7 = 1433;
        fin8 = 949;
        break;
      default:
        return
    }
    obtenerTiempo(valor8)
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
    juegoterminado()
    

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

function juegoterminado(){

  if (mostrar_pantalla_juego_términado) {
    swal
      .fire({
        title: "Examen Terminado",
        text: "Puntuacion:" + preguntas_correctas + "/" + preguntas_hechas,
        icon: "success",
        showCancelButton: false,
        cancelButtonText: "Salir",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Volver al inicio",
      })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Reiniciando!", "Selecciona una categoria", "success");
        }
       hideQuizPanel()
       hideTimerQuiz()
      });
  }

}



function escogerPregunta(n) {
  pregunta = interprete_bp[n];
  select_id("categoria").innerHTML = pregunta.categoria;
  select_id("pregunta").innerHTML = pregunta.pregunta;
  select_id("numero").innerHTML = n + 1; //para que la pregunta comience en 1
  let pc = preguntas_correctas;
  if (preguntas_hechas > 1) {
  /*   select_id("puntaje").innerHTML = pc + "/" + preguntas_hechas; */
    select_id("puntaje").innerHTML ="Pregunta " + preguntas_hechas + "/" + valor8;
  } else {
    select_id("puntaje").innerHTML ="Pregunta " +  preguntas_hechas + "/" + valor8;
  }

 /*  style("imagen").objectFit = pregunta.objectFit; */
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

/* function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
} */
/* OCULTAR / MOSTRAR PANEL DE PREGUNTAS */
function hideQuizPanel(){
  document.getElementById("quizPanel").style.visibility = "hidden"; // oculta
}

function showQuizPanel(){
  document.getElementById("quizPanel").style.visibility = "visible"; // muestra
}

function obtenerTiempo(totalpreguntas){

  let tiempo= totalpreguntas * 2
  
  while(tiempo>60){
    console.log("hora")
      tiempo = tiempo - 60
  
      horas++
      console.log("hora")
  }
  
  minutos= tiempo
  
  cargarSegundo();
  
  }
  
  
  //Definimos y ejecutamos los segundos
  function cargarSegundo(){
      let txtSegundos;
  
      if(segundos < 0){
          segundos = 59; 
      }
  
      //Mostrar Segundos en pantalla
      if(segundos < 10){
          txtSegundos = `0${segundos}`;
      }else{
          txtSegundos = segundos;
      }
      document.getElementById('Segundos').innerHTML = txtSegundos;
      segundos--;
  
      cargarMinutos(segundos);
  }
  
  //Definimos y ejecutamos los minutos
  function cargarMinutos(segundos){
      let txtMinutos;
  
      if(segundos == -1 && minutos !== 0){
          setTimeout(() =>{
              minutos--;
          },500)
      }else if(segundos == -1 && minutos == 0){
          setTimeout(() =>{
              minutos = 59;
          },500)
      }
  
      //Mostrar Minutos en pantalla
      if(minutos < 10){
          txtMinutos = `0${minutos}`;
      }else{
          txtMinutos = minutos;
      }
      document.getElementById('Minutos').innerHTML = txtMinutos;
      cargarHoras(segundos,minutos);
  }
  
  //Definimos y ejecutamos las horas
  function cargarHoras(segundos,minutos){
      let txtHoras;
  
      if(segundos == -1 && minutos == 0 && horas !== 0){
          setTimeout(() =>{
              horas--;
          },500)
      }else if(segundos == -1 && minutos == 0 && horas == 0){
          setTimeout(() =>{
              juegoterminado();
          },500)
      }
  
      //Mostrar Horas en pantalla
      if(horas < 10){
          txtHoras = `0${horas}`;
      }else{
          txtHoras = horas;
      }
      document.getElementById('Horas').innerHTML = txtHoras;

    
  }
  
  
  //Ejecutamos cada segundo
setInterval(cargarSegundo,1000); 

function showTimerQuiz(){
  document.getElementById("timerQuiz").style.visibility = "visible"; // muestra
}

function hideTimerQuiz(){
  document.getElementById("timerQuiz").style.visibility = "hidden"; // muestra
}

/* VALIDAD FORMULARIO EXAMEN */
function validarfor(){
 
  var vEntrada1 = document.getElementById("entrada1").value; 
  var vEntrada2 = document.getElementById("entrada2").value;
  var vEntrada3 = document.getElementById("entrada3").value;
  var vEntrada4 = document.getElementById("entrada4").value;
  var vEntrada5 = document.getElementById("entrada5").value;
  var vEntrada6 = document.getElementById("entrada6").value;
  var vEntrada7 = document.getElementById("entrada7").value;
  var vEntrada8 = document.getElementById("entrada8").value;

 /*  if ((vEntrada1== "") || (vEntrada2 == "") || (vEntrada3 == "") || (vEntrada4 == "") || (vEntrada5 == "") || (vEntrada6 == "") || (vEntrada7 == "") || (vEntrada8 == "")) {  //COMPRUEBA CAMPOS VACIOS
    
      alert("Los campos no pueden quedar vacios");
      return true;  
      
  } */
  /* COMPRUEBA CAMPOS VACIOS Y LOS REEMPLZA POR = 0 */
  if (vEntrada1 == ""){
    document.getElementById("entrada1").value = 0
  }
  if (vEntrada2 == ""){
    document.getElementById("entrada2").value = 0
  }
  if (vEntrada3 == ""){
    document.getElementById("entrada3").value = 0
  }
  if (vEntrada4 == ""){
    document.getElementById("entrada4").value = 0
  }
  if (vEntrada5== ""){
    document.getElementById("entrada5").value = 0
  }
  if (vEntrada6 == ""){
    document.getElementById("entrada6").value = 0
  }
  if (vEntrada7 == ""){
    document.getElementById("entrada7").value = 0
  }
  if (vEntrada8 == ""){
    document.getElementById("entrada8").value = 0
  }
  }