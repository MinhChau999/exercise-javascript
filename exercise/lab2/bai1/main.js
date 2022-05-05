function tinhTuoi(namSinh) {
    var namHienTai = new Date().getFullYear();
    var tuoi = namHienTai - namSinh;
    return tuoi;
}

var fullName = prompt("Bạn tên gì?");
do{
    var yearOfBirth = prompt("Bạn sinh năm nào?");
}while(isNaN(yearOfBirth) || yearOfBirth > 2020);
var age = tinhTuoi(yearOfBirth);
document.getElementById("name").innerHTML = fullName;
document.getElementById("yearOfBirth").innerHTML = yearOfBirth;
document.getElementById("age").innerHTML = age;
