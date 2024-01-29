
function myFunction(){
    let element=document.body;
    element.classList.toggle('dark-mode');
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}

function validerFormulaire(e) {
    e.preventDefault(); // Empêche la soumission du formulaire par défaut

    let body = document.body; // Sélectionne le body

    let nom = document.getElementById("nom");
    let email = document.getElementById("email");
    let emailError = document.getElementById ("emailError");
//comment faire en sorte que lorsqu'on ne tape un email invalide il y ai un message d'erreur?//
//je n'ai pas compris comment fonctionne le "regex" mais je pense que je pourrais lutiliser pour demander seulement l'utilisation de @ + gmail/outlook/hotmail.. + .com/fr 


    let accepter = document.getElementById("accepter");
    let accepterError = document.getElementById("accepterError");

    if (!accepter.checked) {
        accepterError.textContent = "Veuillez cocher la case pour continuer.";
        accepterError.classList.add("error");
        body.classList.add("error"); // Ajoute la classe error au body en cas d'erreur
    } else {
        accepterError.textContent = "";
        accepterError.classList.remove("error");
        body.classList.remove("error"); // Retire la classe error du body s'il n'y a pas d'erreur
    }


}
let bt=document.querySelector('#bt');
bt.addEventListener('click',validerFormulaire)

function valide(e){
    e.preventDefault();
    let nom=document.querySelector("#nom");
    console.log(nom);
    let nomValue=nom.value;
    console.log(nomValue);
    let select=document.querySelector('#liste');
    console.log(select);
    let selectValue=select.value;
    console.log(selectValue);

}