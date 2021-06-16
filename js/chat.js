function post(){
    let text = document.querySelector('.inputbox').value
    if(text == '')
        return 0
    let m = copy()
    let t = new Date().toLocaleString("ru");
    m.querySelector('.message__text').textContent = text;
    m.querySelector('.datetime').textContent = t
    m.querySelector('.avatar').src = './images/user.svg';
    m.querySelector('.nickname').textContent = 'O - OLEG';
    let chat = document.querySelector('.chat__container')
    console.log(chat)
    chat.append(m);
    document.querySelector('.inputbox').value = '';
    recount();
    chat.scrollTop = chat.scrollHeight;
    
}

function copy() {
    let message = document.createElement('div');
    message.setAttribute('class', 'message')
    let temp = document.querySelector('#message')
    message.append(temp.content.cloneNode(true));
    return message;
}

function recount(){
    document.querySelector('#counter__words').textContent = 80 - document.querySelector('.inputbox').value.length
}