 
const clock = document.querySelector(".clock");

let sec = 0,
min = 0,
hr = 0,
intervalId;

function startstopwatch(){
    
    intervalId = setInterval(() => {

        if(sec < 59){
            sec++;
            console.log(sec);
        }
        else if(min >= 59){
            hr++;
            min = 0;
        }
        else{
            sec = 0;
            min++;
        }

        clock.innerText = (`${String(hr).padStart(2,"0")}:${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`);

    }, 1000);
};


function stopwatch(){

    clearInterval(intervalId);
} 