function preload() {
    
}
  
function setup() {
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();
}
  
function draw() {
    image(video,34,56,530,370);
    let r = color(0,0,255);
    let c = color(255,0,0);
    fill(r);
    rect(56, 25, 500, 45);

    fill(r);
    rect(32, 25, 50, 420);

    fill(r);
    rect(32, 408, 560, 45);

    fill(r);
    rect(565, 408, 50, -380);

    fill(c);
    ellipse(56, 46, 90, 90);

    fill(c);
    ellipse(587, 46, 90, 90);

    fill(c);
    ellipse(56, 428, 90, 90);

    fill(c);
    ellipse(587, 428, 90, 90);
    
}

function take_snapshot(){
    save('student_name.png');
}
