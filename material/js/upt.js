let balance = parseInt(localStorage.getItem('balance')) || 0;
let tokenspersecond = parseInt(localStorage.getItem('tokenspersecond')) || 0;
let currentenergy = parseInt(localStorage.getItem('currentenergy')) || 500;
let maxenergy = parseInt(localStorage.getItem('maxenergy')) || 500;
let refilllevel = parseInt(localStorage.getItem('refilllevel')) || 1;
let minerton1 = parseInt(localStorage.getItem('minerton1')) || 0;
let minerton2 = parseInt(localStorage.getItem('minerton2')) || 0;
let minerton3 = parseInt(localStorage.getItem('minerton3')) || 0;

let minerpedro1 = parseInt(localStorage.getItem('minerpedro1')) || 0;
let minerpedro2 = parseInt(localStorage.getItem('minerpedro2')) || 0;
let minerpedro3 = parseInt(localStorage.getItem('minerpedro3')) || 0;
let minerpedro4 = parseInt(localStorage.getItem('minerpedro4')) || 0;
let minerpedro5 = parseInt(localStorage.getItem('minerpedro5')) || 0;
let minerpedro6 = parseInt(localStorage.getItem('minerpedro6')) || 0;
let minerpedro7 = parseInt(localStorage.getItem('minerpedro7')) || 0;
let minerpedro8 = parseInt(localStorage.getItem('minerpedro8')) || 0;
let minerpedro1power = parseInt(localStorage.getItem('minerpedro1power')) || 10;
let minerpedro2power = parseInt(localStorage.getItem('minerpedro2power')) || 35;
let minerpedro3power = parseInt(localStorage.getItem('minerpedro3power')) || 120;
let minerpedro4power = parseInt(localStorage.getItem('minerpedro4power')) || 500;
let minerpedro5power = parseInt(localStorage.getItem('minerpedro5power')) || 1500;
let minerpedro6power = parseInt(localStorage.getItem('minerpedro6power')) || 0;
let minerpedro7power = parseInt(localStorage.getItem('minerpedro7power')) || 0;
let minerpedro8power = parseInt(localStorage.getItem('minerpedro8power')) || 0;
let minerpedro1price = parseInt(localStorage.getItem('minerpedro1price')) || 150;
let minerpedro2price = parseInt(localStorage.getItem('minerpedro2price')) || 750;
let minerpedro3price = parseInt(localStorage.getItem('minerpedro3price')) || 2500;
let minerpedro4price = parseInt(localStorage.getItem('minerpedro4price')) || 15000;
let minerpedro5price = parseInt(localStorage.getItem('minerpedro5price')) || 100000;
let minerpedro6price = parseInt(localStorage.getItem('minerpedro6price')) || 0;
let minerpedro7price = parseInt(localStorage.getItem('minerpedro7price')) || 0;
let minerpedro8price = parseInt(localStorage.getItem('minerpedro8price')) || 0;

let minerton1power = parseInt(localStorage.getItem('minerton1power')) || 10;
let minerton2power = parseInt(localStorage.getItem('minerton2power')) || 35;
let minerton3power = parseInt(localStorage.getItem('minerton3power')) || 120;
let minerton1price = parseInt(localStorage.getItem('minerton1price')) || 150;
let minerton2price = parseInt(localStorage.getItem('minerton2price')) || 750;
let minerton3price = parseInt(localStorage.getItem('minerton3price')) || 2500;

function updateBalance() {
    document.getElementById('balance').textContent = balance.toFixed(2);
}

function updateMiners() {
    document.getElementById('minerton1').textContent = minerton1;
    document.getElementById('minerton2').textContent = minerton2;
    document.getElementById('minerton3').textContent = minerton3;
    document.getElementById('minerton1power').textContent = minerton1power;
    document.getElementById('minerton2power').textContent = minerton2power;
    document.getElementById('minerton3power').textContent = minerton3power;
}

function updatePrices() {
    document.getElementById('minerton1price').textContent = minerton1price;
    document.getElementById('minerton2price').textContent = minerton2price;
    document.getElementById('minerton3price').textContent = minerton3price;
}

function updateTokensperSecond() {
    document.getElementById('tokenspersecond').textContent = tokenspersecond;
}

function buyWorm() {
    if(balance >= minerton1price){
        removePoints(minerton1price);

        addWorm(1);
        minerton1price = Math.round(minerton1price * 1.2);
        localStorage.setItem('minerton1price', minerton1price);
        updatePrices();
    }
}

function addWorm(points) {
    minerton1 += points;
    minerton1power += minerton1power*0.1;
    updateMiners();
    updateTokensPerSecond();
    localStorage.setItem('minerton1', minerton1);
    localStorage.setItem('minerton1power', minerton1power);
}

function buyWoodenPickaxe() {
    if(balance >= minerton2price){
        removePoints(minerton2price);

        addWoodenPickaxe(1);
        minerton2price = Math.round(minerton2price * 1.2);
        localStorage.setItem('minerton2price', minerton2price);
        updatePrices();
    }
}

function addWoodenPickaxe(points) {
    minerton2 += points;
    minerton2power += minerton2power*0.1;
    updateMiners();
    updateTokensPerSecond();
    localStorage.setItem('minerton2', minerton2);
    localStorage.setItem('minerton2power', minerton2power);
}

function buyTreehouse() {
    if(balance >= minerton3price){
        removePoints(minerton3price);

        addTreehouse(1);
        minerton3price = Math.round(minerton3price * 1.2);
        localStorage.setItem('minerton3price', minerton3price);
        updatePrices();
    }
}

function addTreehouse(points) {
    minerton3 += points;
    minerton3power += minerton3power*0.1;
    updateMiners();
    updateTokensPerSecond();
    localStorage.setItem('minerton3', minerton3);
    localStorage.setItem('minerton3power', minerton3power);
}

function updateTokensPerSecond() {
    tokenspersecond = 0 + (minerton1 * minerton1power) + (minerton2 * minerton2power) + (minerton3 * minerton3power) + 
    (minerpedro1 * minerpedro1power) + (minerpedro2 * minerpedro2power) + (minerpedro3 * minerpedro3power)
    + (minerpedro4 * minerpedro4power) + (minerpedro5 * minerpedro5power);
    document.getElementById("tokenspersecond").innerHTML = tokenspersecond;
}

function addCurrentEnergy() {
    currentenergy += refilllevel;
    
    if(currentenergy > maxenergy){
        currentenergy = maxenergy;
    }
    localStorage.setItem('currentenergy', currentenergy);
}

function removePoints(points) {
    balance -= points;
    updateBalance();
    
    localStorage.setItem('balance', balance.toFixed(2));
}

function addPoints(points) {
    if(currentenergy >= 1){
        balance += points;
        updateBalance();
    
        localStorage.setItem('balance', balance.toFixed(2));
    }
}

setInterval(function() {
    if(currentenergy < maxenergy){
        addCurrentEnergy();
    }
    if(tokenspersecond > 0) {
        tokenspersecond = 0 + (minerton1 * (minerton1power/3600)) + (minerpedro1 * (minerpedro1power/3600)) + (minerpedro2 * (minerpedro2power/3600)) + (minerpedro3 * (minerpedro3power/3600)) + (minerpedro4 * (minerpedro4power/3600)) + (minerpedro5 * (minerpedro5power/3600));
        addPoints(tokenspersecond);
    }
}, 1000);

updateBalance();
updateTokensPerSecond();
//updateMiners();
updatePrices();