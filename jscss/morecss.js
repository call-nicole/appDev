//function transition(){
//                document.getElementById("transition").style.display = "block"
//               
//                var t = document.getElementsByClassName("transition");
//                for(i = 0; i < t.length; i++){
//                    t[i].style.color = 'purple';
//                }
//            }


function transition(){
    var clr = "red"
    document.getElementById("name").innerHTML = "hello world";
    var elem = document.getElementById("name");
    elem.style.transition = "color 1.0s linear 0s";
    elem.style.color = clr;
}
function change(el, clr) {
    document.getElementById("test").innerHTML = "hello world";
    var elem = document.getElementById(el);
    elem.style.transition = "background 1.0s linear 0s";
    elem.style.background = clr;
    
}
function grow(){
    var but = document.getElementById("but");
    but.style.webkitTransition = "width 1s";
    but.style.width = "300px";
}
//function shake(){
//    elem.style.animation = "shake 0.82s";
//}

function change2() {
    var clr = "red"
    document.getElementById("test2").innerHTML = "hello world";
    var elem = document.getElementById("test2");
    var box = document.getElementById("box2");
    elem.style.transition = "color 1.0s linear 0s";
    elem.style.color = clr;
    box.style.transition = "background 1.0s linear 0s";
    box.style.background = clr;
}