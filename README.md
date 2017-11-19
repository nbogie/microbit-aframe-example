# microbit-aframe-example
An example of controlling A-Frame object(s) from one or more BBC micro:bits. 

Uses the p5.serialport library for p5.js and p5 Serial Control executable.



# Expected serial comms protocol

The various components of this project are set to communicate parameters one per line in the format: key=value  For example:

compass=342
light=251
pitch=87

# micro:bit components

There are two approaches.  
1) A duo of micro:bits, one acting as remote control with the other acting as a relay, listening to the radio messages and passing them on over serial.
2) A simpler, single micro:bit controller which plugs directly in and reports its own sensor data directly over serial.

## Remote + Serial-Relay

This duo of programs allows one (or more) wireless micro:bit(s) to send their sensor data (such as orientation) via radio to another "relay" micro:bit which is plugged into the computer.  To save battery and allow the firehose to be stopped, it currently only transmits these messages when button "a" is pressed.  

The *relay's* job is to listen for these radio messages and to pass them on immediately as serial communications, with the correct text protocol*.

### Part 1: The radio controller

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Radio-Controller screenshot")

#### editor

<div style="position:relative;height:0;padding-bottom:70%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/#pub:_fTuVA3ePuAs4" frameborder="0" sandbox="allow-popups allow-forms allow-scripts allow-same-origin"></iframe></div>


### Part 2: The radio-to-serial relay

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Radio-to-Serial-Relay screenshot")

#### editor

<div style="position:relative;height:0;padding-bottom:70%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/#pub:_H885g81qqKFq" frameborder="0" sandbox="allow-popups allow-forms allow-scripts allow-same-origin"></iframe></div>



## A one-microbit alternative: Serial-Controller

This alternative micro:bit program sends sensor data from a connected micro:bit using serial (whenever button a is pressed).  It is useful for simpler testing, if you only have one micro-bit, or don't need radio control of a-frame.

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Serial-Controller screenshot")

#### editor

<div style="position:relative;height:0;padding-bottom:70%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/#pub:_dXzDEsKeC6ga" frameborder="0" sandbox="allow-popups allow-forms allow-scripts allow-same-origin"></iframe></div>