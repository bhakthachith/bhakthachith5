canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color = "";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousemove(e)
{
     mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;
     color =document.getElementById("colour").value;
    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);}
    function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
