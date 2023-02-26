// Variables
const date = document.querySelector('.date') // Sélectionne la classe date
const access = document.querySelector('.access') // Sélectionne la classe access
const statut = document.querySelector('.statut') // Sélectionne la classe statut
let abonnement = null // true = autorisé, false = refusé, null = en attente
const points = document.querySelector('.points') // Sélectionne la classe points
const passValid = document.querySelector('.navigo-valide') // Sélectionne la classe navigo-valide
const passInvalid = document.querySelector('.navigo-invalide') // Sélectionne la classe navigo-invalide
const validSound = new Audio('./assets/12368.mp3'); // Sélectionne le son de validation

// Functions
function getDate() {
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    date.innerHTML = `${day}/${month}/${year}`
}

function statutAccess() {
    if (abonnement == true) {
        statut.style.backgroundColor = 'greenyellow'
    } else if (abonnement == false) {
        statut.style.backgroundColor = 'red'
    } else {
        statut.style.backgroundColor = 'white'
    }
}

function message() {
    if (abonnement == true) {
        access.innerHTML = 'AUTORISÉ'
    } else if (abonnement == false) {
        access.innerHTML = 'REFUSÉ'
    } else {
        access.innerHTML = 'En attente'
    }
}

// Control Access
passValid.onclick = function () {
    points.style.display = 'flex'
    setTimeout(getDate, 4000); 
    abonnement = true
    setTimeout(message, 6000);
    setTimeout(statutAccess, 7000);
    setTimeout(function () {
        points.style.display = 'none'
        validSound.play()
    }, 6000);
}

passInvalid.onclick = function () {
    points.style.display = 'flex'
    setTimeout(getDate, 4000); 
    abonnement = false
    setTimeout(message, 6000);
    setTimeout(statutAccess, 7000);
    setTimeout(function () {
        points.style.display = 'none'
    }, 6000);
}