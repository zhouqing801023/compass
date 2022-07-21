let bearing = 0
input.calibrateCompass()
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing < 45 || bearing > 315) {
        basic.showString("N")
    } else if (bearing < 90 || bearing > 0) {
        basic.showString("NE")
    } else if (bearing < 135 || bearing > 45) {
        basic.showString("E")
    } else if (bearing < 180 || bearing > 90) {
        basic.showString("SE")
    } else if (bearing < 225 || bearing > 135) {
        basic.showString("S")
    } else if (bearing < 270 || bearing > 180) {
        basic.showString("SW")
    } else if (bearing < 315 || bearing > 225) {
        basic.showString("W")
    } else if (bearing < 360 || bearing > 270) {
        basic.showString("NW")
    } else {
        basic.showString("+")
    }
})
