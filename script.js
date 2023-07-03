// capturo elemento por medio del DOM
const btnAdd = document.querySelector("[data-btn-add]");

// se crea un metodo para ser mas organizados
const createTask =(evento) => 
    {
        evento.preventDefault();
        // capturamos el input y con value mostramos lo que tiene el input // se captura el ul el cual es el contenedor de la card
        const input = document.querySelector("[data-form-input]");
        const list = document.querySelector("[data-list]");
        const value = input.value;
        input.value="";

        // creamos un elemento li para ahcerlo dinamico y no estatico
        const task= document.createElement("li");
        const taskContent = document.createElement("div");
        
        // le agrabamos a ese elemento li su clase card para que coja los css
        task.classList.add("card");
        
        taskContent.appendChild(checkComplete());
        
        const content = `    
                <span class="task">${value}</span>
                <i class="fas fa-trash-alt trashIcon icon"></i>`
        task.appendChild(taskContent);
        // agregamos a ese elemento list el codigo task como hijo
        list.appendChild(task);

    };

// se cre un evento que escuche cuando el usuario de la click
btnAdd.addEventListener('click', createTask);
 
const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far");
    i.classList.add("fa-check-square");
    i.classList.add("icon");

    return i;

    }