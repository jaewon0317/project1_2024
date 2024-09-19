function addItem() {
    console.log('00todo.js 연결됨');
    const todo = document.getElementById('item');
    const list = document.getElementById('todolist');

    const listitem = document.createElement('li');
    listitem.className = 'list-group-item list-group-item-action list-group-item-warning';

    // 체크박스 추가
    const cbtn = document.createElement('input');
    cbtn.type = 'checkbox';
    cbtn.className = 'check';
    
    // 체크박스 클릭 시 줄 긋기 이벤트 추가
    cbtn.onclick = (e) => {
        if (cbtn.checked) {
            listitem.style.textDecoration = "line-through"; // 체크된 경우 줄 긋기
        } else {
            listitem.style.textDecoration = "none"; // 체크 해제된 경우 줄 제거
        }
    };
    listitem.appendChild(cbtn); // 체크박스를 먼저 추가하여 왼쪽에 배치

    // 텍스트 추가
    const textNode = document.createTextNode(todo.value);
    listitem.appendChild(textNode);

    // 삭제 버튼 추가
    const xbtn = document.createElement('button');
    xbtn.innerHTML = "&times;";
    xbtn.className = 'close';
    xbtn.onclick = (e) => {
        const pnode = e.target.parentNode;
        list.removeChild(pnode);
    };
    listitem.appendChild(xbtn);

    // 리스트에 항목 추가
    list.appendChild(listitem);

    // 입력 필드 초기화 및 포커스
    todo.value = "";
    todo.focus();
}