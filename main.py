bearing = 0
input.calibrate_compass()

def on_forever():
    global bearing
    bearing = input.compass_heading()
    if bearing < 45 or bearing > 315:
        basic.show_string("N")
    elif bearing < 90 or bearing > 0:
        basic.show_string("NE")
    elif bearing < 135 or bearing > 45:
        basic.show_string("E")
    elif bearing < 180 or bearing > 90:
        basic.show_string("SE")
    elif bearing < 225 or bearing > 135:
        basic.show_string("S")
    elif bearing < 270 or bearing > 180:
        basic.show_string("SW")
    elif bearing < 315 or bearing > 225:
        basic.show_string("W")
    elif bearing < 360 or bearing > 270:
        basic.show_string("NW")
    else:
        basic.show_string("+")
basic.forever(on_forever)
