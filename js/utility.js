function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

//Il massimo è escluso e il minimo è incluso
function getRndNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// Il massimo è incluso e il minimo è incluso
function getRndNumIncl(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}


