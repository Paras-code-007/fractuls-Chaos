const canvas= document.getElementById("canvas")
const context= canvas.getContext('2d');

//jquery functions also work outside $(function() {}) too 
//$(function() {}) this is used basically to 

let sides= $('#sides')
let distratio= $('#distratio')
let sub= $('#submit')

sub.click(function () {
    context.fillStyle='black';
    context.fillRect(0,0,canvas.width,canvas.height);
    check()
})

let n=3
let distanceratio=0.5
let centerx= Math.random()*canvas.width
let centery= Math.random()*canvas.height
let padding=50
let H= canvas.height
let W= canvas.width
let h= H-padding
let rad= h/2

function playonclick(centerx,centery,rad,color) {
    distanceratio= distratio.val()/100
    n= sides.val()
    if(distanceratio<1&&distanceratio>=0&&n>0){
        return 1
    }
    else{
        if(n<0){
            window.alert("n should be greater than zero")
            return 0
        }else{
            window.alert("try61.8")
            return 0
        }
    }
    draw()    
}

function dot(centerx,centery,rad,color) {
    
    context.beginPath();
    context.fillStyle= color;
    context.arc(centerx, centery, rad, Math.PI / 180 * 0, Math.PI / 180 * 360);
}


function draw(centerx,centery,Rad,color) {
    let target= Math.floor(Math.random()*n)
    for(let i=0;i<n;i++){
        context.fillStyle= color;
        
        
    }
    requestAnimationFrame(draw)
}


window.onload=function () {
    context.fillStyle='black';
    context.fillRect(0,0,canvas.width,canvas.height);
    draw()
}
    
    
