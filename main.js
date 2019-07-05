const btnStart = document.querySelector('.start');
const btnPause = document.querySelector('.pause');
const btnReset = document.querySelector('.reset');
const time     = document.querySelector('.time')
let mSec  = 0;
let sec   = 0;
let min   = 0;
let hour  = 0;

let mSecVal = `0${mSec}`;
let secVal  = `0${sec}`;
let minVal  = `0${min}`;
let hourVal = `0${hour}`;

let timer;
let timeVal

btnStart.addEventListener('click', ()=>{
    mSecVal  = `000`;
    secVal   = `00`;
    minVal   = `00`;
    hourVal  = `00`;
    timeVal = `${hourVal}:${minVal}:${secVal}.${mSecVal}`
    time.innerHTML = timeVal
    timer = setInterval(()=>{
        
        mSec++ 
        if (mSec == 100){
            sec++
            mSec = 0
        }
        if (sec == 60){
            min++
            sec = 0
        }
        if (min == 60){
            hour++
            min = 0
        }
        if (mSec < 10) {
            mSecVal = `00${mSec}`;
        }
        else if(mSec > 10 && mSec < 100){
            mSecVal = `0${mSec}`
        }
        else {
            mSecVal = mSec
        }
        if (sec < 10) {
            secVal  = `0${sec}`
        }
        else{
            secVal = sec
        }
        if (min < 10) {
            minVal =  `0${min}`
        }
        else{
            minVal = min
        }
        if (hour < 10) {
            hourVal  = `0${hour}`
        }
        else{
            hourVal = hour
        }
        timeVal = `${hourVal}:${minVal}:${secVal}.${mSecVal}`
        time.innerHTML = timeVal
    },10)
})
btnPause.addEventListener('click', () =>{
    timer = clearInterval(timer)
})
btnReset.addEventListener('click', reset)
function reset() { 
    timer = clearInterval(timer)
    mSecVal  = `000`;
    secVal   = `00`;
    minVal   = `00`;
    hourVal  = `00`;
    timeVal = `${hourVal}:${minVal}:${secVal}.${mSecVal}`
    time.innerHTML = timeVal
 }