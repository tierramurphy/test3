/**
 * Created by tierra_murphy on 11/22/16.
 */
var imgObj;
var animate = null;
function init(){
    imgObj = document.getElementById('myImage');
    imgObj.style.position= 'relative';
    imgObj.style.left = '0px';
}

moveImg = function(){
    if(animate != null){
        stop();
    } else {
        moveRight();

    }
    change();
}

function moveRight(){
    if (imgObj.style.left != window.innerWidth + 'px')
    {
        imgObj.style.left = (parseInt(imgObj.style.left) + 5) + 'px';

    }
    else
    {
        imgObj.style.left = '0px';
    }
    animate = setTimeout(moveRight,30);
}

change = function(){
        var element = document.getElementById("startButton");
        if (element.value=="Stop"){
            element.value = "Start";
            document.getElementById("h2").innerHTML = "Press the Button to Start The Dalek!";
        }
        else
        {
            element.value = "Stop";
            document.getElementById("h2").innerHTML = "Press the Button to Stop The Dalek!";
        };}

stop = function(){
    clearTimeout(animate);
    animate = null;
}
window.onload = init();