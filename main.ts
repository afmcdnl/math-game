input.onButtonPressed(Button.A, function () {
    if (State == 1) {
        mode += 1
        if (mode == 2) {
            mode = 0
        }
    } else if (State == 3) {
        guess += -1
    }
})
function Showmath () {
    if (mode == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (State == 1) {
        State = 2
    } else if (State == 3) {
        State = 4
    }
})
input.onButtonPressed(Button.B, function () {
    if (State == 1) {
        mode += 1
        if (mode == 2) {
            mode = 0
        }
    } else if (State == 3) {
        guess += 1
    }
})
let answer = 0
let State = 0
let mode = 0
mode = 0
State = 1
let Number1 = randint(0, 10)
let Number2 = randint(0, 10)
let guess = 0
basic.forever(function () {
    if (State == 1) {
        Showmath()
    } else if (State == 2) {
        basic.clearScreen()
        basic.showString("What is ")
        basic.showNumber(Number1)
        Showmath()
        basic.showNumber(Number2)
        if (mode == 0) {
            answer = Number1 + Number2
        } else {
            answer = Number1 - Number2
        }
        State = 3
    } else if (State == 3) {
        basic.clearScreen()
        basic.showNumber(guess)
    } else if (State == 4) {
        if (answer == guess) {
            basic.showIcon(IconNames.Yes)
            basic.clearScreen()
            basic.showString("Well Done")
            control.reset()
        } else {
            basic.showIcon(IconNames.No)
            basic.pause(500)
            State = 3
        }
    }
})
