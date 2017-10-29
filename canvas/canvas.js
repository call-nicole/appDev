 function drawWord() {
    var y = document.forms["wordForm"]["word"].value;
    var canvas = document.getElementById("wordCanvas");
     var ctx = canvas.getContext("2d");
     ctx.textAlign = "center";
     ctx.font = "60px 'Lucida Sans Unicode', 'Lucida Grande', sans-serif";
     ctx.fillStyle = "#ffa14f"
     ctx.fillText(y, 200, 120);
        
 }

var p = document.createElement("p");
var node = document.createTextNode("This Element was added through DOM Manipulation");
p.appendChild(node);
var change = document.createAttribute("main");
var element = document.getElementById("main");
element.appendChild(p);


var para = document.createElement("h5");
var node = document.createTextNode("This is a Talk by Jean B. Bingham. She bears testimony, 'Christ is the source of all healing, peace and eternal progress'");
para.appendChild(node);

var element = document.getElementById("audios");
var child = document.getElementById("audioplay");
element.insertBefore(para,child);



function removeCanvas(){
    var parent = document.getElementById("cnvs");
    var c_nested = document.getElementById("wordCanvas");
    var clear = parent.removeChild(c_nested);
}
function insertCanvas(){
    var c = document.createElement("canvas");

    var i = document.getElementById("cnvs");
    i.appendChild(c);
    
   // var y = document.forms["wordForm"]["word"].value;
    document.getElementsByTagName("canvas").id = "wordCanvas"; 
    c.width = "400";
    c.height = "200";
   c.style.border = "1px solid black";
//    c.textAlign = "center";
//    c.font = "60px 'Lucida Sans Unicode', 'Lucida Grande', sans-serif";
//    c.fillStyle = "#ffa14f"
//    c.fillText(y, 200, 120); 
//   
}
