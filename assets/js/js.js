var imgarr = [];
const slidercontainer = document.getElementById('slideJs');
var slide = document.createElement('div');
var imgSlide = document.createElement('img');
var imgInfodiv = document.createElement('div');
var imgInfoh2 = document.createElement('h2');
var divNext = document.createElement('div');
var divPrev = document.createElement('div');
changeimg('A', 2, 'assets/img/slide1');



function changeimg(symbol, imgNo, folderPass) {

    imgarr = [];

    var sliders = document.getElementsByClassName('slide');
    for (var j = 0; j < sliders.length;) {
        sliders[j].remove();
    }

    for (var i = 1; i <= imgNo; i++) {
        var valueofimg = symbol + " (" + i + ").jpg";
        imgarr.push(valueofimg)
    }
    //***************************************************************to Add arrow before  */
    // divPrev.classList.add('prev');
    // divPrev.setAttribute('id', 'prevBtn');
    // divPrev.innerHTML = '<i class="fas fa-angle-left fa-2x"></i>';
    // slidercontainer.appendChild(divPrev);
    for (var k = 0; k < imgarr.length; k++) {
        imginfolder = folderPass + "/" + imgarr[k]; //assets/img/slide1/A (1).jpg
        slide = document.createElement('div'); //create div
        imgSlide = document.createElement('img'); //create img 
        imgInfodiv = document.createElement('div'); ///create div
        imgInfoh2 = document.createElement('h2'); // create h2
        // imgInfoh2.innerText = 'hello'; //add text to h2




        slide.classList.add('slide'); //add class to div slide
        imgInfodiv.classList.add('info'); //add class to div ifno
        imgInfodiv.appendChild(imgInfoh2); //put h2 as chlid to info
        slide.appendChild(imgSlide); //put img to div slide
        slide.appendChild(imgInfodiv); //put info to div slide
        slidercontainer.appendChild(slide); //put slide to div slidjs

        imgSlide.src = imginfolder;
        //***************************************************to add Activeslider
        if (k == 0) {
            slide.classList.add('ActiveSlider');
        }
        //*****************************************************to create nav buttons

        var allnavigators = document.getElementById('navBtn');

        allnavigators.remove();
        navigators = document.createElement('div');
        navigators.classList.add('navigation');
        navigators.setAttribute('id', 'navBtn');

        for (var z = 0; z < imgarr.length; z++) {
            btnsNav = document.createElement('div');
            btnsNav.classList.add('btnnavigation');
            if (z == 0) {
                btnsNav.classList.add('ActiveSlider');
            }
            navigators.appendChild(btnsNav);
            slidercontainer.appendChild(navigators);
        }

    }
    //***************************************************************to Add arrow After  */
    // divNext.classList.add('next');
    // divNext.setAttribute('id', 'nextBtn');
    // divNext.innerHTML = '<i class="fas fa-angle-right fa-2x"></i>';
    // slidercontainer.appendChild(divNext);
}