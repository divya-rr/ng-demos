
const display=document.getElementById("clock")
const audio = new Audio('mixkit-scanning-sci-fi-alarm-905.wav')
alarmTime=null;
alarmTimeout=null
function updateTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hours = date.getHours()
    display.innerText = `${hours}:${minutes}:${seconds}`
    

}
setInterval(updateTime,1000)
function setAlarmTime(value){
    alarmTime=value

}
function setAlarm(){
    console.log(alarmTime)
    if(alarmTime){
        const current = new Date();
        const timeToAlarm = new Date(alarmTime)
        if(timeToAlarm>current){
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(()=> audio.play(),timeout)
            alert('Alarm Set')
        }
    }

}
function clearAlarm(){
    audio.pause();
    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        alert("Alarm Cleared")
    }

}