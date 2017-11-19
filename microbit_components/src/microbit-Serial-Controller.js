let alwaysSending = false
alwaysSending = input.buttonIsPressed(Button.A)
if (alwaysSending) {
    basic.showLeds(`
        # # . # #
        # . . # .
        # # . # .
        . # . # .
        # # . # #
        `)
} else {
    basic.showLeds(`
        # # . . .
        # . . # #
        # # . # .
        . # . # .
        # # . # #
        `)
}
basic.forever(() => {
    if (input.buttonIsPressed(Button.A) || alwaysSending) {
        serial.writeLine("roll=" + input.rotation(Rotation.Roll))
        serial.writeLine("pitch=" + input.rotation(Rotation.Pitch))
        serial.writeLine("compass=" + input.compassHeading())
        serial.writeLine("light=" + input.lightLevel())
        basic.pause(100)
    }
})
