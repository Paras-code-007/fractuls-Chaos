const canvas= document.getElementById("canvas")
const context= canvas.getContext('2d');

//jquery functions also work outside $(function() {}) too 
//$(function() {}) this is used basically to 


let sides= $('#sides')
let distratio= $('#distratio')
let sub= $('#submit')


let n=3
let distanceratio=0.5
let centerx= (Math.random()*canvas.width)
let centery= (Math.random()*canvas.height)
let padding=50
let H= canvas.height
let W= canvas.width
let h= H-padding
let rad= h/2
let origin=[W/2,H/2]
let points=[]


function playonclick() {
    
    distanceratio= distratio.val()/100
    n= sides.val()
    if(!(distanceratio<1&&distanceratio>=0&&n>=3)){
        if(n<3){
            alert("n should be greater than zero")
            document.getElementById("sides").innerHTML=3
            n=3
            return
        }else{
            alert("try61.8")
            document.getElementById("distratio").innerHTML=61.8
            distanceratio=61.8
        }   
    }

    context.fillStyle='black';
    context.fillRect(0,0,canvas.width,canvas.height);
    draw()    
}


function dot(Xcenter,Ycenter,rad,color) {
    context.beginPath();
    context.fillStyle= color;
    context.arc(Xcenter, Ycenter, rad, Math.PI / 180 * 0, Math.PI / 180 * 360);
    context.fill();
}


function draw() {
    let theta= Math.PI*2/n
    let target= Math.floor(Math.random()*n)
    for(let i=0;i<n;i++){
        let currenttheta= theta*i - Math.PI/2
        points[i]=[origin[0]+ rad * Math.cos(currenttheta), origin[1]+ rad * Math.sin(currenttheta)]
        dot(points[i][0],points[i][1],10,target==i?'red':'cyan')
    }
    
    centerx= points[target][0]*distanceratio + centerx*(1- distanceratio)
    centery= points[target][1]*distanceratio + centery*(1- distanceratio)
    
    dot(centerx,centery,1,'cyan')
    
    requestAnimationFrame(draw)
    //setTimeout(draw,1000/4)
}

sub.click(playonclick)

window.onload=function () {
    context.fillStyle='black';
    context.fillRect(0,0,canvas.width,canvas.height);
    draw()
}
    
