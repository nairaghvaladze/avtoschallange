document.body.style.backgroundColor="LightSeaGreen";
const canvas = document.getElementById("mycanvas");
const a = canvas.getContext("2d");

a.font = "26px Arial";
a.color="white";
a.fillStyle = 'white';
a.fillText("Avto's Challange",50,50);

let div = document.querySelector('#cursor')
document.querySelector('canvas').onmousemove = function(event){
   
    div.style.left = event.clientX-5+'px'
    div.style.top = event.clientY-5+'px'
};