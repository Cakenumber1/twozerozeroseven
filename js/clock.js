const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
setInterval(() => {

    let day = new Date();
    let hh = day.getHours() * 30 - 180;
    let mm = day.getMinutes() * deg - 180;
    let ss = day.getSeconds() * deg - 180;
    hr.style.transform = `rotateZ(${(hh)+((mm+180)/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000)
