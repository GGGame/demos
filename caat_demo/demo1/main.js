// create a director object
var director = new CAAT.Foundation.Director().initialize(
        100,    // 100 pixels wide
        100,    // 100 pixels across
        'canvas'
);
 
// add a scene object to the director.
var scene=     director.createScene();
 
// create a CAAT actor
var circle=    new CAAT.Foundation.UI.ShapeActor().
        setLocation(20,20).
        setSize(60,60).
        setFillStyle('#ff0000').
        setStrokeStyle('#000000');
 
// add it to the scene
scene.addChild(circle);
 
// start the animation loop
CAAT.loop(1);