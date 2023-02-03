scorerightwrist=0;
scoreleftwrist=0;
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristy=0;
song="";
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);
}
function draw(){
image(video,0,0,600,500);
fill('#FF0000');
stroke('#FF0000');
circle(rightWristX,rightWristy,20);
if(rightWristy>0 && rightWristy<=100){
    document.getElementById("speed").innerHTML="speed= 0.5x";
    song.rate(0.5);
}
if(rightWristy>100 && rightWristy<=200){
    document.getElementById("speed").innerHTML="speed=1.0x";
    song.rate(1);
}
if(rightWristy>200 && rightWristy<=300){
    document.getElementById("speed").innerHTML="speed=1.5x";
    song.rate(1.5);
}
if(rightWristy>300 && rightWristy<=400){
    document.getElementById("speed").innerHTML="speed=2.0x";
    song.rate(2);
}
 if(rightWristy>400 && rightWristy<=500){
      document.getElementById("speed").innerHTML="speed=2.5x";
       song.rate(2.5);
       }


circle(leftWristX,leftWristY,20);

leftWristnum=Number(leftWristY);
removdesimel=floor(leftWristnum);
volume=removdesimel/500;
document.getElementById("volume").innerHTML="Volume= "+volume;
song.setVolume(volume);
}
function preload(){
song=loadSound("music.mp3");

}
function play(){
song.play();
song.setVolume(1);
song.rate(1);
}
function modelLoaded(){
    console.log("modelLoaded");
}
function gotposes(results){
if(results.length>0){
 console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("leftwristy="+leftWristY);
rightWristX=results[0].pose.rightWrist.x;
rightWristy=results[0].pose.rightWrist.y;
console.log("rightwristy="+rightWristy);
}
}


























































































