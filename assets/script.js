// Endpoint pour récupérer une blague dans l'api
const endpoint = "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
const tableBody = document.getElementById("tabBlague");
const btnAjouter = document.getElementById("AjouterBlague");
const btnVider = document.getElementById("ViderBlague");


// boutton pou ajouter une blague
btnAjouter.addEventListener("click", () => {
  fetch(endpoint)
    .then(res => res.json())
    .then(data => ajouterBlague(data))
});


// bouuttton pour vider le tableau des blagues
btnVider.addEventListener("click", () => {
  tabBlague.innerHTML = ""; // supprime toutes les lignes
});

// Fonction pour créer la ligne de tableau avec la blague
function ajouterBlague(blagueData) {
    const row = document.createElement("tr");

    //catégorie
    const tdCATEGORIE = document.createElement("td");
    tdCATEGORIE.textContent = blagueData.category
    row.appendChild(tdCATEGORIE);

    //la blague
    const tdBLAGUE = document.createElement("td");
    if (blagueData.type === "single") {
        tdBLAGUE.textContent = blagueData.joke;
    } else if (blagueData.type === "twopart") {
        tdBLAGUE.textContent = `${blagueData.setup} — ${blagueData.delivery}`;
    }
    row.appendChild(tdBLAGUE);

    //bouton supprimer
    const tdMODIFIER = document.createElement("td");
    const btnSUPPRIMER = document.createElement("button");
    btnSUPPRIMER.textContent = "Supprimer";
    btnSUPPRIMER.classList.add("btn", "btn-sm", "btn-danger");
    btnSUPPRIMER.addEventListener("click", () => row.remove());
    tdMODIFIER.appendChild(btnSUPPRIMER);
    row.appendChild(tdMODIFIER);

    tableBody.appendChild(row);
}


