
//Function to retrieve and display the swatch clock
function GetSwatchTime(showDecimals = true) {
    //get date in UTC/GMT
    var date = new Date();
    var hours = date.getUTCHours();
    var seconds = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var milliseconds = date.getUTCMilliseconds();
    // time in seconds
    var timeInMilliseconds = ((hours * 60 + minutes) * 60 + seconds) * 1000 + milliseconds;
    // there are 86.4 seconds in a beat
    var millisecondsInABeat = 86400;
    // calculate beats to two decimal places
    if (showDecimals) {
        return Math.abs(timeInMilliseconds / millisecondsInABeat).toFixed(2);
    } else {
        return Math.floor(Math.abs(timeInMilliseconds / millisecondsInABeat));
    }
}

//Function to update swatch clock
var swatchClock = document.getElementById('swatch-clock');
function updateSwatchClock() {
    swatchClock.innerHTML = '@' + GetSwatchTime();
}
setInterval(updateSwatchClock, 864);