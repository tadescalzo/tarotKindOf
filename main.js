let pantallaNombres = document.getElementById("pantallaNombres");
let pantallaCarga = document.getElementById("pantallaCarga");
let pantallaCartas = document.getElementById("pantallaCartas");
let pantallaReroll = document.getElementById("pantallaReroll");
let pantallaFinal = document.getElementById("pantallaFinal");
let pantallaFinalPrimeroImgs = document.getElementById(
  "pantallaFinalPrimeroImgs"
);
let pantallaFinalSegundoImgs = document.getElementById(
  "pantallaFinalSegundoImgs"
);
let pantallaNombresJugadas = document.getElementById("pantallaNombresJugadas");
let pantallaNombresListita = document.getElementById("pantallaNombresListita");
let pantallaFinalResultado = document.getElementById("pantallaFinalResultado");

let cards =
  '{"cartas": [' +
  '{"nombre":"El Loco","desc":"El Loco anuncia que se vienen importantes decisiones que pueden ser difíciles de tomar, y que pueden significar un riesgo para ti.","valor": "7","source":"images/imgLoco.png"},' +
  '{"nombre":"El Mago","desc":"Su presencia en tu tirada indica que posees un nivel de autoconfianza y determinación que te permiten traducir las ideas en acciones.","valor": "3","source":"images/imgMago.png"},' +
  '{"nombre":"La Sacerdotisa","desc":"Ella puede estar indicando que la razón debe pasar a segundo plano frente al instinto. Tu cabeza debe confiar en la sabiduría de tu corazón.","valor":"9" ,"source":"images/imgSacerdotiza.png"},' +
  '{"nombre":"La Emperatriz","desc":"Tradicionalmente se le ha asociado con una fuerte influencia maternal, la Emperatriz te trae excelentes noticias si estás buscando la armonía en tu matrimonio o esperar iniciar una familia.","valor":"5","source":"images/imgEmperatriz.png"},' +
  '{"nombre":"El Emperador","desc":"El emperador indica que puedes poseer una fuerza interior fuera de lo común que te obligará a actuar y liderar.","valor":"5","source":"images/imgEmperador.png"},' +
  '{"nombre":"El Papa","desc":"Representa la doctrina, pero la doctrina puede venir en manera de enseñanza y guía o de una autoridad rígida.","valor":"1","source":"images/imgPapa.png"},' +
  '{"nombre":"Los Amantes","desc":"El amor no solo viene en formas diversas sino que los Amantes pueden indicar que se avecinan decisiones difíciles o importantes en tu vida.","valor":"8","source":"images/imgAmantes.png"},' +
  '{"nombre":"El Carro","desc":"Tienes trabajo arduo frente a ti. Se puede resolver rápidamente, pero El Carro es una carta fuerte y la labor a la que te estás comprometiendo probablemente sea larga y difícil.","valor":"2","source":"images/imgCarro.png"},' +
  '{"nombre":"Fuerza","desc":"Esta carta puede ser una alerta para tomar las riendas de tus propias acciones y emociones antes de que te dañen a ti o a las personas que te importan.","valor":"1","source":"images/imgFuerza.png"},' +
  '{"nombre":"El Ermitaño","desc":"Necesitas de un periodo de reflexión interior, lejos de las actuales demandas de tu posición. Este retiro puede ser físico o una búsqueda interior.","valor":"1","source":"images/imgErmitanio.png"},' +
  '{"nombre":"La Rueda de la Fortuna","desc":"La Rueda de la Fortuna simboliza los ciclos de la vida y habla de nuevos inicios. Es muy probable que encuentres que estos eventos sean positivos.","valor":"6","source":"images/imgRueda.png"},' +
  '{"nombre":"Justicia","desc":"Es un indicador importante de una resolución positiva, aunque cómo y de qué clase dependerá de tus propias experiencias.","valor":"4","source":"images/imgJusticia.png"},' +
  '{"nombre":"El Colgado","desc":"Puede indicar un cambio en tu futuro que tal vez esté más allá de tu control, y que será una decisión de la cual, para bien o para mal, no podrás retractarte.","valor":"7","source":"images/imgColgado.png"},' +
  '{"nombre":"Muerte","desc":"La Muerte indica cambios en tu futuro. Este cambio se puede dar en casi cualquier aspecto de tu vida, pero de seguro será permanente, significativo y absoluto.","valor":"3","source":"images/imgMuerte.png"},' +
  '{"nombre":"Templanza","desc":"La Templanza es una carta optimista que te anima a encontrar un equilibrio en tu vida y abordar los problemas con una actitud calmada.","valor":"3","source":"images/imgTemplanza.png"},' +
  '{"nombre":"El Diablo","desc":"El Diablo está en el negocio de la trampa. Señala que hay una situación de la cual no hay escapatoria, o un camino que conduce a ésta.","valor":"7","source":"images/imgDiablo.png"},' +
  '{"nombre":"La Torre","desc":"La Torre en tu tirada siempre es una amenaza, pero la vida inevitablemente implica tragedia, y debes de decidir si la enfrentarás con gracia.","valor":"1","source":"images/imgTorre.png"},' +
  '{"nombre":"La Estrella","desc":"La presencia de la Estrella significa un periodo de descanso y renovación para ti. Esta renovación puede ser spiritual, física o ambas.","valor":"9","source":"images/imgEstrella.png"},' +
  '{"nombre":"La Luna","desc":"Puede significar que hay algo importante que se te está siendo ocultado por otra persona.","value":"6","source":"images/imgLuna.png"},' +
  '{"nombre":"El Sol","desc":"El sol representa un desarrollo positivo y tiene una Buena influencia inherente. Sugiere ganancia personal y alegría.","valor":"4","source":"images/imgSol.png"},' +
  '{"nombre":"Juicio","desc":"Significa que los planes, que con frecuencia han tardado tiempo en llevarse a cabo, van a rendir frutos, Si apunta hacia el futuro, puede hablar de la naturaleza del cambio","valor":"8","source":"images/imgJuicio.png"},' +
  '{"nombre":"El Mundo","desc":"El Mundo es un indicador de un cambio importante e inexorable, de amplitud tectónica. Este cambio representa una oportunidad para tu para terminar con lo Viejo.","valor":"2","source":"images/imgMundo.png"}]}';

