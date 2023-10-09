
function outputsound(k){
    var x=k;
    switch(x){
        case "w":var mysound=new Audio("sounds/crash.mp3");
                mysound.play();
                break;
        case "a":var mysound=new Audio("sounds/kick-bass.mp3");
                mysound.play();
                break;
        case "s":var mysound=new Audio("sounds/snare.mp3");
                mysound.play();
                break;
        case "d":var mysound=new Audio("sounds/tom-1.mp3");
                mysound.play();
                break;
        case "j":var mysound=new Audio("sounds/tom-2.mp3");
                mysound.play();
                break;
        case "k":var mysound=new Audio("sounds/tom-3.mp3");
                mysound.play();
                break;        
        case "l":var mysound=new Audio("sounds/tom-4.mp3");
                mysound.play();
                break;       
    }
}
function Animationonbutton(ck){
    var o=document.querySelector("."+ck);
    o.classList.add("new");
    setTimeout(function(){
        o.classList.remove("new");
    },10000);
}
document.addEventListener("keypress",function(x)
    {
    outputsound(x.key);
    Animationonbutton(x.key);
});

for(var i=0;i<document.getElementsByClassName("drum").length;i++){
    document.getElementsByClassName("drum")[i].addEventListener("click",function(){
        y=this.innerHTML;
        outputsound(y);
        Animationonbutton(y);
    });
}
