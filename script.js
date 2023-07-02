// capturo elemento por medio del DOM
const btnAdd = document.querySelector("[data-btn-add]");

// se cre un evento que escuche cuando el usuario de la click
btnAdd.addEventListener("click", (evento) => {
    evento.preventDefault();
// capturamos el input y con value mostramos lo que tiene el input
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);

})