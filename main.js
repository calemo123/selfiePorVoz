function preload()
{}
function setup()
{
canvas = createCanvas(620, 480);
canvas.position(550, 250);
video = createCapture(VIDEO);
video.hide();
}

function draw()
{
 image(video, 150, 110,300, 250)
 fill("blue");
 rect(30, 20, 520, 55);
 rect(520, 20, 55, 400);
 rect(25, 20, 55, 400);
 rect(30, 400, 520, 55);
 fill("red");
 circle(50, 50, 80);
 circle(550, 50, 80);
 circle(550, 425, 80);
 circle(50, 425, 80);
}
function tirarFoto()
{
save('sua_foto_legal.png');
}