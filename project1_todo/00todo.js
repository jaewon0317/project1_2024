// 1번 방식
// function xbtnclick(e){
//     pnode = e.target.parentNode;
//     list = document.getElementById('todolist')
//     list.removeChild(pnode)
// }


function addItem(){

    console.log('00todo.js 연결됨');
    todo = document.getElementById('item');
    list = document.getElementById('todolist');

    listitem = document.createElement('li');
    listitem.innerText = todo.value;
    listitem.className = 'list-group-item list-group-itme-action list-group-item-warning'

    xbtn = document.createElement('button');
    xbtn.innerHTML = "&times";

    // 체크박스 만들기
    // cbtn = document.createElement('checkbox');
    // cbtn.innerHTML = '<input type="checkbox">';

    // onclick 지원방법1 - 함수 적용
    //xbtn.onclick = xbtnclick;

    // onclick 지원방법2 - 익명함수 적용
    // xbtn.onclick = function(e){
    //     pnode = e.target.parentNode
    //     list.removeChild(pnode)
    // }

    // onclick 지원방법3 - 화살표함수 적용
    xbtn.onclick = (e) => {
        pnode = e.target.parentNode
        list.removeChild(pnode)
    }
    xbtn.className = 'close'

    listitem.appendChild(xbtn);

    // 줄 긋기 
    dbtn = document.createElement('button');
    dbtn.innerHTML = "&#33";

    dbtn.onclick = (e) => {
        pnode = e.target.parentNode
        pnode.style.textDecoration = 'line-through'
    }

    dbtn.className = 'close'

    listitem.appendChild(dbtn);


    // list.addEventListener('click', function(){ 
    //     list.style.textDecoration = "line-through";
    // })
    // cbtn.className = 'check'
    // listitem.appendChild(cbtn);

    list.appendChild(listitem);
    todo.value = "";
    todo.focus();
}


