// ex1 
/*
Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 : 30 : 38 PM
Write a JavaScript program to get the current date.
*/
function getDay(){
    var day = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = days[day.getDay()];
    var dd = day.getDate();
    var mm = day.getMonth() + 1;
    var yyyy = day.getFullYear();
    dd = (dd < 10) ? "0" + dd : dd;
    mm = (mm < 10) ? "0" + mm : mm;
    var strToday = `Today is : ${d}, ${dd}/${mm}/${yyyy}`;
    document.getElementById("today").innerHTML = strToday;
    console.log(strToday);
}
function getCurruentTime(){
    var day = new Date();

    // current time
    var hours = day.getHours();
    var minutes = day.getMinutes();
    var seconds = day.getSeconds();
    var session = "";
    
    if (hours < 12) {
        session = "AM";
    } else {
        hours = hours - 12;
        session = "PM";
    }
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    var strTime = "Current time is : " + hours  + " : " + minutes + " : " + seconds + " " + session;
    document.getElementById("time").innerHTML = strTime;
    setTimeout(function(){
        getCurruentTime();
    }, 1000);
}
getDay();
getCurruentTime();
