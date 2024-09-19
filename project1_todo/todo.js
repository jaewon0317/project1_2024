function addItem(){

    list = document.getElementById('todolist');
    todo = document.getElementById('item');

    let listitem = document.createElement('li')
    //let xbtn = document.createElement('button')

    listitem.className = 'list-group-action list-group-item list-group-warning'
    //btn.className = 'close';
    //btn.innerHTML = '&times';

    listitem.innerText = todo.value;
    list.appendChild(listitem);
}