function cardAction(a) {
    let t = "1500ms ";
    let m1 = "cardin ";
    let m2 = "infoin ";
    let card = a.nextElementSibling;
    let lpic = a.nextElementSibling.nextElementSibling;
    let ff = a.parentNode.parentNode;

    card.style.animation = m1 + t + "forwards";
    lpic.style.animation = m2 + t + "forwards";
    for (let i = 0; i < ff.childNodes.length; i++) {
        if (ff.childNodes[i].tagName == "DIV" && ff.childNodes[i] !== a.parentNode) {
            ff.childNodes[i].childNodes[3].style.animation = "elseout 1s forwards";
        }
    }
}

function cardAction2(a) {
    let t = "1500ms ";
    let m1 = "cardout ";
    let m2 = "infoout ";
    let card = a.nextElementSibling;
    let lpic = a.nextElementSibling.nextElementSibling;
    let ff = a.parentNode.parentNode;

    card.style.animation = m1 + t + "forwards";
    lpic.style.animation = m2 + t + "forwards";
    for (let i = 0; i < ff.childNodes.length; i++) {
        if (ff.childNodes[i].tagName == "DIV" && ff.childNodes[i] !== a.parentNode) {
            ff.childNodes[i].childNodes[3].style.animation = "elsein 1s forwards";
        }
    }
}

function start(a) {
    let t = "1800";
    a.firstElementChild.removeAttribute("onmouseenter");
    a.firstElementChild.removeAttribute("onmouseleave");
    a.firstElementChild.nextElementSibling.style.animation = "start " + t + "ms";
    a.lastElementChild.previousElementSibling.style.animation="infoout 1.5s forwards";
    let ff = a.parentNode;
    for (let i = 0; i < ff.childNodes.length; i++) {
        if (ff.childNodes[i].tagName == "DIV" && ff.childNodes[i] !== a) {
            ff.childNodes[i].childNodes[3].style.animation = "elsein 1s forwards";
        }
    }
    setTimeout(reset, t);

    function reset() {
        a.firstElementChild.setAttribute("onmouseenter", "cardAction(this)");
        a.firstElementChild.setAttribute("onmouseleave", "cardAction2(this)");

    }

//            a.lastElementChild.previousElementSibling.style.display = "none";
//            a.lastElementChild.style.animation="ininfo 3s forwards";
}