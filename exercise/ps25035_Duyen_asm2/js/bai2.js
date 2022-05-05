const myslider = document.querySelectorAll(".myslider"),
dot = document.querySelectorAll(".dot"); 
let count = 1; 

sliders(count);

function sliders(n) { 
    if (n > myslider.length) {
        count = 1;
    }
    if (n < 1) {
        count = myslider.length;
    }
    for (let i = 0; i < myslider.length; i++) {
        myslider[i].style.display = "none";
    }
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove("active");
    }
    myslider[count - 1].style.display = "block";
    dot[count - 1].classList.add("active");
}
let timer = setInterval(function () {
    count++;
    sliders(count);
    
}, 7000);

function move(n){
    count += n;
    sliders(count);
    resetTimer();
}

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(function () {
        count++;
        sliders(count);
    }, 7000);
}

function moveslide(n){
    count = n;
    sliders(count);
    resetTimer();
}
