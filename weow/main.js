const btn = document.querySelectorAll('input[name="radio"]');

const weatherUI = document.getElementById('weather-ui');
const tempUI = document.getElementById('temp-ui');
const lightCtrlUI = document.getElementById('lightCtrl-ui');



window.addEventListener("load", (event) => {
    unsetAllTabs();
});
window.addEventListener("click", (event) => {
    checkButtons();
});

function unsetAllTabs() {
    weatherUI.style.display = 'none';
    tempUI.style.display = 'none';
    lightCtrlUI.style.display = 'none';
}

function checkButtons() {
    if (document.getElementById('none').checked == true) {
        console.log("yo");
    }
    /*Check Weather*/
    if (document.getElementById('weather').checked == true) {
        weatherUI.style.display = 'flex';
    }
    else if (document.getElementById('weather').checked == false) {
        weatherUI.style.display = 'none';
    }
    /*Check Temp*/
    if (document.getElementById('temperature').checked == true) {
        tempUI.style.display = 'flex';
    }
    else if (document.getElementById('temperature').checked == false) {
        tempUI.style.display = 'none';
    }
    /*Check LightCtrl*/
    if (document.getElementById('lightCTRL').checked == true) {
        lightCtrlUI.style.display = 'flex';
    }
    else if (document.getElementById('lightCTRL').checked == false) {
        lightCtrlUI.style.display = 'none';
    }
}
