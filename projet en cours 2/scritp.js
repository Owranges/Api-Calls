let ul = document.getElementById("lala");
let tableau = [];
let section = document.getElementsByTagName("section")[0];
let input = document.getElementById("jsais");
let select = document.getElementById("selects");
let inputval;

// input.addEventListener("change", function () {
//   inputval;
// });
console.log(tableau);
function getinputvalue() {
  inputval = input.value;
  for (i = 0; i < tableau.length; i++) {
    if (
      tableau[i].substring(0, inputval.length).toUpperCase() ==
      inputval.toUpperCase()
    ) {
      console.log(tableau[i]);
    }
  }
  console.log(inputval);
}

function afficherPays(countries) {
  let result = countries;

  for (let pays of result) {
    let ptag = document.createElement("p");
    // let caca = document.createElement("p");
    ptag.className = "btn btn-outline-secondary";
    ptag.innerHTML = pays.name;
    // caca.innerHTML = pays.subregion;
    section.appendChild(ptag);
    // section.appendChild(caca);
  }
}

function afficherparlettre(countries) {
  let nomPays = countries;
  for (i = 0; i < nomPays.length; i++) {
    tableau.push(nomPays[i].name);
    let optioncreate = document.createElement("option");
    optioncreate.innerHTML = nomPays[i].name;
    select.appendChild(optioncreate);
    // console.log(inputval);
  }
  // for (let option of nomPays) {
  //   let optioncreate = document.createElement("option");
  //   optioncreate.innerHTML = option.name;
  //   select.appendChild(optioncreate);
  // }

  // console.log(tableau);
}
let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.eu/rest/v2/all", true);
request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let data = JSON.parse(this.responseText);
    afficherPays(data);
    afficherparlettre(data);
    // faitepourleonchange(data);
  }
};

let requete = new XMLHttpRequest();
// request.open("GET", `https://restcountries.eu/rest/v2/name/${variable}`, true);
request.send();
// return thomas
// }
// console.log(afficherPays())
// JSON.parse(this.responseText);
//             let pays = JSON.parse(this.responseText);
//             pays.forEach(element => {
//             (element.name);

//             let a= pays
//             maman.innerHTML = a
// afficherPays();

// ajaxGet("https://restcountries.eu/rest/v2/name/France", function(response) {
//     let pays = JSON.parse(response);
//     pays.forEach(function (kkkk)  {
//         console.log(kkkk.name)

//     });

// });
