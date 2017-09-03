document.addEventListener('DOMContentLoaded', function(){ 
    var session = 0;
    var alarm = new Audio("gong.mp3");
    var sessionTime = 1;
    var breakTime = 1;
    var sessionLength = document.getElementById("sessionLength");
    sessionLength.innerHTML = sessionTime;
    var breakLength = document.getElementById("breakLength");
    breakLength.innerHTML = breakTime;
    var countdown = document.getElementById("countdown");
    countdown.innerHTML = sessionTime + ":00"; 

    // increment session time
    document.getElementById("sessionPlus").onclick = function addSessionTime(){
        sessionTime += 1;
        sessionLength.innerHTML = sessionTime;
        countdown.innerHTML = sessionTime + ":00"; 
    }
    // decrement session time
    document.getElementById("sessionMinus").onclick = function substractSessionTime(){
        if (sessionTime > 1){
            sessionTime -= 1;
        } else {
            sessionTime = 1;
        }
        sessionLength.innerHTML = sessionTime;
        countdown.innerHTML = sessionTime + ":00"; 
    };
    // increment break time
    document.getElementById("breakPlus").onclick = function addBreakTime(){
        breakTime += 1;
        breakLength.innerHTML = breakTime;
    }  
    // decrement breaktime
    document.getElementById("breakMinus").onclick = function substractBreakTime(){
        if (breakTime > 1){
            breakTime -= 1;
        } else {
            breakTime = 1;
        }
        breakLength.innerHTML = breakTime;
    };

// timer logic
document.getElementById("start").onclick = function startTimer(){
    var s = 0;
    var timeLeft = sessionTime;
    document.getElementById("start").style.visibility = "hidden";
    countDown(timeLeft, s);
}

function countDown(m, s) {
    countInt = setInterval(function(){
        if (m === 0 && s === 0){
            clearInterval(countInt);
            //break
            if (session == 0) {
                document.getElementById("status").innerHTML = "Break";
                timeLeft = breakTime;
                session += 1;
            } else {
                timeLeft = sessionTime;
                session -= 1;
                document.getElementById("status").innerHTML = "Session";
            }
            alarm.play();
            countDown(timeLeft, 0) 
              
        //session logic
        } else if (s != 0) {
            if (s <= 10) {
                s -= 1;
                countdown.innerHTML = m + ":0" + s;
            } else {
                s -= 1;
                countdown.innerHTML = m + ":" + s;
            }
        } else if (s === 0) {
            s = 59;
            m -= 1;
            countdown.innerHTML = m + ":" + s;
        }
    }, 1000);
}
 
// reset button logic
 document.getElementById("reset").onclick = function resetTimer(){
    session = 0; 
    sessionTime = 25;
     sessionLength.innerHTML = sessionTime;
     breakTime = 5;
     breakLength.innerHTML = breakTime;
     countdown.innerHTML = sessionTime + ":00"; 
     document.getElementById("status").innerHTML = "Session";
     document.getElementById("start").style.visibility = "visible";
     clearInterval(countInt);
 }

}, false);