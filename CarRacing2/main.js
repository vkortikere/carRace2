canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

car1_image = "redCar.png";
car1_x = 10;
car1_y = 10;
car1_width=100;
car1_height=90;

car2_image = "blueCar.png";
car2_x = 10;
car2_y = 100;
car2_width=100;
car2_height=90;

background_image ="raceTrack.jpg";

function add(){
background_img_tag = new Image();
background_img_tag.onload=uploadBackgroundImage;
background_img_tag.src= background_image;

car1_img_tag = new Image();
car1_img_tag.onload=uploadCar1;
car1_img_tag.src= car1_image;

car2_img_tag = new Image();
car2_img_tag.onload=uploadCar2;
car2_img_tag.src= car2_image;


}

function uploadBackgroundImage(){
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height);

}
function uploadCar1(){
    ctx.drawImage(car1_img_tag, car1_x, car1_y, car1_width, car1_height);
}
function uploadCar2(){
    ctx.drawImage(car2_img_tag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);


function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38'){
    car1_up();
    console.log("up pressed");
}
if(keyPressed == '40'){
    car1_down();
    console.log("down pressed");
}
if(keyPressed == '37'){
    car1_left();
    console.log("left pressed");
}
if(keyPressed == '39'){
    car1_right();
    console.log("right pressed");
}
if(keyPressed == '87'){
    car2_up();
    console.log("key W pressed");
}
if(keyPressed == '83'){
    car2_down();
    console.log("key S pressed");
}
if(keyPressed == '65'){
    car2_left();
    console.log("key A pressed");
}
if(keyPressed == '68'){
    car2_right();
    console.log("key D pressed");
}

//calling functions//

function car1_up(){
    if(car1_y >= 0){
        car1_y = car1_y - 10;
    console.log("when up arrow is pressed, x=" + car1_x + " y =" + car1_y);
    uploadBackgroundImage();
    uploadCar1();
    uploadCar2();
    }
}
function car1_down(){
    if(car1_y < 500){
    car1_y = car1_y + 10;
    console.log("when up down is pressed, x="+ car1_x + " y =" + car1_y);
    uploadBackgroundImage();
    uploadCar1();
    uploadCar2();
    }
}
function car1_left(){
    if(car1_x >= 0){
        car1_x = car1_x - 10;
    console.log("when up arrow is pressed, x="+ car1_x + " y =" + car1_y);
    uploadBackgroundImage();
    uploadCar1();
    uploadCar2();
    }
}
function car1_right(){
    if(car1_x <= 700 ){
        car1_x = car1_x + 10;
    console.log("when up arrow is pressed, x=" + car1_x + " y =" + car1_y);
    uploadBackgroundImage();
    uploadCar2();
    uploadCar1();
    }
}

    function car2_up(){
        if(car2_y >= 0){
            car2_y = car2_y - 10;
        console.log("when up arrow is pressed, x=" + car2_x + " y =" + car2_y);
        uploadBackgroundImage();
        uploadCar1();
        uploadCar2();
        }
    }
    function car2_down(){
        if(car2_y < 500){
        car2_y = car2_y + 10;
        console.log("when up down is pressed, x=" + car2_x + " y =" + car2_y);
        uploadBackgroundImage();
        uploadCar1();
        uploadCar2();
        }
    }
    function car2_left(){
        if(car2_x >= 0){
            car2_x = car2_x - 10;
        console.log("when up arrow is pressed, x=" + car2_x + " y =" + car2_y);
        uploadBackgroundImage();
        uploadCar1();
        uploadCar2();
        }
    }
    function car2_right(){
        if(car2_x <= 700 ){
            car2_x = car2_x + 10;
        console.log("when up arrow is pressed, x=" + car2_x + " y =" + car2_y);
        uploadBackgroundImage();
        uploadCar1();
        uploadCar2();
        
        }
    }


//check statements
 if(car1_x > 700){
     console.log("car1 Won");
     document.getElementById('game_status').innerHTML = "CAR1 WON!!";
 }
 if(car2_x > 700){
    console.log("car2 Won");
    document.getElementById('game_status').innerHTML = "CAR2 WON!!";
}
}





  
      

