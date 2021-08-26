const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const saveTabEl = document.getElementById("save-tab-btn");

deleteBtn.addEventListener("dblclick",()=>{
    localStorage.clear();
    myLeads=[];
    render(myLeads);
});

saveTabEl.addEventListener("click", ()=>{
    // console.log(tab[0].url);
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
        myLeads.push(tabs[0].url);
        render(myLeads);
        updateLocalStorage();
    })
    
});

let myLeads = JSON.parse(localStorage.getItem("myLeads"));

if(myLeads){
    render(myLeads);
}else{
    myLeads = [];
}

inputBtn.addEventListener("click", ()=>{
    addLead();
    inputEl.value = "";
    updateLocalStorage();

});

function render(myLeads){
    let listItems = "";
    myLeads.forEach((myLead)=>{
        listItems += `
        <li>
            <a href='${myLead}' target='_blank'>${myLead}</a>
        </li>`;
    });
    ulEl.innerHTML = listItems;
}

function addLead(myLead){
    if(!(Boolean(myLead))){
        myLead = inputEl.value;
    }
    myLeads.push(myLead);
    render(myLeads);
}

function updateLocalStorage(){
    let myLeadLis = document.querySelectorAll('li');
    let myLeads = [];

    myLeadLis.forEach((myLeadLi)=>{
        myLeads.push(myLeadLi.innerText);
    });
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
}