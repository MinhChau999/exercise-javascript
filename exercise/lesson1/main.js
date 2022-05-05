var fullName = "Nguyễn Minh Châu";
// Khai báo tuổi
var age = 20;

// Gọi hàm thông báo
// alert(fullName);
// alert(age);

// this is a comment
/*  
this is a comment
this is a coment too
 */

// 1. console
console.log(fullName);
console.log(age);
// 2. confirm
// var isConfirm = confirm("Bạn có muốn thay đổi thông tin không?");
// 3. prompt
// var name = prompt("Nhập tên của bạn");
console.log(name);
// 4. alert
// alert("Xin chào " + name);
// 5. document.write + setTimeout
setTimeout(function(){ document.write("Xin chào " + name); }, 3000);
// 6. setInterval
// setInterval(function(){ console.log('Đây là log ' + Math.random); }, 1000);


// Bài 21: Toán tử so sánh
var a = 1;
var b = 2;

if(a == b){
    console.log("a và b bằng nhau");
} else if (a > b){
    console.log("a lớn hơn b");
} else {
    console.log("a nhỏ hơn b");
}

var isSuccess = true;
console.log(isSuccess);

// Bài: Câu lệnh điều kiện if
fullName = "";
if (fullName){
    console.log("Thành công");
} else {
    console.log("Thất bại");
}

// Bài: Toán tử logic
var a = 1;
var b = 2;
var c = 3;
if (a > b && b == c){
    console.log("Đúng");
} else {
    console.log("Sai");
}

// Bài: Kiểu dữ liệu
/* 
Kiểu dữ liệu nguyên thủy
    1. String
    2. Number
    3. Boolean
    4. Undefined
    5. Null
    6. symbol
Kiểu dữ liệu phức tạp
    7. Array
    8. Function
    9. Object
    ....
*/

// Number type
var a = 1;

// String type
var b = "2";

// Boolean type
var c = true;

// Undefined type
var d;

// Null type
var e = null;

// Symbol type
var f = Symbol();

//  Array type
var g = [1, 2, 3];

// Function type
var h = function(){
    console.log("Hello");
}

// Object type
var i = {
    name: "Nguyễn Minh Châu",
    tuổi: 20
}

// Bài: Toán tử so sánh 2
/*
* ===
* !==
*/

var a = 1;
var b = "1";
console.log(a === b);
console.log(a == b);

// Bài: Toán tử logic và câu điều kiện if
// Bài: function

function showDialog(){
    alert("Hello");
}
function sum(a, b){
    return a + b;
}

function writeLog(){
    var myString = '';
    for (var param of arguments){
        myString += `${param} - `;
    }
    console.log(myString);
}
writeLog(1, 2, 3, 4, 5);

// Bài: Làm việc với chuỗi
var myString = "Hello";
// JavaScript string methods
// 1. length
console.log(myString.length);
// 2. Find index
console.log(myString.indexOf("l"));
// 3. Cut string
console.log(myString.slice(0, 2));
// 4. Replace string
console.log(myString.replace(/Hello/g, "Hi"));
// 5. Split string
console.log(myString.split(""));
// 6. Trim string
console.log(myString.trim());
// 7. Convert to upper case
console.log(myString.toUpperCase());
// 8. Convert to lower case
console.log(myString.toLowerCase());
// 9. Get a character by index
console.log(myString.charAt(0));


// Bài: Kiểu số trong JavaScript
var age = 20;
var PI = 3.14;
var result = age/ 'ABC';
console.log(isNaN(result));
console.log(age);
console.log(age.toString());

