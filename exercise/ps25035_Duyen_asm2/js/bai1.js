var ptb2 = new Object();
ptb2.a = null;
ptb2.b = null;
ptb2.c = null;
ptb2.x = null;
ptb2.x1 = null;
ptb2.x2 = null;

//input from user
ptb2.input = function(){
    this.a = document.getElementById("a").value;
    this.b = document.getElementById("b").value;
    this.c = document.getElementById("c").value;
    var equation = document.getElementById("btnslove");

    if (this.a && this.b && this.c){
        equation.disabled = false;
    } else {
        equation.disabled = true;
    }
}
//input from computer
ptb2.givenumber = function(){
    this.a = Math.round(Math.random()*10);
    this.b = Math.round(Math.random()*10);
    this.c = Math.round(Math.random()*10);
    document.getElementById("a").value = this.a;
    document.getElementById("b").value = this.b;
    document.getElementById("c").value = this.c;

    // hiện nút giải và giải
    var btn = document.getElementById("btnslove");
    btn.disabled = false;
    btn.className = 'enabled';
}
// hàm giải
ptb2.slove = function(){
    this.a = document.getElementById("a").value;   
    this.b = document.getElementById("b").value;
    this.c = document.getElementById("c").value;
    if (this.a == 0){
        if (this.b == 0){
            if (this.c == 0){
                document.getElementById("answer").innerHTML = "<p>Phương trình vô số nghiệm</p>"
            } else {
                document.getElementById("answer").innerHTML = "<p>Phương trình vô nghiệm</p>"
            }
        } else {
            this.x = -this.c/this.b; 
            document.getElementById("answer").innerHTML = `<p>Phương trình có nghiệm: ${this.x.toFixed(2)}</p>`;
        }
    } else {
        var delta = (Math.pow(this.b,2) - 4*this.a*this.c);
        if (delta < 0){
            document.getElementById("answer").innerHTML = "<p>Phương trình vô nghiệm</p>";
        } else if (delta == 0) {
            document.getElementById("answer").innerHTML = "<p>Phương trình có nghiệm kép: </p>"
                                                           `<p>${x.toFixed(2)}</p>`;
        } else {
            document.getElementById("answer").innerHTML = "<p>Phương trình có 2 nghiệm phân biệt: </p>"
            this.x1 = (-this.b + Math.sqrt(delta))/(2*this.a);
            this.x2 = (-this.b - Math.sqrt(delta))/(2*this.a);
            document.getElementById("answer").innerHTML = `<p>${this.x1.toFixed(2)}</p>
                                                           <p>${this.x2.toFixed(2)}</p>`                                                   
        }
    }
    // vô hiệu hóa lại nút giải khi đã giải xong
    var btn = document.getElementById("btnslove");
    btn.disabled = true;
    btn.className = 'disabled';
}
//hàm đếm

ptb2.clock = function(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var str = `Bây giờ là: ${day}/${month}/${year} ${hour}:${minute}:${second}`;
    document.getElementById('clock').innerHTML = str;
}
var num_of_times = 0;
ptb2.count = function(){
    num_of_times++;
    document.getElementById("num_of_times").innerHTML = num_of_times;
}
setInterval("ptb2.clock()", 1000);// chạy liên tục sau 1s