// Hàm thay thế nội dung trong thẻ html
function replaceContent(id, content) {
    document.getElementById(id).innerHTML = content;
}

var n = new Date();
var gio = n.getHours();
if(gio < 12){
    document.getElementById('chao').innerHTML = "chào buổi sáng";
}else {
    replaceContent('chao', 'chào buổi chiều');
}

a = document.getElementsByTagName('main')[0].innerHTML
console.log(a);