lipsX =0;
lipsY =0;

function preload(){
clown_lips = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);

    poseNet.on('pose',gotPoses);
}

function gotPoses(results) 
{
    if(results.length > 0) {
        console.log(results);
        

        NoseX = results[0].pose.lips.x  - 60;
        NoseY = results[0].pose.lips.y - 60;

        console.log(lipsX);
        console.log(lipsY);
    }
    
}



function modelLoaded() {
    console.log('PoseNet Is Intialized');
}

function draw() 
{
image(video,0,0,300,300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(lipsX,lipsY,20);
image(clown_lips,lipsX,lipsY,30,30);
}

function take_snapshot()
{
    save('Image.png');
}