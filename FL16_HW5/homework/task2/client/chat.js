let socket = new WebSocket('ws://localhost:8080'),
    messageInput = document.getElementById('messageInput'),
    nameVal = prompt('Enter Your name', '1'),
    dateWithouthSecond = new Date();

   
document.forms.publish.onsubmit = function () {
    let outgoingMessage = `${nameVal}: ${this.message.value}`;
    showMessageIncoming(outgoingMessage)
    socket.send(outgoingMessage);
    messageInput.value = ''
    return false;
};

socket.onmessage = function (event) {
    let incomingMessage = event.data;
    showMessageComing(incomingMessage);
};

function showMessageComing(message) {

    let messageElem = document.createElement('div'),
        timeElem = document.createElement('div');

    messageElem.classList = 'showComing'
    timeElem.classList = 'timeIncom'

    messageElem.appendChild(document.createTextNode(`${message}`));
    timeElem.appendChild(document.createTextNode(`${dateWithouthSecond.toLocaleTimeString(navigator.language,
        { hour: '2-digit', minute: '2-digit' })}`));

    document.getElementById('chat').appendChild(messageElem);
    document.getElementById('chat').appendChild(timeElem);
}

function showMessageIncoming(message) {

    let messageElem = document.createElement('div'),
        timeElem = document.createElement('div');

    messageElem.classList = 'showIncoming'
    timeElem.classList = 'timeCom'

    messageElem.appendChild(document.createTextNode(`${message}`));
    timeElem.appendChild(document.createTextNode(`${dateWithouthSecond.toLocaleTimeString(navigator.language,
        { hour: '2-digit', minute: '2-digit' })}`));

    document.getElementById('chat').appendChild(messageElem);
    document.getElementById('chat').appendChild(timeElem);

}
