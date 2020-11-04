var clock = document.getElementById('clock');
var greeting  = document.getElementById('greet');
var mood = document.getElementById('mood');

function updateTime(){
var time =  new Date();
var hours = time.getHours();
var min = time.getMinutes();
var seconds = time.getSeconds();
var amPm = hours>12?'PM':'AM';
var hour_t  = hours%12||12; 
clock.innerHTML = `${addZero(hour_t)}<span>:</span>${addZero(min)}<span>:</span>${addZero(seconds)} ${amPm}`;
if (hours >=20){
    document.body.style.backgroundImage = "url('../images/night1.jpg')";
    clock.style.color = "white";
    greeting.style.color = "white";
    greeting.innerHTML = 'Good Night';
    mood.innerHTML = '😴';
}
else if(hours>=16 && hours<20){
    document.body.style.backgroundImage = "url('../images/eve.jpg')";
    clock.style.color = "white";
    greeting.style.color = "white";
    greeting.innerHTML = 'Good Evening';
}
else if(hours>=12 && hours<16){
    document.body.style.backgroundImage = "url('../images/afternoon.jpg')";
    clock.style.color = "black";
    greeting.style.color = "white";
    greeting.innerHTML = 'Good Afternoon';
    mood.innerHTML = '😉';
}
else{
    document.body.style.backgroundImage = "url('../images/morning.jpg')";
    clock.style.color = "Black";
    greeting.style.color = "Black";
    greeting.innerHTML = 'Good Morning';
    mood.innerHTML = '😁';
}

setTimeout(updateTime,1000);
}
updateTime();

function addZero(n){
    return parseInt(n)<10?'0'+n:n;
}
