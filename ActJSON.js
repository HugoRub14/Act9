// Selecciona el elemento <header> del HTML y lo guarda en la variable header
const header = document.querySelector("header");
// Selecciona el elemento <section> del HTML y lo guarda en la variable section
const section = document.querySelector("section");

// URL del archivo JSON que contiene datos sobre superhéroes
const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
// Crea un nuevo objeto XMLHttpRequest para realizar una solicitud HTTP
const request = new XMLHttpRequest();
// Abre una solicitud GET con la URL del archivo JSON
request.open("GET", requestURL);
// Especifica que la respuesta será de tipo JSON
request.responseType = "json";
// Envía la solicitud HTTP al servidor
request.send();

// Función que se ejecuta cuando la solicitud HTTP ha sido completada
request.onload = function () {
  // Guarda la respuesta JSON en la variable superHeroes
  const superHeroes = request.response;
  // Llama a la función populateHeader para mostrar información general del equipo de superhéroes
  populateHeader(superHeroes);
  // Llama a la función showHeroes para mostrar las tarjetas de información de cada superhéroe
  showHeroes(superHeroes);
};

// Función que muestra información general del equipo de superhéroes en el encabezado
function populateHeader(jsonObj) {
  // Crea un elemento <h1> y le asigna el nombre del equipo de superhéroes
  const myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["squadName"];
  // Agrega el elemento <h1> al encabezado
  header.appendChild(myH1);

  // Crea un elemento <p> con información adicional del equipo de superhéroes
  const myPara = document.createElement("p");
  myPara.textContent = "Hometown: " + jsonObj["homeTown"] + " // Formed: " + jsonObj["formed"];
  // Agrega el elemento <p> al encabezado
  header.appendChild(myPara);
}

// Función que muestra las tarjetas de información para cada superhéroe en la sección
function showHeroes(jsonObj) {
  // Obtiene la lista de superhéroes del objeto JSON
  const heroes = jsonObj["members"];

  // Recorre cada superhéroe en la lista
  for (var i = 0; i < heroes.length; i++) {
    // Crea un nuevo elemento <article> para la tarjeta de información del superhéroe
    const myArticle = document.createElement("article");
    // Crea elementos <h2>, <p>, y <ul> para mostrar información específica del superhéroe
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    // Asigna el nombre del superhéroe al elemento <h2>
    myH2.textContent = heroes[i].name;
    // Asigna la identidad secreta del superhéroe al primer párrafo
    myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    // Asigna la edad del superhéroe al segundo párrafo
    myPara2.textContent = "Age: " + heroes[i].age;
    // Agrega el texto "Superpowers:" al tercer párrafo
    myPara3.textContent = "Superpowers:";

    // Obtiene la lista de superpoderes del superhéroe
    const superPowers = heroes[i].powers;
    // Recorre cada superpoder del superhéroe
    for (var j = 0; j < superPowers.length; j++) {
      // Crea un elemento <li> para cada superpoder y lo agrega a la lista
      const listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    // Agrega los elementos de información del superhéroe al elemento <article>
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    // Agrega la tarjeta de información del superhéroe a la sección
    section.appendChild(myArticle);
  }
}
