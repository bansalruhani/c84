canvas=document.getElementById('mycanvas');
ctx=canvas.getcontext("2d");
car1_width=120;
car1_height=70;
car1_image="car1.png"
car_x =10;
car_y =10;
car2_width=120;
car2_height=70;
car2_image="car2.png"
car2_x =10;
car2_y =100;
function add(){
    background_imgtag=new Image();
    background_imgtag.onload= uploadbackground;
    background_imgtag.src=background_image;

    car1_imgtag=new Image();
    car1_imgtag.onload= uploadcar;
    car1_imgtag.src=car1_image;
}
 
function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)
}
function uploadcar1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1width,car1height)
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38')
    {
       car1_up();
        console.log("up arrow key");
    }
    if(keypressed==('40')
    {
        car1_down();
        console.log("down arrow key");
    }
    
    if(keypressed=='37')
    {
       car1_left();
        console.log("left arrow key");
    }
    if(keypressed=='39')
    {
       car1_right();
        console.log("right arrow key");
    }
    if(keypressed=='87')
    {
       car1_up();
        console.log("key w");
}