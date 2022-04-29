function unhide() {
    var hid = document.getElementsByClassName("exp");
    // Emulates jQuery $(element).is(':hidden');
    if(hid[0].offsetWidth > 0 && hid[0].offsetHeight > 0) {
        hid[0].style.visibility = "visible";
    }
}

function getRandomNumber(minRange, maxRange) {
    return Math.floor(Math.random() * (maxRange + 1) + minRange);
}

window.onload = function() {
    const rand = getRandomNumber(0, -110);
    const rand2 = getRandomNumber(0, -110);
    const rand3 = getRandomNumber(0, -110);
    document.getElementById("firstNumber").innerHTML = rand;
    document.getElementById("secoundNumber").innerHTML = rand2;
    document.getElementById("thirdNumber").innerHTML = rand3;
    $('#myNumber').html(rand);
};

