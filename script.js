
const turnOn = document.getElementById('On');
const turnOff = document.getElementById('Off');
const lamp = document.getElementById('lamp');


function lampOn() {
    if (!isQuebrada()) {
        lamp.src = "./img/lampon.jpg";

    }
}

function lampOff() {
    if (!isQuebrada()) {
        lamp.src = "./img/lampoff.jpg";

    }
}
function lampQuebrada() {
    lamp.src = "./img/quebrada.jpg";

}

function isQuebrada() {

    return lamp.src.indexOf('quebrada') > -1

}

On.addEventListener('click', lampOn);
Off.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampQuebrada);




