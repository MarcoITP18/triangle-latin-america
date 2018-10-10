var Colombia2 = {
    x: 186,
    y: 234,
    sizeX: 20,
    sizeY: 20,
    threshhold: 100
}
var Colombia1 = {
    x: 186,
    y: 201,
    sizeX: 20,
    sizeY: 20,
    threshhold: 100
}
var Colombia3 = {
    x: 212,
    y: 212,
    sizeX: 20,
    sizeY: 20,
    threshhold: 100
}
var Colombia5 = {
    x: 215,
    y: 245,
    sizeX: 20,
    sizeY: 20,
    threshhold: 100
}
var Colombia4 = {
    x: 240,
    y: 220,
    sizeX: 20,
    sizeY: 20,
    threshhold: 100
}

var Brasil1 = {
    x: 393,
    y: 275,
    sizeX: 20,
    sizeY: 20,
    threshhold: 100
}

var Brasil2 = {
    x: 370,
    y: 295,
    sizeX: 20,
    sizeY: 20,
    threshhold: 100
}
var Brasil3 = {
    x: 370,
    y: 268,
    sizeX: 20,
    sizeY: 20,
    threshhold: 100
}

var Brasil4 = {
    x: 346,
    y: 258,
    sizeX: 20,
    sizeY: 20,
    threshhold: 100
}

var Brasil5 = {
    x: 346,
    y: 288,
    sizeX: 20,
    sizeY: 20,
    threshhold: 100
}

var Brasil6 = {
    x: 346,
    y: 318,
    sizeX: 20,
    sizeY: 20,
    threshhold: 100
}

var Uruguay1 = {
    x: 246,
    y: 460,
    sizeX: 20,
    sizeY: 20,
    threshhold: 100
}

var Uruguay2 = {
    x: 262,
    y: 438,
    sizeX: 20,
    sizeY: 20,
    threshhold: 100
}

var Uruguay3 = {
    x: 280,
    y: 416,
    sizeX: 20,
    sizeY: 20,
    threshhold: 100
}

var Uruguay4 = {
    x: 248,
    y: 412,
    sizeX: 20,
    sizeY: 20,
    threshhold: 100
}

var Uruguay5 = {
    x: 232,
    y: 436,
    sizeX: 20,
    sizeY: 20,
    threshhold: 100
}

let countries = [
    Colombia1,
    Colombia2,
    Colombia3,
    Colombia4,
    Colombia5,
    Brasil1,
    Brasil2,
    Brasil3,
    Brasil4,
    Brasil5,
    Brasil6,
    Uruguay1,
    Uruguay2,
    Uruguay3,
    Uruguay4,
    Uruguay5
]

//array of sounds
var sounds = []
var soundsActivity = []

/**** for production ****/
let soundsPaths = [
    'https://dodiku.github.io/triangle-latin-america/music/newLoops/MARACA_1_CUMBIA.wav',
    'https://dodiku.github.io/triangle-latin-america/music/newLoops/MARACA_2_CUMBIA.wav',
    'https://dodiku.github.io/triangle-latin-america/music/newLoops/LLAMADOR.wav',
    'https://dodiku.github.io/triangle-latin-america/music/newLoops/TAMBORA.wav',
    'https://dodiku.github.io/triangle-latin-america/music/newLoops/ALEGRE_2.wav',

    'https://dodiku.github.io/triangle-latin-america/music/newLoops/TAMBORIM.wav',
    'https://dodiku.github.io/triangle-latin-america/music/newLoops/CHOCALLO.wav',
    'https://dodiku.github.io/triangle-latin-america/music/newLoops/SAMBA_SNARE.wav',
    'https://dodiku.github.io/triangle-latin-america/music/newLoops/SURDO_HI.wav',
    'https://dodiku.github.io/triangle-latin-america/music/newLoops/SURDO_LO.wav',
    'https://dodiku.github.io/triangle-latin-america/music/newLoops/AGOGO.wav',

    'https://dodiku.github.io/triangle-latin-america/music/newLoops/REPIQUE.wav',
    'https://dodiku.github.io/triangle-latin-america/music/newLoops/CHICO_1.wav',
    'https://dodiku.github.io/triangle-latin-america/music/newLoops/CHICO_2.wav',
    'https://dodiku.github.io/triangle-latin-america/music/newLoops/CLAVE.wav',
    'https://dodiku.github.io/triangle-latin-america/music/newLoops/PIANO.wav'
]

