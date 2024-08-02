//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

let body_width = 175;//change
let body_height = 90; //change
let leg_length = 25;
let leg_width = 2; //change
let eye_size = 10; //change
let brown_chicken = true; //change
let chicken_colour;
let x = 125; //change
let y = 125; //change

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 250;
  pWallpaper.grid_settings.cell_height = 250;
  pWallpaper.grid_settings.row_offset  = 90;
}

function wallpaper_background() {
  background(6, 214, 55);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let chicken_colour;
  if(brown_chicken){
    chicken_colour = [139, 69, 19];
  } else { 
    chicken_colour = [255, 255, 255];
  }
  
  //red  hat thing
  stroke(0, 0, 0);
  fill(255, 0, 0);
  arc(x + 50, y - 53, 15 , 38, 180, 360);
  arc(x + 40, y - 53, 15 , 33, 180, 360);
  arc(x + 30, y - 53, 15 , 28, 180, 360);

  fill(chicken_colour); //white
  
  //head
  arc(x + 40, y + 30, 90, 180, 180, 360);  
 
  //body
  ellipse(x, y + 40,  body_width, body_height); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down

  //neck fill
  noStroke();
  arc(x + 40, y + 40, 90, 180, 180, 360);
    
  //eyes
  fill(0, 0, 0);
  circle(x + 40, y - 30, eye_size);

  //red thing under beak
  stroke(0, 0, 0);
  fill(255, 0, 0);
  arc(x + 75, y - 10, 10, 30, 360, 180);
  arc(x + 65, y - 10, 10, 40, 360, 180);

  //beak
  stroke(0, 0, 0); //black
  fill(246, 255, 0); //yellow
  triangle(x + 100, y - 10, x + 60, y, x + 60, y - 20);

  //legs
  stroke(246, 255, 0);//yellow
  //fill(246, 255, 0);
  rect(x-10, y + 75, leg_width, leg_length);
  rect(x-10, y + 100, 10, leg_width);

  rect(x+10, y + 75, leg_width, leg_length);
  rect(x+10, y + 100, 10, leg_width);

  //wings
  noFill();
  strokeWeight(1);
  stroke(0, 0, 0);
  arc(x + 5, y + 30, 110, 25, 90, 260);
  arc(x + 5, y + 50, 60, 15, 90, 260);

  //footprint
  // Left
  strokeWeight(2);
  stroke(246, 255, 0);//yellow
  beginShape();
  vertex(200, 50);
  vertex(207, 10);
  endShape();

  // Right
  beginShape();
  vertex(200, 50);
  vertex(245, 30);
  endShape();

  // Middle
  beginShape();
  vertex(200, 50);
  vertex(230, 10);
  endShape();


  ///footprint 2
  strokeWeight(2);
  stroke(246, 255, 0);//yellow
  beginShape();
  vertex(200, 240);
  vertex(207, 200);
  endShape();

  // Right
  beginShape();
  vertex(200, 240);
  vertex(245, 220);
  endShape();

  // Middle
  beginShape();
  vertex(200, 240);
  vertex(230, 200);
  endShape();

  ///footprint 3
  strokeWeight(2);
  stroke(246, 255, 0);//yellow
  beginShape();
  vertex(50, 90);
  vertex(57, 50);
  endShape();

  // Right
  beginShape();
  vertex(50, 90);
  vertex(95, 70);
  endShape();

  // Middle
  beginShape();
  vertex(50, 90);
  vertex(80, 50);
  endShape();
}