obj = JSON.parse(cards);

/*INICIAR JUEGO*/
let guardar = document
  .getElementById("pantallaNombresLaunch")
  .addEventListener("click", function () {
    window.jugador1 = document.getElementById("pantallaNombres1").value;
    window.jugador2 = document.getElementById("pantallaNombres2").value;
    //Revisar si input esta vacio
    if (window.jugador1.length < 2) {
      pantallaNombres1.style.background = "#a77171";
      setTimeout(() => {
        pantallaNombres1.style.background = "rgb(165, 165, 165)";
      }, 1000);
      if (window.jugador2.length < 2) {
        pantallaNombres2.style.background = "#a77171";
        setTimeout(() => {
          pantallaNombres2.style.background = "rgb(165, 165, 165)";
        }, 1000);
      }
    } else if (window.jugador2.length < 2) {
      pantallaNombres2.style.background = "#a77171";
      setTimeout(() => {
        pantallaNombres2.style.background = "rgb(165, 165, 165)";
      }, 1000);
    } else if (window.jugador1.length != 0 && window.jugador2.length != 0) {
      window.card1 = Math.round(Math.random() * 22) - 1;
      window.card2 = Math.round(Math.random() * 22) - 1;
      window.card3 = Math.round(Math.random() * 22) - 1;
      window.card4 = Math.round(Math.random() * 22) - 1;
      window.card5 = Math.round(Math.random() * 22) - 1;
      window.card6 = Math.round(Math.random() * 22) - 1;
      pantallaNombres.style.display = "none";
      pantallaCarga.style.display = "flex";
      pantallaCartasSiguiente.style.display = "flex";
      setTimeout(() => {
        (pantallaCarga.style.display = "none"),
          (pantallaCartas.style.display = "flex");
      }, 2000);
      let model1_1 = `<h3>Carta 1/3 de ${jugador1}</h3><img src="${obj.cartas[card1].source}" alt="cardImg1" class="pantallaCartasImg"><h3>${obj.cartas[card1].nombre}</h3><p>${obj.cartas[card1].desc}</p>`;
      let model1_2 = `<h3>Carta 2/3 de ${jugador1}</h3><img src="${obj.cartas[card2].source}" alt="cardImg2" class="pantallaCartasImg"><h3>${obj.cartas[card2].nombre}</h3><p>${obj.cartas[card2].desc}</p>`;
      let model1_3 = `<h3>Carta 3/3 de ${jugador1}</h3><img src="${obj.cartas[card3].source}" alt="cardImg3" class="pantallaCartasImg"><h3>${obj.cartas[card3].nombre}</h3><p>${obj.cartas[card3].desc}</p>`;
      let model2_1 = `<h3>Carta 1/3 de ${jugador2}</h3><img src="${obj.cartas[card4].source}" alt="cardImg4" class="pantallaCartasImg"><h3>${obj.cartas[card4].nombre}</h3><p>${obj.cartas[card4].desc}</p>`;
      let model2_2 = `<h3>Carta 2/3 de ${jugador2}</h3><img src="${obj.cartas[card5].source}" alt="cardImg5" class="pantallaCartasImg"><h3>${obj.cartas[card5].nombre}</h3><p>${obj.cartas[card5].desc}</p>`;
      let model2_3 = `<h3>Carta 3/3 de ${jugador2}</h3><img src="${obj.cartas[card6].source}" alt="cardImg6" class="pantallaCartasImg"><h3>${obj.cartas[card6].nombre}</h3><p>${obj.cartas[card6].desc}</p>`;
      card1Player1.innerHTML = model1_1;
      card2Player1.innerHTML = model1_2;
      card3Player1.innerHTML = model1_3;
      card1Player2.innerHTML = model2_1;
      card2Player2.innerHTML = model2_2;
      card3Player2.innerHTML = model2_3;
      /*TERMINAR PANTALLA CARTAS EN MAIN*/
      let siguienteCartas = document
        .getElementById("pantallaCartasSiguiente")
        .addEventListener("click", function () {
          pantallaCartas.style.display = "none";
          pantallaReroll.style.display = "flex";
        });
    }
  });

