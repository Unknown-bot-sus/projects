// UI
const form = document.getElementById("form");
const inputel = document.getElementById("input");
const todoul = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));
// console.log(todos);
// console.log(typeof todos);
if(todos){
    todos.forEach(todo => addtodo(todo));
}

form.addEventListener("submit", (e)=>{
    // console.log('form');
    addtodo();
    e.preventDefault();
});

function addtodo(todo){
    // console.log('addtodo: started working');
    let todotext = inputel.value;
    // console.log(todotext);

    if(todo){
        todotext = todo.text;
    }

    if(todotext){
        const li = document.createElement('li');

        if(todo && todo.complete){
            // add class
            li.classList.add("completed");
        }

        li.appendChild(document.createTextNode(todotext));
        // console.log(li);
        todoul.appendChild(li);
        inputel.value = '';

        // Add to localStorage
        updatelocalstorage();

        // add line-through by left click
        li.addEventListener('click',()=>{
            li.classList.toggle('completed');
            updatelocalstorage();
        });

        // remove by rightclick
        li.addEventListener("contextmenu", (e)=>{
            // console.log("Right click working");
            li.remove();
            updatelocalstorage();
            e.preventDefault();
        });

    }else{
        window.alert("Enter your todo");
    }
}

function updatelocalstorage(){
    // console.log("Local storage started");

    let todolis = document.querySelectorAll('li');
    // console.log(todolis);
    let todos = [];

    todolis.forEach((todoli)=>{
        // console.log(todoli);
        todos.push({
            text: todoli.innerText,
            complete: todoli.classList.contains('completed')
        });
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}

// 22NF WDFXXXX