// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// changethe count-el in the HTML to reflect the new count

let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment(){
    count++;
    console.log(count);
    countEl.textContent = count;
}

// 1.Create a function called save(), which logs out the count when it's called
function save(){
    saveEl.textContent += count + " - ";
    count = 0;
    countEl.textContent = count;
}