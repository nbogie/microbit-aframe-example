radio.setGroup(17)
basic.showLeds(`
    . . . . .
    # # . # #
    # . . # .
    # . . # .
    # . . # #
    `)
basic.forever(() => {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("roll", input.rotation(Rotation.Roll))
        radio.sendValue("pitch", input.rotation(Rotation.Pitch))
        radio.sendValue("compass", input.compassHeading())
        radio.sendValue("light", input.lightLevel())
        basic.pause(100)
    }
})
