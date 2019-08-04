// Made with Zdog

Zfont.init(Zdog);

let isSpinning = true;

let illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  rotate: { x: -0.32, y: 0.64, z: 0 },
  zoom: 2,
  resize: "fullscreen",
  onResize: function(width, height) {
    var minSize = Math.min(width, height);
    this.zoom = minSize / 400;
  }
});

// Set up a font to use
var myFont = new Zdog.Font({
  src: "https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf"
});

// circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  translate: { z: 40 },
  stroke: 20,
  color: "#32FF48"
});

// square
new Zdog.Rect({
  addTo: illo,
  width: 80,
  height: 80,
  translate: { z: -40 },
  stroke: 12,
  color: "#32FF48",
  fill: true
});

// Create a text object
// This is just a Zdog.Shape object with a couple of extra parameters!
var text = new Zdog.Text({
  addTo: illo,
  font: myFont,
  value: "GOLIGORSKY",
  fontSize: 55,
  stroke: 2,
  color: "#ffffff",
  fill: true,
  textAlign: "center",
  textBaseline: "middle",
  translate: { y: -12 }
});

// Creating a darker duplicate of the text and pushing it backwards can help make it look like the text has depth
var shadow = text.copy({
  addTo: illo,
  translate: { z: -6, y: -12 },
  color: "#ededed"
});

function animate() {
  illo.rotate.y += isSpinning ? 0.02 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

// Zdog.waitForFonts() returns a Promise which is resolved once all the fonts added to the scene so far have been loaded
Zdog.waitForFonts().then(function() {
  // Once the fonts are done, start the animation loop
  animate();
});
