let p1 = 0
let p2 = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (p1 > 0 && p2 > 0) {
        if (p1 == 1 && p2 == 1) {
            basic.showLeds(`
                . . . . .
                # # . # #
                # # . # #
                # # . # #
                . . . . .
                `)
            basic.pause(500)
            basic.showNumber(0)
            basic.clearScreen()
        }
        if (p1 == 1 && p2 == 2) {
            basic.showLeds(`
                . . . # #
                # # . # #
                # # . # #
                # # . # #
                . . . # #
                `)
            basic.pause(500)
            basic.showNumber(2)
            basic.clearScreen()
            p2 = 0
            p1 = 0
        }
        if (p1 == 1 && p2 == 3) {
            basic.showLeds(`
                . . . . #
                # # . # #
                # # . . #
                # # . # #
                . . . . #
                `)
            basic.pause(500)
            basic.showNumber(2)
            basic.clearScreen()
            p2 = 0
            p1 = 0
        }
        if (p1 == 2 && p2 == 1) {
            basic.showLeds(`
                # # . . .
                # # . # #
                # # . # #
                # # . # #
                # # . . .
                `)
            basic.pause(500)
            basic.showNumber(1)
            basic.clearScreen()
            p2 = 0
            p1 = 0
        }
        if (p1 == 2 && p2 == 2) {
            basic.showLeds(`
                # # . # #
                # # . # #
                # # . # #
                # # . # #
                # # . # #
                `)
            basic.pause(500)
            basic.showNumber(0)
            basic.clearScreen()
            p2 = 0
            p1 = 0
        }
        if (p1 == 2 && p2 == 3) {
            basic.showLeds(`
                # # . . #
                # # . # #
                # # . . #
                # # . # #
                # # . . #
                `)
            basic.pause(500)
            basic.showNumber(2)
            basic.clearScreen()
            p2 = 0
            p1 = 0
        }
        if (p1 == 3 && p2 == 1) {
            basic.showLeds(`
                # . . . .
                # # . # #
                # . . # #
                # # . # #
                # . . . .
                `)
            basic.pause(500)
            basic.showNumber(2)
            basic.clearScreen()
            p2 = 0
            p1 = 0
        }
        if (p1 == 3 && p2 == 2) {
            basic.showLeds(`
                # . . # #
                # # . # #
                # . . # #
                # # . # #
                # . . # #
                `)
            basic.pause(500)
            basic.showNumber(1)
            basic.clearScreen()
            p2 = 0
            p1 = 0
        }
        if (p1 == 3 && p2 == 3) {
            basic.showLeds(`
                # . . . #
                # # . # #
                # . . . #
                # # . # #
                # . . . #
                `)
            basic.pause(500)
            basic.showNumber(0)
            basic.clearScreen()
            p2 = 0
            p1 = 0
        }
    }
})
input.onButtonPressed(Button.A, function () {
    p1 += 1
})
input.onButtonPressed(Button.B, function () {
    p2 += 1
})
basic.forever(function () {
    if (p1 == 4) {
        p1 = 1
    }
    if (p2 == 4) {
        p2 = 1
    }
})
