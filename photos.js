var img = undefined,
    item = undefined,
    p = undefined,
    items = document.querySelector('.itmes'),
    images = [
        "images/img1.png",
        "images/img2.png",
        "images/img3.png",
        "images/img5.png",
        "images/img6.png",
        "images/img7.png",
        "images/img8.png",
        "images/img11.png",
        "images/img12.png",
        "images/img13.png",
        "images/img14.png",
        "images/img15.png",
        "images/img16.png"
    ];
    imgesNames=[
        "Marsel Van Oosten",
        "Suzanne Southon",
        "Tim Laman",
        "Edwin Giesbers Photograpy",
        "Emil Ivanov Photograpy",
        "Dave Richarde Photograpy",
        "Mathias Appel",
        "Roy Beekkam",
        "Sandra Price",
        "Lewis Gillingham",
        "Frans Lanting",
        "Andrea Zampatti",
        "Rosamund Macfariane"
    ];

var modal = document.querySelector('#myModal');
var close = document.querySelector(".close");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var modalImg = document.querySelector(".Mymodal-content img");
var modalContentContainer = document.querySelector(".row.full-height");

function loadImage(i){
    item = document.createElement('div');
    item.className = "item col-12 col-sm-6 col-md-4 col-lg-3";

    img = document.createElement('img');
    img.dataset['index'] = i;
    img.dataset['name'] = imgesNames[i];
    img.className = 'image';
    
    p = document.createElement('p');
    p.textContent = imgesNames[i];

    item.appendChild(img);
    item.appendChild(p);
    items.appendChild(item);

    if(i < images.length - 1){
        img.addEventListener('load', function(){
            var event = new CustomEvent('imageLoded', {
                detail: i+1
            })
            document.dispatchEvent(event);
        })
    }
    img.src = images[i];
    item.addEventListener('click', function(){
        var currentImg = this.querySelector('img');
        var idx = currentImg.dataset.index;
        modalImg.dataset['index'] = idx;
        modalImg.src = currentImg.src;
        modal.style.display = 'block';
    })
}

// document.addEventListener('imageLoded', function(e){
//     loadImage(e.detail);
// });

// loadImage(0);

    
modalImg.onclick = function (e) {
    var idx = +modalImg.dataset['index'];
    idx = (idx + 1) % images.length;
    modalImg.src = images[idx];
    modalImg.dataset['index'] = idx;
};
    
close.onclick = function () {
    modal.style.display = "none";
};

next.onclick = function () {
    var idx = +modalImg.dataset['index'];
    idx = (idx + 1) % images.length;
    modalImg.src = images[idx];
    modalImg.dataset['index'] = idx;
};

prev.onclick = function () {
    var idx = +modalImg.dataset['index'];
    if (idx === 0) {
        idx = (images.length - 1);
    } else {
        idx = (idx - 1) % (images.length);
    }
    modalImg.src = images[idx];
    modalImg.dataset['index'] = idx;
};

window.onclick = function (event) {
    if (event.target === modalContentContainer) {
        modal.style.display = "none";
    }
}

document.addEventListener('imageLoded', function (e) {
    loadImage(e.detail);
});

loadImage(0);
