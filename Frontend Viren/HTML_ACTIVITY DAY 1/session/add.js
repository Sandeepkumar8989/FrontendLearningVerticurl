const ul = document.querySelector('ul');
const input = document.getElementById('item');

let itemArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')): [] ;

itemArray.forEach(addTask);

function addTask(text) 
{
    const li= document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
    
}

function add(){
    alert('we are adding now');
    itemArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemArray));
    addTask(input.value);
    input = '';
}
function del()
{
    localStorage.clear();
    ul.innerHTML ='';
    
}