/*CERRAR PANTALLA CARTAS*/
let cerrarCartas = document
  .getElementById("pantallaCartasCerrar")
  .addEventListener("click", function () {
    pantallaCartas.style.display = "none";
    pantallaNombres.style.display = "flex";
    document.getElementById("pantallaNombres2").value = " ";
    document.getElementById("pantallaNombres1").value = " ";
    window.card1 = Math.round(Math.random() * 22) - 1;
    window.card2 = Math.round(Math.random() * 22) - 1;
    window.card3 = Math.round(Math.random() * 22) - 1;
    window.card4 = Math.round(Math.random() * 22) - 1;
    window.card5 = Math.round(Math.random() * 22) - 1;
    window.card6 = Math.round(Math.random() * 22) - 1;
  });

/*GUARDAR EN PANTALLA REROLL*/
let rerollGuardar = document
  .getElementById("pantallaRerrollGuardar")
  .addEventListener("click", function () {
    pantallaReroll.style.display = "none";
    pantallaFinal.style.display = "flex";
    pantallaNombresJugadas.style.display = "block";
    fin1 = window.card1;
    fin2 = window.card2;
    fin3 = window.card3;
    fin4 = window.card4;
    fin5 = window.card5;
    fin6 = window.card6;
    window.resultado1 =
      parseInt(obj.cartas[fin1].valor) +
      parseInt(obj.cartas[fin2].valor) +
      parseInt(obj.cartas[fin3].valor);
    window.resultado2 =
      parseInt(obj.cartas[fin4].valor) +
      parseInt(obj.cartas[fin5].valor) +
      parseInt(obj.cartas[fin6].valor);
    console.log(resultado1, resultado2);
    compatible(resultado1, resultado2);
    modelFinal1 = `<img src="${obj.cartas[fin1].source}" alt="cardImg1"><img src="${obj.cartas[fin2].source}" alt="cardImg2"><img src="${obj.cartas[fin3].source}" alt="cardImg3">`;
    modelFinal2 = `<img src="${obj.cartas[fin4].source}" alt="cardImg4"><img src="${obj.cartas[fin5].source}" alt="cardImg5"><img src="${obj.cartas[fin6].source}" alt="cardImg6">`;
    pantallaFinalPrimeroImgs.innerHTML = modelFinal1;
    pantallaFinalSegundoImgs.innerHTML = modelFinal2;
  });