/**** for local development ****/
// let soundsPaths = [
//     'music/newLoops/MARACA_1_CUMBIA.wav', // Colombia1
//     'music/newLoops/MARACA_2_CUMBIA.wav', // Colombia2
//     'music/newLoops/LLAMADOR.wav', // Colombia3
//     'music/newLoops/TAMBORA.wav', // Colombia4
//     'music/newLoops/ALEGRE_2.wav', // Colombia5

//     'music/newLoops/TAMBORIM.wav', // Brasil1
//     'music/newLoops/CHOCALLO.wav', // Brasil2
//     'music/newLoops/SAMBA_SNARE.wav', // Brasil3
//     'music/newLoops/SURDO_HI.wav', // Brasil4
//     'music/newLoops/SURDO_LO.wav', // Brasil5
//     'music/newLoops/AGOGO.wav', // Brasil6

//     'music/newLoops/REPIQUE.wav', // Uruguay1
//     'music/newLoops/CHICO_1.wav', // Uruguay2
//     'music/newLoops/CHICO_2.wav', // Uruguay3
//     'music/newLoops/CLAVE.wav', // Uruguay4
//     'music/newLoops/PIANO.wav' // Uruguay5
// ]

let distanceThreshold = 20

function preload() {
    // load all the files
    for (var i = 0; i < soundsPaths.length; i++) {
        sounds.push(loadSound(soundsPaths[i]))
        sounds[i].setVolume(0.0)
        soundsActivity.push(false)
    }

    allAudiosPart = new p5.Part()
    allAudiosPart.setBPM(BPM)

    for (var i = 0; i < 16; i++) {
        allAudiosPart.addPhrase(
            new p5.Phrase(i, playAudioNew, [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ])
        )
    }

    allAudiosPart.loop()
}

function setup() {
    console.log('canvas created')
    createCanvas(480, 800)

    for (var i = 0; i < soundsPaths.length; i++) {
        playAudio(i)
    }
}

function draw() {
    background('#007AB6')
    fill('#48BF7B')
    noStroke()

    drawTriangles()

    drawEllipses()

    fill(255, 255, 255)
    drawNumbers()
}

