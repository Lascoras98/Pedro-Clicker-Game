let balance = parseInt(localStorage.getItem('balance')) || 0;
let tokenspersecond = parseInt(localStorage.getItem('tokenspersecond')) || 0;
let currentenergy = parseInt(localStorage.getItem('currentenergy')) || 500;
let maxenergy = parseInt(localStorage.getItem('maxenergy')) || 500;
let refilllevel = parseInt(localStorage.getItem('refilllevel')) || 1;
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

function updateBalance() {
    document.getElementById('balance').textContent = balance.toFixed(2);
}

function updateTokensPerSecond() {
    document.getElementById('tokenspersecond').textContent = tokenspersecond;
}

function updateMiners() {
    document.getElementById('minerpedro1').textContent = minerpedro1;
    document.getElementById('minerpedro2').textContent = minerpedro2;
    document.getElementById('minerpedro3').textContent = minerpedro3;
    document.getElementById('minerpedro4').textContent = minerpedro4;
    document.getElementById('minerpedro5').textContent = minerpedro5;
    document.getElementById('minerpedro1power').textContent = minerpedro1power;
    document.getElementById('minerpedro2power').textContent = minerpedro2power;
    document.getElementById('minerpedro3power').textContent = minerpedro3power;
    document.getElementById('minerpedro4power').textContent = minerpedro4power;
    document.getElementById('minerpedro5power').textContent = minerpedro5power;
}

function updatePrices() {
    document.getElementById('minerpedro1price').textContent = minerpedro1price;
    document.getElementById('minerpedro2price').textContent = minerpedro2price;
    document.getElementById('minerpedro3price').textContent = minerpedro3price;
    document.getElementById('minerpedro4price').textContent = minerpedro4price;
    document.getElementById('minerpedro5price').textContent = minerpedro5price;
}

function buyWorm() {
    if(balance >= minerpedro1price){
        removePoints(minerpedro1price);

        addWorm(1);
        minerpedro1price = Math.round(minerpedro1price * 1.2);
        localStorage.setItem('minerpedro1price', minerpedro1price);
        updatePrices();
    }
}

function addWorm(points) {
    minerpedro1 += points;
    minerpedro1power += minerpedro1power*0.1;
    updateMiners();
    updateTokensPerSecond();
    localStorage.setItem('minerpedro1', minerpedro1);
    localStorage.setItem('minerpedro1power', minerpedro1power);
}

function buyWoodenPickaxe() {
    if(balance >= minerpedro2price){
        removePoints(minerpedro2price);

        addWoodenPickaxe(1);
        minerpedro2price = Math.round(minerpedro2price * 1.2);
        localStorage.setItem('minerpedro2price', minerpedro2price);
        updatePrices();
    }
}

function addWoodenPickaxe(points) {
    minerpedro2 += points;
    minerpedro2power += minerpedro2power*0.1;
    updateMiners();
    updateTokensPerSecond();
    localStorage.setItem('minerpedro2', minerpedro2);
    localStorage.setItem('minerpedro2power', minerpedro2power);
}

function buyTreehouse() {
    if(balance >= minerpedro3price){
        removePoints(minerpedro3price);

        addTreehouse(1);
        minerpedro3price = Math.round(minerpedro3price * 1.2);
        localStorage.setItem('minerpedro3price', minerpedro3price);
        updatePrices();
    }
}

function addTreehouse(points) {
    minerpedro3 += points;
    minerpedro3power += minerpedro3power*0.1;
    updateMiners();
    updateTokensPerSecond();
    localStorage.setItem('minerpedro3', minerpedro3);
    localStorage.setItem('minerpedro3power', minerpedro3power);
}

function buySunglasses() {
    if(balance >= minerpedro4price){
        removePoints(minerpedro4price);

        addSunglasses(1);
        minerpedro4price = Math.round(minerpedro4price * 1.2);
        localStorage.setItem('minerpedro4price', minerpedro4price);
        updatePrices();
    }
}

function addSunglasses(points) {
    minerpedro4 += points;
    minerpedro4power += minerpedro4power*0.1;
    updateMiners();
    updateTokensPerSecond();
    localStorage.setItem('minerpedro4', minerpedro4);
    localStorage.setItem('minerpedro4power', minerpedro4power);
}

function buyCampfire() {
    if(balance >= minerpedro5price){
        removePoints(minerpedro5price);

        addCampfire(1);
        minerpedro5price = Math.round(minerpedro5price * 1.2);
        localStorage.setItem('minerpedro5price', minerpedro5price);
        updatePrices();
    }
}

function addCampfire(points) {
    minerpedro5 += points;
    minerpedro5power += minerpedro5power*0.1;
    updateMiners();
    updateTokensPerSecond();
    localStorage.setItem('minerpedro5', minerpedro5);
    localStorage.setItem('minerpedro5power', minerpedro5power);
}

function updateTokensPerSecond() {
    tokenspersecond = 0 + (minerpedro1 * minerpedro1power) + (minerpedro2 * minerpedro2power) + (minerpedro3 * minerpedro3power)
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
        tokenspersecond = 0 + (minerpedro1 * (minerpedro1power/3600)) + (minerpedro2 * (minerpedro2power/3600)) + (minerpedro3 * (minerpedro3power/3600)) + (minerpedro4 * (minerpedro4power/3600)) + (minerpedro5 * (minerpedro5power/3600));
        addPoints(tokenspersecond);
    }
}, 1000);

updateBalance();
updateTokensPerSecond();
updateMiners();
updatePrices();