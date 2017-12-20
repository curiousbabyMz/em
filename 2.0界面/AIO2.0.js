// function cardAction(a) {     //鼠标移入
//     let t = "1500ms ";
//     let m1 = "cardin ";
//     let m2 = "infoin ";
//     let card = a.nextElementSibling;
//     let lpic = a.nextElementSibling.nextElementSibling;
//     let ff = a.parentNode.parentNode;
//
//     card.style.animation = m1 + t + "forwards";
//     lpic.style.animation = m2 + t + "forwards";
//     for (let i = 0; i < ff.childNodes.length; i++) {
//         if (ff.childNodes[i].tagName == "DIV" && ff.childNodes[i] !== a.parentNode) {
//             ff.childNodes[i].childNodes[3].style.animation = "elseout 1s forwards";
//         }
//     }
// }
//
// function cardAction2(a) {    //鼠标移出
//     let t = "1500ms ";
//     let m1 = "cardout ";
//     let m2 = "infoout ";
//     let card = a.nextElementSibling;
//     let lpic = a.nextElementSibling.nextElementSibling;
//     let ff = a.parentNode.parentNode;
//
//     card.style.animation = m1 + t + "forwards";
//     lpic.style.animation = m2 + t + "forwards";
//     for (let i = 0; i < ff.childNodes.length; i++) {
//         if (ff.childNodes[i].tagName == "DIV" && ff.childNodes[i] !== a.parentNode) {
//             ff.childNodes[i].childNodes[3].style.animation = "elsein 1s forwards";
//         }
//     }
// }

function start(a) {    //单项打开
    let t = "2000";
    let ff = a.parentNode;
    // a.firstElementChild.removeAttribute("onmouseenter");
    // a.firstElementChild.removeAttribute("onmouseleave");
    a.firstElementChild.nextElementSibling.style.animation = "clickcard " + t + "ms forwards";
    a.lastElementChild.previousElementSibling.style.animation = "infoin " + t + "ms " + t / 2 + "ms forwards";
    for (let i = 0; i < ff.childNodes.length; i++) {
        if (ff.childNodes[i].tagName == "DIV" && ff.childNodes[i] !== a) {
            ff.childNodes[i].childNodes[3].style.animation = "elseout 1s forwards";
        }
    }
    document.getElementsByClassName("arrowl")[0].style.animation = "elseout 1s forwards";
    document.getElementsByClassName("arrowr")[0].style.animation = "elseout 1s forwards";
    // let ff = a.parentNode;
    // for (let i = 0; i < ff.childNodes.length; i++) {
    //     if (ff.childNodes[i].tagName == "DIV" && ff.childNodes[i] !== a) {
    //         ff.childNodes[i].childNodes[3].style.animation = "elsein 1s forwards";
    //     }
    // }
    // setTimeout(function reset() {
    //     a.firstElementChild.setAttribute("onmouseenter", "cardAction(this)");
    //     a.firstElementChild.setAttribute("onmouseleave", "cardAction2(this)");
    //
    // }, t);

}

function Back() {
    let allpage = document.getElementsByClassName("items");
    let lpic=document.getElementsByClassName("Lpic");
    for (let i = 0; i < allpage.length; i++) {
        if (allpage[i].style.display != "none") {
            for (let j = 0; j < allpage[i].childNodes.length; j++) {
                if (allpage[i].childNodes[j].tagName == "DIV" && allpage[i].childNodes[j] !== allpage[i]) {
                    allpage[i].childNodes[j].childNodes[3].style.animation = "elsein 1s forwards";
                }
            }
            document.getElementsByClassName("arrowl")[0].style.animation = "elsein 1s forwards";
            document.getElementsByClassName("arrowr")[0].style.animation = "elsein 1s forwards";
        }
    }
    for (let i=0;i<lpic.length;i++){
            lpic[i].style.animation="infoout 1s forwards";
    }
}


function nextpage() {    //下翻页
    let allpage = document.getElementsByClassName("items");
    let t = 2000;
    for (let i = 0; i < allpage.length; i++) {
        // var b= false;
        let a = 0;
        if (allpage[i].style.display != "none") {
            adjust("remove");

            if (allpage[i + 1] == undefined) {
                alert("已经是最后一页了");
                adjust("set");
                return;
            }
            allpage[i].style.animation = "npageout " + t + "ms";
            setTimeout(function () {
                allpage[i].style.display = "none";
                allpage[i + 1].style.display = "";
                allpage[i + 1].style.animation = "npagein " + t + "ms";
                // b = true;
            }, t);
            // console.log(allpage[i]);
            a++;
            setTimeout(function () {
                adjust("set");
            }, t * 2);
        }

        if (a == 1) {

            return;
        }

    }

}

function previouspage() {    //上翻页
    let allpage = document.getElementsByClassName("items");
    let t = 2000;
    for (let i = 0; i < allpage.length; i++) {
        let a = 0;
        if (allpage[i].style.display != "none") {
            adjust("remove");
            if (allpage[i - 1] == undefined) {
                alert("已经是第一页了");
                adjust("set");
                return;
            }
            allpage[i].style.animation = "ppageout " + t + "ms";
            setTimeout(function () {
                allpage[i].style.display = "none";
                allpage[i - 1].style.display = "";
                allpage[i - 1].style.animation = "ppagein " + t + "ms";
            }, t);
            // console.log(allpage[i]);
            a++;

            setTimeout(function () {
                adjust("set");
            }, t * 2);
        }
        if (a == 1) {

            return;
        }
    }
}

let adjust;
adjust = function adjustAction(a) {
    let action = document.getElementsByClassName("action");

    function setAction() {
        for (let i = 0; i < action.length; i++) {
            action[i].setAttribute("onmouseenter", "cardAction(this)");
            action[i].setAttribute("onmouseleave", "cardAction2(this)");
        }
        // alert("done");
    }

    function removeAction() {
        for (let i = 0; i < action.length; i++) {
            action[i].removeAttribute("onmouseenter");
            action[i].removeAttribute("onmouseleave");
        }
        // alert("done");
    }

    switch (a) {
        case "remove" :
            // alert("done1");
            return removeAction();
        case "set":
            // alert("done2");
            return setAction();
    }
};