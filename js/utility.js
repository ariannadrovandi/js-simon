function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 


function getRndNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function getRndNumIncl(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}