// Made with Zdog

let isSpinning = true;
var TAU = Zdog.TAU;

Zfont.init(Zdog);

let illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  rotate: {
    x: -0.32,
    y: 0.64,
    z: 0.1
    // x: -TAU / 4
  },
  translate: {
    y: 0
  },
  zoom: 1,
  resize: "fullscreen",
  onResize: function (width, height) {
    this.zoom = Math.max(width, height) / 500;
  }
});

// Set up a font to use
var myFont = new Zdog.Font({
  src: "https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf"
});

var vaseGroup = new Zdog.Group({
  addTo: illo,
});

let vaseTop = new Zdog.Cylinder({
  addTo: vaseGroup,
  diameter: 40,
  length: 40,
  stroke: false,
  color: '#EB4E27',
  backface: '#EB4E27',
  rotate: {
    x: -TAU / 4
  },
  translate: {
    y: 0
  }
});

let vaseBottom = new Zdog.Cylinder({
  addTo: vaseGroup,
  diameter: 60,
  length: 100,
  stroke: false,
  color: '#EB4E27',
  backface: '#EB4E27',
  rotate: {
    x: -TAU / 4
  },
  translate: {
    y: 60
  }
});

var flowerGroup = new Zdog.Group({
  addTo: illo,
})

let flowerStem = new Zdog.Shape({
  addTo: flowerGroup,
  path: [{
      x: 0,
      y: -21
    }, // start
    {
      bezier: [{
          x: 0,
          y: -40
        }, // start control point
        {
          x: -30,
          y: -80
        }, // end control point
        {
          x: -30,
          y: -100
        }, // end point
      ]
    },
  ],
  closed: false,
  stroke: 5,
  color: '#53AE48'
})

let flowerLeaf = new Zdog.Shape({
  addTo: flowerGroup,
  path: [{
      x: 0,
      y: -21
    }, // start
    {
      bezier: [{
          x: 0,
          y: -40
        }, // start control point
        {
          x: 10,
          y: 0
        }, // end control point
        {
          x: 20,
          y: 0
        }, // end point
      ]
    },
  ],
  closed: false,
  stroke: 5,
  color: '#53AE48',
  translate: {
    y: -40
  },
  rotate: {
    x: TAU / 2
  }
});

var flowerPetalStuff = new Zdog.Group({
  addTo: flowerGroup,
})

let flowerMiddle = new Zdog.Hemisphere({
  addTo: flowerPetalStuff,
  diameter: 40,
  // fill enabled by default
  // disable stroke for crisp edge
  stroke: false,
  color: '#F3F86B',
  backface: '#FBEB52',
  rotate: {
    x: TAU / 4
  },
  translate: {
    x: -30,
    y: -100
  }
})

let flowerPetal = new Zdog.Hemisphere({
  addTo: flowerMiddle,
  diameter: 20,
  stroke: false,
  color: '#F3F86B',
  backface: '#FBEB52',
  translate: {
    x: -30,
  }
})

flowerPetal.copy({
  translate: {
    x: 30
  },
});

flowerPetal.copy({
  translate: {
    x: 0,
    y: 30
  }
})

flowerPetal.copy({
  translate: {
    x: 0,
    y: -30
  }
})

// Create a text object
// This is just a Zdog.Shape object with a couple of extra parameters!
var yayText = new Zdog.Text({
  addTo: illo,
  font: myFont,
  value: "YAY",
  fontSize: 55,
  stroke: 2,
  color: "#ededed",
  fill: true,
  textAlign: "center",
  textBaseline: "middle",
  translate: {
    x: -120,
    y: 40,
  }
});

var linText = new Zdog.Text({
  addTo: illo,
  font: myFont,
  value: "LIN",
  fontSize: 55,
  stroke: 2,
  color: "#ededed",
  fill: true,
  textAlign: "center",
  textBaseline: "middle",
  translate: {
    x: 120,
    y: 40,
  }
});

function animate() {
  illo.rotate.y += isSpinning ? 0.02 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

// animate()

// Zdog.waitForFonts() returns a Promise which is resolved once all the fonts added to the scene so far have been loaded
Zdog.waitForFonts().then(function () {
  // Once the fonts are done, start the animation loop
  animate();
})