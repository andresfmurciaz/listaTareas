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

export default checkComplete;