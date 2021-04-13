let getRandomNumber = function( size) {
    return Math.floor(Math.random() * size);
};
let width = 700;
let height = 700;
let clicks = 0;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

let getDistance = function(event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) - (diffY * diffY));
};

let getDistanceHint = function(distance) {
    if ( distance < 10) {
        return 'Обожжёшься !';
    } else if (distance < 20) {
        return 'Очень горячо !';
    } else if (distance < 40) {
        return 'Горячо !';
    } else if ( distance < 80) {
        return 'Тепло !';
    } else if ( distance < 160) {
        return 'Холодно !';
    } else if (distance < 320) {
        return 'Очень холодно!';
    } else {
        return 'Замерзнешь !';
    }
};
 

$('#map').click(function (event) {
clicks++;
let distance = getDistance(event, target);
let DistanceHint = getDistanceHint(distance);
$('#distance').text(DistanceHint);
if ( distance < 8) {
    alert('Клад найден! Сделано попыток:' + clicks);
}

});
