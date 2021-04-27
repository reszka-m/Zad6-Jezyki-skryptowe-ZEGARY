//CEST, UTC+2 Warsaw
window.setInterval(function () {
    const date = new Date();
    const hours = document.getElementById('13');
    hours.style.transform = `rotate(${date.getHours() / 12 * 360}deg)`;
    const minutes = document.getElementById('12');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.getElementById('11');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);
//BST, UTC+1 London
window.setInterval(function () {
    const date = new Date();
    const hours = document.getElementById('23');
    hours.style.transform = `rotate(${date.getHours() / 12 * 360 - 30}deg)`;
    const minutes = document.getElementById('22');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.getElementById('21');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);
//EDT, UTC-4 New York
window.setInterval(function () {
    const date = new Date();
    const hours = document.getElementById('33');
    hours.style.transform = `rotate(${date.getHours() / 12 * 360 - 180}deg)`;
    const minutes = document.getElementById('32');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.getElementById('31');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);
//JST, UTC+9 Tokyo
window.setInterval(function () {
    const date = new Date();
    const hours = document.getElementById('43');
    hours.style.transform = `rotate(${date.getHours() / 12 * 360 + 210}deg)`;
    const minutes = document.getElementById('42');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.getElementById('41');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);
//AWST, UTC+8 Perth
window.setInterval(function () {
    const date = new Date();
    const hours = document.getElementById('53');
    hours.style.transform = `rotate(${date.getHours() / 12 * 360 - 180}deg)`;
    const minutes = document.getElementById('52');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.getElementById('51');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);