// Bài: Làm việc với array
var languages = ["JavaScript", "PHP", "Python"];
// 1. toString
console.log(languages.toString());
// 2. pop (Xóa phần tử cuối cùng va trả về phần tử đó)
// console.log(languages.pop());
// 3. push (Thêm phần tử vào cuối mảng)
console.log(languages.push("C#", "C++"));
// 4. shift (Xóa phần tử đầu tiên và trả về phần tử đó)
// console.log(languages.shift());
// 5. unshift (Thêm phần tử vào đầu mảng)
console.log(languages.unshift("Java"));
// 6. splice (Thêm vào và xóa phần tử)
console.log(languages.splice(1, 0, "Rust"));
console.log(languages);
// 7. concat (Nối 2 mảng)
var languages2 = ["Ruby", "Go"];
console.log(languages.concat(languages2));
// 8. slice (Cắt mảng)
console.log(languages.slice(1, 3));

// Đối tượng Date
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() +1;
var day = date.getDate();
console.log(date);
console.log(date.getFullYear());
console.log(`${day}/${month}/${year}`);

// Math object
/*  
* 1. Math.PI
* 2. Math.round()
* 3. Math.ceil()
* 4. Math.floor()
* 5. Math.abs()
* 6. Math.pow()
* 7. Math.sqrt()
* 8. Math.random()
* 9. Math.max()
* 10. Math.min()
 */

var random = Math.floor(Math.random() * 10);
console.log(random);

// Rẽ nhánh if else
var date = 2;
if (date == 1){
    console.log("Chủ nhật");
} else if (date == 2){
    console.log("Thứ hai");
} else if (date == 3){
    console.log("Thứ ba");
}

// Rẽ nhánh switch case
var date = 3;
switch (date){
    case 1:
        console.log("Chủ nhật");
        break;
    case 2:
        console.log("Thứ hai");
        break;
    case 3:
        console.log("Thứ ba");
        break;
    default:
        console.log("Không có ngày này");
        break;
}

// Toán tử 3 ngôi - ternary operator

var course = {
    name: "JavaScript",
    coin: 100,
}
var result = course.coin > 0 ? `${course.coin} coins` : "Miễn phí";

console.log(result);

// loop- vòng lặp
// for
for (var i = 0; i < 10; i++){
    console.log(i);
}
var myArray = [
    "JavaScript",
    "PHP",
    "Python",
    "Ruby",
    "Go",
]
for (var i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

// vòng lặp for in
var myInfo = {
    name: "Nguyễn Minh Châu",
    age: 20,
    address: "Hà Nội",
}
for (var key in myInfo){
    console.log(key);
    console.log(myInfo[key]);
}
var languages = ["JavaScript", "PHP", "Python"];
for (var key in languages){
    console.log(key);
    console.log(languages[key]);
}

// Vòng lặp for of
for (var value of languages){
    console.log(value);
}

// Vòng lặp while
var i = 0;
while (i < 10){
    console.log(i);
    i++;
}
// do while
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

// break
for (var i = 0; i < 10; i++){
    if (i == 5){
        break;
    }
    console.log(i);
}
// vòng lặp lồng nhau
var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
for (var i = 0; i < myArray.length; i++){
    for (var j = 0; j < myArray[i].length; j++){
        console.log(myArray[i][j]);
    }
}

// Đệ quy
function factorial(n){
    if (n == 1){
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(6));

// Làm việc với mảng
/*
Array methods:
forEach()
every()
some()
find()
filter()
map()
reduce()
*/

var courses = [
    {
        id: 1,
        name: "JavaScript",
        coin: 100,
    },
    {
        id: 2,
        name: "PHP",
        coin: 200,
    },
    {
        id: 3,
        name: "Python",
        coin: 300,
    },
];
// Duyệt qua từng phần tử của mảng
courses.forEach(function(course, index){
    console.log(index, course);
})

var isFree = courses.every(function(course, index){
    console.log(index, course);
    return course.coin > 0;
})
console.log(isFree);

courses.some(function(course, index){
    console.log(index, course);
    return course.coin === 0;
})

courses.find(function(course, index){
    console.log(index, course);
    return course.coin === 0;
})

courses.filter(function(course, index){
    console.log(index, course);
    return course.coin === 0;
})

var newCourses = courses.map();

