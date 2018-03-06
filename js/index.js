var PuertoRico = {
  x: 398,
  y: 26,
  sizeX: 12,
  sizeY: 12,
  threshhold: 100
};
var Colombia = {
  x: 180,
  y: 210,
  sizeX: 20,
  sizeY: 20,
  threshhold: 100
}
var Cuba = {
  x: 260,
  y: 35,
  sizeX: 20,
  sizeY: 20,
  threshhold: 100
}
var Panama = {
  x: 167,
  y: 165,
  sizeX: 20,
  sizeY: 20,
  threshhold: 100
}
var Jamaica = {
  x: 260,
  y: 70,
  sizeX: 10,
  sizeY: 10,
  threshhold: 100
}

var Brasil= {
  x:403,
  y:275,
  sizeX:20,
  sizeY:20,
  threshhold:100
}

var DominicanRepublic={
  x:390,
  y:119,
  sizeX:15,
  sizeY:15,
  threshhold:100
}

var Uruguay={
  x:265,
  y:442,
  sizeX:20,
  sizeY:20,
  threshhold:100
}

var Haiti= {
  x:450,
  y:150,
  sizeX:12,
  sizeY:12,
  threshhold:100
}

let countries = [Uruguay, Colombia, PuertoRico, Jamaica, Brasil, Haiti, DominicanRepublic, Cuba];


//array of sounds
let sounds = [];

let soundsPaths = [
  'https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/Uruguay1.wav',
  'https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/Colombia1.wav',
  'https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/PuertoRico1.wav',
  'https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/Jamaica1.wav',
  'https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/Brasil1.wav',
  'https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/Haiti1.wav',
  'https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/DominicanRepublic1.wav',
  'https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/Cuba1.wav'];

let distanceThreshold = 20;

function preload() {

  //load all the files
  for (var i = 0 ; i < soundsPaths.length; i++) {
    sounds.push(loadSound(soundsPaths[i]));
  }

  // mySound1 = loadSound('https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/Uruguay1.wav');
  // mySound2 = loadSound('https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/Colombia1.wav');
  // mySound3 = loadSound('https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/PuertoRico1.wav');
  // mySound4 = loadSound('https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/Jamaica1.wav');
  // mySound5 = loadSound('https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/Brasil1.wav');
  // // mySound6 = loadSound('https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/Panama.m`p3');
  // mySound7 = loadSound('https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/Haiti1.wav');
  // mySound8 = loadSound('https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/DominicanRepublic1.wav');
  // mySound10= loadSound('https://raw.githubusercontent.com/MarcoITP18/Latin-America-Map/master/www/music/Cuba1.wav')
}

 function setup() {

  console.log("canvas created");
  createCanvas (480,800);

  //make them all be muted and looping
  for (var i = 0 ; i < soundsPaths.length; i++) {
    sounds[i].loop();
    sounds[i].setVolume(0.0);
  }
}

function draw() {

  background(2, 122, 222);
  fill(3, 222, 00);
  noStroke();

  drawTriangles();

  fill(222, 33, 22);

  drawEllipses();

}

function mousePressed() {

    for (var i = 0; i < countries.length; i++) {
      if (int(dist(mouseX, mouseY, countries[i].x, countries[i].y)) < distanceThreshold) {
        if (sounds[i].getVolume() == 0.0) {
          sounds[i].setVolume(1.0);
        } else {
          sounds[i].setVolume(0.0);
        }
    }
  }
}


function drawTriangles() {
  triangle(170, 175, 420, 270, 170, 575); //continent
  triangle(150, 180, 190, 170, 160, 140); //panama
  triangle(120, 150, 200, 135, 140, 80); //costa rica
  triangle(200, 70, 110, 5, 80, 90); //mexico
  triangle(230, 40, 265, 20, 400, 75); //cuba
  triangle(250, 75, 260, 65, 340, 80); //jamaica
  triangle(400, 35, 410, 20, 380, 20); //PR
  triangle(380, 100, 380, 130, 490, 170); //DR/Haiti
}

function drawEllipses() {
  ellipse(Uruguay.x,Uruguay.y,Uruguay.sizeX,Uruguay.sizeY); //montevideo
  ellipse(Brasil.x,Brasil.y,Brasil.sizeX,Brasil.sizeY); //rio
  ellipse(Colombia.x, Colombia.y, Colombia.sizeX, Colombia.sizeY); //colombia
  // ellipse(Panama.x, Panama.y, Panama.sizeX, Panama.sizeY); //panama
  ellipse(Cuba.x, Cuba.y, Cuba.sizeX, Cuba.sizeY); //habana
  ellipse(Jamaica.x, Jamaica.y, Jamaica.sizeX, Jamaica.sizeY); //kingston
  ellipse(PuertoRico.x, PuertoRico.y, PuertoRico.sizeX, PuertoRico.sizeY); //san juan
  ellipse(DominicanRepublic.x, DominicanRepublic.y,DominicanRepublic.sizeX,DominicanRepublic.sizeY); //santo domingo
  ellipse(Haiti.x,Haiti.y,Haiti.sizeX,Haiti.sizeY); // port-au-prince
}
