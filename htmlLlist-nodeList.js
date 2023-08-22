// const listItems = document.getElementById('myList');
// console.log(listItems.childNodes);


// html collection 
// const liItems = document.getElementsByTagName('li');
// console.log(liItems);

// for(let i = 0; i < liItems.length; i++){
//     liItems[i].style.color = 'green'
// }
// liItems[2].style.backgroundColor = 'blue'
// Array.from(liItems).map(function (item){
//     console.log(item);
// })


// get nodeList with querySelectorAll 
// const listItems = document.querySelectorAll('li');
// for(let i = 0; i < listItems.length; i++){
//     listItems[i].style.color = 'red'
// }
// for (const item of listItems.values()){
//     console.log(item);
// }

const btnAdd = document.getElementById('btnAdd');
const items = document.getElementsByTagName('li');
// const nodeList = document.querySelectorAll('li');
const listItems = document.getElementById('myList');
const nodeList = listItems.childNodes

btnAdd.addEventListener('click', function(){
    const li = document.createElement('li');
    li.textContent = 'dynamic item';
    listItems.appendChild(li);
    console.log('Total html collection', items.length);
    console.log('Total node list', nodeList.length);

})