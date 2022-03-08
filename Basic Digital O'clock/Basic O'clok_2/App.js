

const saat = setInterval(saatFunc, 1000);

function saatFunc() {
    const a = new Date();
    const b = a.toLocaleTimeString();
    //console.log(b);
    document.body.innerHTML = b;
}

//clearInterval(saat);

