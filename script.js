
(()=>{
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
        

        // creamos un elemento li para ahcerlo dinamico y no estatico
        const task= document.createElement("li");
        task.classList.add("card");
        input.value="";


        const taskContent = document.createElement("div");

        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;

        // le agrabamos a ese elemento li su clase card para que coja los css
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
      //  taskContent.appendChild(deleteBtn());
        task.appendChild(taskContent);
       task.appendChild(deleteBtn());
        // agregamos hijos
        list.appendChild(task);
    };

    // se cre un evento que escuche cuando el usuario de la click
    btnAdd.addEventListener('click', createTask);
    
    const checkComplete = () => 
    {
        const i = document.createElement("i");
        i.classList.add("far","fa-check-square","icon");
        i.addEventListener("click",completeTask);
        return i;
    }

    const  completeTask =(event)=>
    {
        console.log(event.target )
        const elemento= event.target;
        // si eexiste la clase la elimino si no la dejo
        elemento.classList.toggle("fas");
        elemento.classList.toggle("completeIcon");
        elemento.classList.toggle("far");
    }

        
    const deleteBtn = () =>
    {
        const i = document.createElement("i");
        i.classList.add("fas","fa-trash-alt","trashIcon","icon");
        i.addEventListener("click",deleteTask);
        return i;
    }

    const deleteTask = (event) => 
    {

   const parent = event.target.parentElement;
  parent.remove();
    }

 })();