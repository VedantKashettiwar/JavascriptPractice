var sec=0;
var min=0;
var count=0;
var timer = false;
var executed =false;
function start(){
    timer=true;
    stopwatch()
}
function run(start){
    if(executed==false){
        executed = true;
        start();
    }
}
function stop(){
    executed = false;
    timer=false;
}
function reset(){
    timer=false;
    sec=0;
    min=0;
    executed = false;
    document.getElementById('min').innerHTML='00'
    document.getElementById('sec').innerHTML='00'
}
function stopwatch(){
    if(timer==true){
        sec=parseInt(sec)
        sec=sec+1;
        if(sec<10){
            sec='0'+sec
            if(min<1){
                min='00'
            }
        }
        if(sec==60){
            min=parseInt(min)
            min=min+1
            if(min<10){
                min='0'+min
            }
            sec=0;
        }
        document.getElementById('min').innerHTML=min
        document.getElementById('sec').innerHTML=sec
        setTimeout('stopwatch()',1000);
    }
}