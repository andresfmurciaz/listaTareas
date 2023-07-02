// capturo elemento por medio del DOM
const btnAdd = document.querySelector("[data-btn-add]");

// se crea un metodo para ser mas organizados
const createTask =(evento) => 
    {
        evento.preventDefault();
    // capturamos el input y con value mostramos lo que tiene el input
        const input = document.querySelector("[data-form-input]");
        console.log(input.value);
    };

// se cre un evento que escuche cuando el usuario de la click
btnAdd.addEventListener("click", createTask)