let dataCount = 0
radio.onDataPacketReceived( ({ receivedString: name, receivedNumber: value }) =>  {
    serial.writeLine("" + name + "=" + value)
    dataCount = (dataCount + 1) % 256
})
radio.setGroup(17)
dataCount = 0
basic.showLeds(`
    # # # . .
    # . . . .
    # . . # .
    # . . # .
    # . . # #
    `)
basic.forever(() => {
    led.plotBarGraph(
    dataCount,
    255
    )
    basic.pause(100)
})
