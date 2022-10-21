let xvalue = 0
let yvalue = 0
basic.forever(function () {
    let counter = 0
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(xvalue, 0)
        basic.pause(500)
        xvalue += 1
    }
    if (xvalue > 4) {
        xvalue = 0
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, xvalue)
        basic.pause(500)
        yvalue += 1
    }
    if (counter > 4) {
        yvalue = 0
    }
})
