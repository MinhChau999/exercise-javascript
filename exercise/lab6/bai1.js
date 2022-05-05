// code js upload image to server
var image = [];
var index = 0;
var image_number = 5;
for (var i = 0; i < image_number; i++) {
    image[i] = new Image();
    image[i].src = "images/" + i + ".jpg";
}

// function next()
function next() {
    if (index < image_number - 1) {
        index++;
    } else {
        index = 0;
    }
    document.getElementById("image").src = image[index].src;
}

function first() {
    index = 0;
    document.getElementById("image").src = image[index].src;
}

function last() {
    index = image_number - 1;
    document.getElementById("image").src = image[index].src;
}

function prev() {
    if (index > 0) {
        index--;
    } else {
        index = image_number - 1;
    }
    document.getElementById("image").src = image[index].src;
}