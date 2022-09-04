song=""

function preload(){
song=loadSound("music.mp3")
}

function setup(){
canvas=createCanvas(600,400)
canvas.center()
video=createCapture(VIDEO)
video.hide()
classifier=ml5.poseNet(video,modelloaded)
classifier.on("pose",gotposes)
}

function modelloaded() {
    console.log("model is loaded")
}

function gotposes(results) {
    if (results.length>0) {
        console.log (results)
        leftWristX= results[0].pose.leftWrist.x
        rightWristX= results[0].pose.rightWrist.x
        scorerightWrist=results[0].pose.keypoints[10].score
        scoreleftWrist=results[0].pose.keypoints[9].score
    }
}

function draw(){
    image(video,0,0,600,400)
}

function play1(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}