/*TIRAR OTRA VEZ*/
let rerollReroll = document
  .getElementById("pantallaRerollReroll")
  .addEventListener("click", function () {
    let jugador1 = document.getElementById("pantallaNombres1").value;
    let jugador2 = document.getElementById("pantallaNombres2").value;
    pantallaReroll.style.display = "none";
    pantallaCarga.style.display = "flex";
    window.card1 = Math.round(Math.random() * 22) - 1;
    window.card2 = Math.round(Math.random() * 22) - 1;
    window.card3 = Math.round(Math.random() * 22) - 1;
    window.card4 = Math.round(Math.random() * 22) - 1;
    window.card5 = Math.round(Math.random() * 22) - 1;
    window.card6 = Math.round(Math.random() * 22) - 1;
    setTimeout(() => {
      (pantallaCarga.style.display = "none"),
        (pantallaCartas.style.display = "flex");
    }, 2000);
    let model1_1 = `<h3>Carta 1/3 de ${jugador1}</h3><img src="${obj.cartas[card1].source}" alt="cardImg1" class="pantallaCartasImg"><h3>${obj.cartas[card1].nombre}</h3><p>${obj.cartas[card1].desc}</p>`;
    let model1_2 = `<h3>Carta 2/3 de ${jugador1}</h3><img src="${obj.cartas[card2].source}" alt="cardImg2" class="pantallaCartasImg"><h3>${obj.cartas[card2].nombre}</h3><p>${obj.cartas[card2].desc}</p>`;
    let model1_3 = `<h3>Carta 3/3 de ${jugador1}</h3><img src="${obj.cartas[card3].source}" alt="cardImg3" class="pantallaCartasImg"><h3>${obj.cartas[card3].nombre}</h3><p>${obj.cartas[card3].desc}</p>`;
    let model2_1 = `<h3>Carta 1/3 de ${jugador2}</h3><img src="${obj.cartas[card4].source}" alt="cardImg4" class="pantallaCartasImg"><h3>${obj.cartas[card4].nombre}</h3><p>${obj.cartas[card4].desc}</p>`;
    let model2_2 = `<h3>Carta 2/3 de ${jugador2}</h3><img src="${obj.cartas[card5].source}" alt="cardImg5" class="pantallaCartasImg"><h3>${obj.cartas[card5].nombre}</h3><p>${obj.cartas[card5].desc}</p>`;
    let model2_3 = `<h3>Carta 3/3 de ${jugador2}</h3><img src="${obj.cartas[card6].source}" alt="cardImg6" class="pantallaCartasImg"><h3>${obj.cartas[card6].nombre}</h3><p>${obj.cartas[card6].desc}</p>`;
    card1Player1.innerHTML = model1_1;
    card2Player1.innerHTML = model1_2;
    card3Player1.innerHTML = model1_3;
    card1Player2.innerHTML = model2_1;
    card2Player2.innerHTML = model2_2;
    card3Player2.innerHTML = model2_3;
  });

