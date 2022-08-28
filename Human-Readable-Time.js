/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

HH = seconds / 360

12:34:56

*/

console.log(humanReadable(59))

function humanReadable (seconds) {

    seconds > 359999 ? seconds = 359999 : seconds = seconds
    
    let hours = '00'
    let minutes = '00'

        hours = Math.trunc(seconds / 3600)
        restOfHours = seconds % 3600
        minutes = Math.trunc(restOfHours / 60)
        seconds = restOfHours % 60

        if(hours < 10){
            hours = '0' + hours
        }

        if(minutes < 10){
            minutes = '0' + minutes
        }

        if(seconds < 10){
            seconds = '0' + seconds
        }

    let result = `${hours}:${minutes}:${seconds}`
    return result;
  }