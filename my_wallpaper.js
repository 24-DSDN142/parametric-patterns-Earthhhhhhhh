//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
var x = 125;
var y = 125;
//var h = ;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 250;
  pWallpaper.grid_settings.cell_height = 250;
  pWallpaper.grid_settings.row_offset  = 90;
}

function wallpaper_background() {
  background(92, 255, 250); //light honeydew green colour
  rect(0, 200, 100, 100);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //red  hat thing
  stroke(0, 0, 0);
  fill(255, 0, 0);
  arc(x + 50, y - 53, 15 , 38, 180, 360);
  arc(x + 40, y - 53, 15 , 33, 180, 360);
  arc(x + 30, y - 53, 15 , 28, 180, 360);

  fill(255, 255, 255); //white
  //head
  arc(x + 40, y + 30, 90, 180, 180, 360);  
 
  //body
  ellipse(x, y + 40, 180, 70); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down

  //neck fill
  noStroke();
  arc(x + 40, y + 40, 90, 180, 180, 360);
    
  //eyes
  fill(0, 0, 0);
  circle(x + 40, y - 30, 15);

  //red thing under beak
  stroke(0, 0, 0);
  fill(255, 0, 0);
  arc(x + 75, y - 10, 10, 30, 360, 180);
  arc(x + 65, y - 10, 10, 40, 360, 180);

  //beak
  stroke(0, 0, 0); //black
  fill(246, 255, 0); //yellow
  triangle(x + 105, y - 20, x + 60, y, x + 60, y - 30);

  //legs - change into rect, add stroke
  stroke(246, 255, 0);//yellow
  //fill(246, 255, 0);
  rect(x, y + 75, 0.5, 25);
  rect(x, y + 100, 10, 0.5);

  //wings
  noFill();
  strokeWeight(1);
  stroke(0, 0, 0);
  arc(x + 5, y + 30, 110, 25, 90, 260);
  arc(x + 5, y + 50, 60, 15, 90, 260);

  //////
}
