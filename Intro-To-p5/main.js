function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 400);
    canvas.position(110,300);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw()
{
    image(video, 0, 0 ,640, 400);
    tint(tint_color); 
}

function take_snapshot()
{
    save("shourya.png");
}

function color_change()
{
    tint_color = document.getElementById("color_name").value;
}