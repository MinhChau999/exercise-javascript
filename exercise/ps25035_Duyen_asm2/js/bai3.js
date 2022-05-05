function changePrice() {
    var arrPrice = document.getElementsByName("price");
    var obj = document.getElementById("levelPrice");
    choosePrice = obj.value;  // lưu value vào biến choosePrice

    for (i = 0; i < arrPrice.length; i++) {
        price = parseFloat(arrPrice[i].innerText);
        if (price < choosePrice || choosePrice == -1) { // khi chấm chọn mức giá thì nó hiện all
            arrPrice[i].parentNode.style.display = ""; // cho nó hiện ra
        } else {
            arrPrice[i].parentNode.style.display = "none"; // cho nó ẩn đi
            // parentNode của arrPrice (td) là tr nên nó ẩn luông 1 hàng
        }
    }
    sum();
}
function chooseCheckbox(i) {
    var arrAmount = document.getElementsByName("amount");
    arrAmount[i].disabled = !arrAmount[i].disabled;

    if (arrAmount[i].disabled == true) { // bị khóa lại
        arrAmount[i].value = 0;  // cho giá trị nó bằng 0
        arrAmount[i].parentNode.nextElementSibling.innerText = ""; // cho thành tiền rỗng
    }
    sum();
}
function payment(obj) {
    var amount = obj.value;
    var price = obj.parentNode.previousElementSibling.innerText; // ra ngoài cha là td r lấy td ở trước nó
    obj.parentNode.nextElementSibling.innerText = amount * price;  // ra ngoài cha là td r lấy td ở sau nó
    sum();
}
function sum() {
    totalMoney = 0;
    var arrSum = document.getElementsByName("total");
    for (i = 0; i < arrSum.length; i++) {
        if (arrSum[i].parentNode.style.display == "") {
            money = arrSum[i].innerText;
            totalMoney += Number(money);
        }
    }
    document.getElementById("sum").innerText = totalMoney;
}