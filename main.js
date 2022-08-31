addListeners();

var length = 12;
var isSpecial = false;

function addListeners() {

    //B BUTTONS
    for(const element of document.getElementsByClassName('b')) {
        element.addEventListener('click', () => changeCharacter(element.innerHTML));
    };

    //C BUTTONS
    document.getElementsByClassName('custombutton')[0].addEventListener('click', () => changeCharacter(-1));

    //G BUTTON
    document.getElementsByClassName('g')[0].addEventListener('click', () => genP());

    //COPY BUTTON
    document.getElementsByClassName('copy')[0].addEventListener('click', () => copyToClip());

}

function changeCharacter(number) {
    length = number;
    console.log(number);
}



function genP() {

    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    if (isSpecial){
        //TODO
    }

    if(length == -1) {
        length = document.querySelector('input').value;
    }

    let out = "";
    for (var i = 0; i < length; ++i) {
        out += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    document.getElementsByClassName('p')[0].innerHTML = out;

}

function copyToClip() {
    navigator.clipboard.writeText(document.getElementsByClassName('p')[0].innerHTML);
}