// A p5.js sketch which:
// Reads serial data of micro:bit accelerometer + compass
// and use the values to control an a-frame VR scene.
// Received values include:
// rotation, pitch, compass heading, and light-level

//Built on a Tom Igoe Arduino-serial sketch

// Declare a "SerialPort" object
var serial;

// fill in the name of YOUR serial port here:
var serialPortName = "/dev/cu.usbmodem1412";

// store the most recent control values sent in over serial
var controls;

function setup() {
  console.log("serialPortName: " + serialPortName + " This won't work unless you've set that correctly for your micro:bit.");
  //Set up some defaults so we can apply them unconditionally 
  //to the scene, without worrying if we have received them yet
  controls = { rotation:0, pitch:0, light:0, compass:0 };

  // make an instance of the SerialPort object
  serial = new p5.SerialPort();

  // Request a list of the available ports. Async, so you 
  // should have a callback defined to see the results. See gotList, below:
  serial.list();

  var options = {
    baudrate: 115200
  };
  // Assuming our micro:bit is connected, open the connection to it
  serial.open(serialPortName, options);

  // When you get a list of serial ports that are available, call...
  serial.on('list', gotList);

  // When you some data from the serial port, call...
  serial.on('data', gotData);
}

// Got the list of ports
function gotList(thelist) {

  console.log("Got List of Serial Ports:");
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    console.log(i + " " + thelist[i]);
  }
}

// Called when there is data available from the serial port
function gotData() {
  var currentString = serial.readLine();  // read the incoming data
  trim(currentString);                    // trim off any trailing whitespace
  if (!currentString) return;  // if the incoming string is empty, do no more

  //hopefully, it's in the format "key=value"
  // e.g. "compass=342"
  // e.g. "light=220"
  [key, value] = currentString.split('=');
  
  // store the key and value in our dictionary
  // For security, you may want to allow only keys from a whitelist, 
  // and to screen the values.  None of that, here.
  controls[key] = value;

  //Find the a-frame element we want to manipulate in the DOM
  var elemToMod = document.querySelector('#spaceship');

  setRotation(elemToMod, controls);
  
  //Here we also have the chance to do something specific 
  // for the reported parameter
  switch(key) {
    case "compass": 
    break;
    case "rotation": 
    break;
    case "light": 
    break;
    case "pitch": 
    break;
    default:    
    break;
  }
}

//use compass, rotation, and pitch to orient the given element.
function setRotation(el, kvs){
  el.setAttribute('rotation', 
  {
    x: parseInt(kvs['pitch']),
    y: parseInt(360 - kvs['compass']),
    z: parseInt(kvs['rotation'])
  });
}
