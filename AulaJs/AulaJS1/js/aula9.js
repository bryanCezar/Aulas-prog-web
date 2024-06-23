const turnOn= document.getElementById('buttonOn');
const turnOff= document.getElementById('buttonOff');
const lamp= document.getElementById('lamp');
function islampBroken(){
    return lamp.src.indexOf('quebrado')>-1;
}
function ligarOn(){
    if(!islampBroken()){
        lamp.src='./img/ligado.jpeg';
    }
}
function desligarOff(){
    if(!islampBroken()){
        lamp.src='./img/desligado.jpeg';
    }
}
function quebrarLamp(){
    lamp.src='./img/quebrado.jpeg';
}
turnOn.addEventListener('click',ligarOn);

turnOff.addEventListener('click',desligarOff);
lamp.addEventListener('mouseOver',ligarOn);
lamp.addEventListener('mouseleave',desligarOff);
lamp.addEventListener('dbClick',quebrarLamp);