function mousePressed() {
    for (var i = 0; i < countries.length; i++) {
        if (
            int(dist(mouseX, mouseY, countries[i].x, countries[i].y)) <
            distanceThreshold
        ) {
            if (sounds[i].getVolume() == 0.0) {
                sounds[i].setVolume(1.0)

                allAudiosPart.getPhrase(i).sequence = [
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
                soundsActivity[i] = true

                console.log('playing', sounds[i].url)
            } else {
                sounds[i].setVolume(0.0)

                allAudiosPart.getPhrase(i).sequence = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
                soundsActivity[i] = false
                console.log('stopping', sounds[i].url)
            }
        }
    }
}

function playAudio(i) {
    sounds[i].loop()
    sounds[i].setVolume(0.0)
    console.log('loaded', i)
}

var BPM = 20.8
console.log(BPM)

function playAudioNew(time, playbackRate) {
    // sounds[this.name].stop()
    // sounds[this.name].play()
    // console.log('playing', this.name)
}

function drawTriangles() {
    triangle(170, 175, 420, 270, 170, 575) //continent
    triangle(150, 180, 190, 170, 160, 140) //Colombia5
    triangle(120, 150, 200, 135, 140, 80) //costa rica
    triangle(200, 70, 110, 5, 80, 90) //mexico
    triangle(230, 40, 265, 20, 400, 75) //Colombia3
    triangle(250, 75, 260, 65, 340, 80) //Colombia4
    triangle(400, 35, 410, 20, 380, 20) //PR
    triangle(380, 100, 380, 130, 490, 170) //DR/Brasil4
}

function drawEllipses() {
    soundsActivity[0] ? fill(24, 40, 37, 255) : fill(24, 40, 37, 120)
    ellipse(Colombia1.x, Colombia1.y, Colombia1.sizeX, Colombia1.sizeY)

    soundsActivity[1] ? fill(24, 40, 37, 255) : fill(24, 40, 37, 120)
    ellipse(Colombia2.x, Colombia2.y, Colombia2.sizeX, Colombia2.sizeY)

    soundsActivity[2] ? fill(24, 40, 37, 255) : fill(24, 40, 37, 120)
    ellipse(Colombia3.x, Colombia3.y, Colombia3.sizeX, Colombia3.sizeY)

    soundsActivity[3] ? fill(24, 40, 37, 255) : fill(24, 40, 37, 120)
    ellipse(Colombia4.x, Colombia4.y, Colombia4.sizeX, Colombia4.sizeY)

    soundsActivity[4] ? fill(24, 40, 37, 255) : fill(24, 40, 37, 120)
    ellipse(Colombia5.x, Colombia5.y, Colombia5.sizeX, Colombia5.sizeY)

    soundsActivity[5] ? fill(214, 68, 27, 255) : fill(214, 68, 27, 120)
    ellipse(Brasil1.x, Brasil1.y, Brasil1.sizeX, Brasil1.sizeY)

    soundsActivity[6] ? fill(214, 68, 27, 255) : fill(214, 68, 27, 120)
    ellipse(Brasil2.x, Brasil2.y, Brasil2.sizeX, Brasil2.sizeY)

    soundsActivity[7] ? fill(214, 68, 27, 255) : fill(214, 68, 27, 120)
    ellipse(Brasil3.x, Brasil3.y, Brasil3.sizeX, Brasil3.sizeY)

    soundsActivity[8] ? fill(214, 68, 27, 255) : fill(214, 68, 27, 120)
    ellipse(Brasil4.x, Brasil4.y, Brasil4.sizeX, Brasil4.sizeY)

    soundsActivity[9] ? fill(214, 68, 27, 255) : fill(214, 68, 27, 120)
    ellipse(Brasil5.x, Brasil5.y, Brasil5.sizeX, Brasil5.sizeY)

    soundsActivity[10] ? fill(214, 68, 27, 255) : fill(214, 68, 27, 120)
    ellipse(Brasil6.x, Brasil6.y, Brasil6.sizeX, Brasil6.sizeY)

    soundsActivity[11] ? fill(131, 120, 27, 255) : fill(131, 120, 27, 120)
    ellipse(Uruguay1.x, Uruguay1.y, Uruguay1.sizeX, Uruguay1.sizeY)

    soundsActivity[12] ? fill(131, 120, 27, 255) : fill(131, 120, 27, 120)
    ellipse(Uruguay2.x, Uruguay2.y, Uruguay2.sizeX, Uruguay2.sizeY)

    soundsActivity[13] ? fill(131, 120, 27, 255) : fill(131, 120, 27, 120)
    ellipse(Uruguay3.x, Uruguay3.y, Uruguay3.sizeX, Uruguay3.sizeY)

    soundsActivity[14] ? fill(131, 120, 27, 255) : fill(131, 120, 27, 120)
    ellipse(Uruguay4.x, Uruguay4.y, Uruguay4.sizeX, Uruguay4.sizeY)

    soundsActivity[15] ? fill(131, 120, 27, 255) : fill(131, 120, 27, 120)
    ellipse(Uruguay5.x, Uruguay5.y, Uruguay5.sizeX, Uruguay5.sizeY)
}

function drawNumbers() {
    textSize(16)
    text('1', Colombia1.x - 4, Colombia1.y + 4)
    text('2', Colombia2.x - 4, Colombia2.y + 4)
    text('3', Colombia3.x - 4, Colombia3.y + 4)
    text('4', Colombia4.x - 4, Colombia4.y + 4)
    text('5', Colombia5.x - 4, Colombia5.y + 4)
    text('1', Brasil1.x - 4, Brasil1.y + 4)
    text('2', Brasil2.x - 4, Brasil2.y + 4)
    text('3', Brasil3.x - 4, Brasil3.y + 4)
    text('4', Brasil4.x - 4, Brasil4.y + 4)
    text('5', Brasil5.x - 4, Brasil5.y + 4)
    text('6', Brasil6.x - 4, Brasil6.y + 4)
    text('1', Uruguay1.x - 4, Uruguay1.y + 4)
    text('2', Uruguay2.x - 4, Uruguay2.y + 4)
    text('3', Uruguay3.x - 4, Uruguay3.y + 4)
    text('4', Uruguay4.x - 4, Uruguay4.y + 4)
    text('5', Uruguay5.x - 4, Uruguay5.y + 4)
}
