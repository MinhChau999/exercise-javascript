// Callback
/*
Là hàm (function) được truyền qua đối số khi gọi hàm khác

*/

function myFunction(param){
    if (typeof param === "function"){
        param();
    }
}

function myCallback(){
    console.log("Hello");
}
myFunction(myCallback);

// Bài 82
