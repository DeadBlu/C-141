rightWrist = 0;
leftWrist = 0;
scoreRightWrist = 0;

function setup()
{
    canvas = createCanvas(700,600);
    canvas.parent('canvas');

    video = createCapture(VIDEO);
    video.size(700,600);
    video.hide;

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on ('pose', gotPoses);
}

function modelLoaded()
{
    console.log('poseNet Is Initilized');
}

function gotPoses()
{
    rightWrist = results[0].pose.rightWrist.x;
    rightWrist = results[0].pose.rightWrist.y;
    scoreRightWrist = results[0].pose.keypoints[10].score;
    console.log(scoreRightWrist);
}

function draw()
{
    if(scoreRightWrist > 0.2)
    {
        fill("red");
        stroke("red")
        circle(rightWristX, rightWristY, 30);
    }
}
