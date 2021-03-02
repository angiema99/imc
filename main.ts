input.onButtonPressed(Button.A, function () {
    P += 1
})
input.onGesture(Gesture.Shake, function () {
    P = 74
})
input.onButtonPressed(Button.AB, function () {
    IMC = 10000 * (P / (A * A))
    if (IMC < 18.5) {
        basic.showString("PD")
    } else if (false) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    P += -1
})
let IMC = 0
let A = 0
let P = 0
P = 74
A = 180
basic.forever(function () {
    basic.showNumber(P)
})
