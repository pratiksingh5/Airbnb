var centerpart = document.querySelector("#centerpart");
var row1 = document.querySelector("#row1");
var row2 = document.querySelector(".row2");
var nav = document.querySelector("#nav");
var logo = document.querySelector("#logo svg");
var right = document.querySelector("#right");


function handleScreenResizing() {
    centerpart.style.width = "30%";
    row1.style.transform = "scale(.2)";
    row1.style.opacity = "0";
    right.style.color = "#333";
    flipHide('flip1');
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        if(screen.width > 900){
            handleScreenResizing();
            centerpart.setAttribute('style', 'width: 30%; top: -30% !important');
        }
        else if (screen.width > 600) {
            handleScreenResizing();
            centerpart.setAttribute('style', 'width: 30%; top: -60% !important');
        }
        else if (screen.width > 450) {
            handleScreenResizing();
            centerpart.setAttribute('style', 'width: 30%; top: -30% !important');
        }
        nav.style.backgroundColor = "#fff";
        logo.setAttribute('fill', '#ff385c');
    }
    else {
        if (screen.width > 650) {
            centerpart.style.width = "60%";
            centerpart.style.top = "30px";
            row1.style.transform = "scale(1)";
            row1.style.opacity = "1";
            right.style.color = "#fff";
            flipHide('flip2');
        }
        nav.style.backgroundColor = "transparent";
        logo.setAttribute('fill', '#fff');
    }
}

function flipHide(prfrm) {
    if (prfrm === "flip1") {
        document.querySelectorAll('.elem').forEach(function (elem) {
            elem.style.display = "none";
            document.querySelector('.hem').style.display = "initial";
        })
    }
    else if (prfrm === "flip2") {
        document.querySelectorAll('.elem').forEach(function (elem) {
            elem.style.display = "initial";
            document.querySelector('.hem').style.display = "none";
        })
    }
}