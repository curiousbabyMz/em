window.onload=turnaround();





function turnaround() {
    let num=document.getElementsByTagName("li").length;
    let li=document.getElementsByTagName("li");
    console.log(num);
    for (let i=0;i<li.length;i++){
        li[i].style.transform="rotateY("+(360/num)+"deg)";
    }
}