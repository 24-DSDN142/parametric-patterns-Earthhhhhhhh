//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
var x = 90;
var y = 90;
//var w = ;
//var h = ;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 240;
  pWallpaper.grid_settings.cell_height = 160;
  pWallpaper.grid_settings.row_offset  = 90;
}

function wallpaper_background() {
  background(92, 255, 250); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  noStroke();
  fill(255, 255, 255); //white
  //head
  arc(x + 40, y + 30, 90, 180, 180, 360);
  
  //body
    ellipse(x, y + 40, 180, 70); // draws a circle 45 pixels accross at location 100 pixels accross and 100 pixels down
  

  //beak
  stroke(0, 0, 0); //black
  fill(246, 255, 0); //yellow
  triangle(x + 105, y - 20, x + 60, y, x + 60, y - 30);
  //triangle(195, 70, 150, 90, 150, 60);
    
  //eyes
  fill(0, 0, 0);
  circle(x + 40, y - 30, 15);

  //legs
  strokeWeight(4);
  stroke(246, 255, 0);//yellow
  line(x, y + 75, x, y + 100);
  line(x, y + 100, x + 15, y + 100);

  //wings
  noFill();
  strokeWeight(1);
  stroke(0, 0, 0);
  arc(x + 5, y + 30, 110, 25, 90, 260);
  arc(x + 5, y + 50, 60, 15, 90, 260);

}