/*CERRAR PANTALLA FINAL*/
let finalCerrar = document
  .getElementById("pantallaFinalCerrar")
  .addEventListener("click", function () {
    pantallaFinal.style.display = "none";
    pantallaNombres.style.display = "flex";

    document.getElementById("pantallaNombres2").value = " ";
    document.getElementById("pantallaNombres1").value = " ";
    modelFinal = `  <li class="list-group-item" data-jugador1="${window.jugador1}"data-jugador2="${window.jugador2}"data-carta1="${window.card1}"data-carta2="${window.card2}"data-carta3="${window.card3}"data-carta4="${window.card4}"data-carta5="${window.card5}"data-carta6="${window.card6}">Jugada de: <strong> ${window.jugador1}</strong> y <strong>${window.jugador2}</strong> </li>`;
    pantallaNombresListita.innerHTML += modelFinal;
  });

/*MOSTRAR JUGADAS ANTERIORES*/

pantallaNombresListita.addEventListener("click", function (e) {
  window.card1 = e.target.getAttribute("data-carta1");
  window.card2 = e.target.getAttribute("data-carta2");
  window.card3 = e.target.getAttribute("data-carta3");
  window.card4 = e.target.getAttribute("data-carta4");
  window.card5 = e.target.getAttribute("data-carta5");
  window.card6 = e.target.getAttribute("data-carta6");
  window.jugador1 = e.target.getAttribute("data-jugador1");
  window.jugador2 = e.target.getAttribute("data-jugador2");
  let model1_1 = `<h3>Carta 1/3 de ${jugador1}</h3><img src="${obj.cartas[card1].source}" alt="cardImg1" class="pantallaCartasImg"><h3>${obj.cartas[card1].nombre}</h3><p>${obj.cartas[card1].desc}</p>`;
  let model1_2 = `<h3>Carta 2/3 de ${jugador1}</h3><img src="${obj.cartas[card2].source}" alt="cardImg2" class="pantallaCartasImg"><h3>${obj.cartas[card2].nombre}</h3><p>${obj.cartas[card2].desc}</p>`;
  let model1_3 = `<h3>Carta 3/3 de ${jugador1}</h3><img src="${obj.cartas[card3].source}" alt="cardImg3" class="pantallaCartasImg"><h3>${obj.cartas[card3].nombre}</h3><p>${obj.cartas[card3].desc}</p>`;
  let model2_1 = `<h3>Carta 1/3 de ${jugador2}</h3><img src="${obj.cartas[card4].source}" alt="cardImg4" class="pantallaCartasImg"><h3>${obj.cartas[card4].nombre}</h3><p>${obj.cartas[card4].desc}</p>`;
  let model2_2 = `<h3>Carta 2/3 de ${jugador2}</h3><img src="${obj.cartas[card5].source}" alt="cardImg5" class="pantallaCartasImg"><h3>${obj.cartas[card5].nombre}</h3><p>${obj.cartas[card5].desc}</p>`;
  let model2_3 = `<h3>Carta 3/3 de ${jugador2}</h3><img src="${obj.cartas[card6].source}" alt="cardImg6" class="pantallaCartasImg"><h3>${obj.cartas[card6].nombre}</h3><p>${obj.cartas[card6].desc}</p>`;
  card1Player1.innerHTML = model1_1;
  card2Player1.innerHTML = model1_2;
  card3Player1.innerHTML = model1_3;
  card1Player2.innerHTML = model2_1;
  card2Player2.innerHTML = model2_2;
  card3Player2.innerHTML = model2_3;
  pantallaNombres.style.display = "none";
  pantallaCartas.style.display = "flex";
  pantallaCartasSiguiente.style.display = "none";
});

/*CALCULADORA DE COMPATIBILIDAD*/

function compatible(resultado1, resultado2) {
  let compatiblePrimero = resultado1;
  let compatibleSegundo = resultado2;
  let modelCompatible = `<h1 class='compatible'>Compatible!</h1>`;
  let modelNoCompatible = `<h1 class='noCompatible'>No Compatible!</h1>`;
  compatiblePrimero + compatibleSegundo > 30
    ? (pantallaFinalResultado.innerHTML = modelCompatible)
    : (pantallaFinalResultado.innerHTML = modelNoCompatible);
}
