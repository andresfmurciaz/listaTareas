// capturo elemento por medio del DOM
const btnAdd = document.querySelector("[data-btn-add]");

// se crea un metodo para ser mas organizados
const createTask =(evento) => 
    {
        evento.preventDefault();
         // capturamos el input y con value mostramos lo que tiene el input
        const input = document.querySelector("[data-form-input]");
         // capturamos la card que muestra cada tarea
        const task= document.querySelector("[data-task]")
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

        task.innerHTML=content;

    };

// se cre un evento que escuche cuando el usuario de la click
btnAdd.addEventListener("click", createTask)