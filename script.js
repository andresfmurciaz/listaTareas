// capturo elemento por medio del DOM
const btnAdd = document.querySelector("[data-btn-add]");

// se crea un metodo para ser mas organizados
const createTask =(evento) => 
    {
        evento.preventDefault();
         // capturamos el input y con value mostramos lo que tiene el input
        const input = document.querySelector("[data-form-input]");
        // se captura el ul el cual es el contenedor de la card
        const list = document.querySelector("[data-list]");
        // creamos un elemento li para ahcerlo dinamico y no estatico
        const task= document.createElement("li");
        // le agrabamos a ese elemento li su clase card para que coja los css
        task.classList.add("card");
        console.log(task)
        const value = input.value;
         //    nos limpia el value
        input.value="";
        const content = `    
                <div>
                <i class="far fa-check-square icon"></i>
                <span class="task">${value}</span>
                </div>
                <i class="fas fa-trash-alt trashIcon icon"></i>`
        console.log(content);
        // se le agrega al task el codigo content
        task.innerHTML=content;
        // agregamos a ese elemento list el codigo task como hijo
        list.appendChild(task)
    };

// se cre un evento que escuche cuando el usuario de la click
btnAdd.addEventListener("click", createTask)