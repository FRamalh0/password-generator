addListeners();

var length = 12;

var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charnumbers = "0123456789";
var charsymbols = "!@#$%^&*()+.";

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

    for(const element of document.getElementsByClassName('b')) {
        if(element.innerHTML == number) {
            element.classList.add('selected');
        } else {
            element.classList.remove('selected');
        }
    }

    //CUSTOM CLEAN
    if (number == -1) {
        document.getElementsByClassName('c')[0].classList.add('selected');
    } else {
        document.getElementsByClassName('c')[0].classList.remove('selected');
    }

}

function genP() {

    document.getElementsByClassName('p')[0].innerHTML = p();

}

function p() {

    let localchar = charset;
    let locallenght = length;

    let hasNumber = document.getElementsByClassName("numbers")[0].checked;
    let hasSymbol = document.getElementsByClassName("symbols")[0].checked;

    //IF NUMBER IS CHECKED
    if(hasNumber){
        localchar += charnumbers;
    }
    
    //IF SYMBOLS IS CHECKED
    if (hasSymbol){
        localchar += charsymbols;
    }

    if(locallenght == -1) {
        locallenght = document.querySelector('input').value;

        if(locallenght <= 0) {
            changeMsgForASecond("Must be a positive value");
            return;
        }
    }

    let out = "";
    for (var i = 0; i < locallenght; ++i) {
        out += localchar.charAt(Math.floor(Math.random() * localchar.length));
    }

    //VERIFY IF CONTAINS OR NOT NUMBERS OR SYMBOLS (IF THE USER WANTS)
    if((hasNumber && !checkNumbers(out)) || 
        (hasSymbol && !checkSymbol(out))) {
        return p();
    }
    
    return out;
}

function checkSymbol(input) {
    for(let i = 0; i < input.length; ++i){
        if(charsymbols.includes(input.charAt(i))){
            return true;
        }
    } 
    return false;
}

function checkNumbers(input) {
    for(let i = 0; i < input.length; ++i){
        if(charnumbers.includes(input.charAt(i))){
            return true;
        }
    } 
    return false;
}

function copyToClip() {

    navigator.clipboard.writeText(document.getElementsByClassName('p')[0].innerHTML);
    changeMsgForASecond("Copied to clipboard");

}

function changeMsgForASecond(msg) {

    let currenttext = document.getElementsByClassName("p")[0].innerHTML;

    document.getElementsByClassName("p")[0].innerHTML = msg;

    setTimeout(
        function() {
            document.getElementsByClassName("p")[0].innerHTML = currenttext;
        },
        1000
    );

}