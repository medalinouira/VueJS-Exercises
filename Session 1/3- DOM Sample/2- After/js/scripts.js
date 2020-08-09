/* 
    Mohamed Ali NOUIRA
    http://www.mohamedalinouira.com
    https://github.com/medalinouira
    Copyright © Mohamed Ali NOUIRA. All rights reserved.
*/

function changeBtnColor() {
    document.getElementById("button1").style.background = "#" + ((1 << 24) * Math.random() | 0).toString(16);
}

function changeBtnContent() {
    document.getElementById("button2").innerHTML = Math.random().toString(36).substring(7);
}

function ChangeTitleDisplayMode() {
    var btnVisibility = document.getElementById('title').style.visibility;
    document.getElementById('title').style.visibility = btnVisibility === 'visible' ? 'hidden' : 'visible';
}