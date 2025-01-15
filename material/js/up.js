let balance = parseInt(localStorage.getItem('balance')) || 0;
let tappower = parseInt(localStorage.getItem('tappower')) || 1;
let tappowerprice = parseInt(localStorage.getItem('tappowerprice')) || 500;
let coinspersecond = parseInt(localStorage.getItem('coinspersecond')) || 0;
let currentenergy = parseInt(localStorage.getItem('currentenergy')) || 500;
let maxenergy = parseInt(localStorage.getItem('maxenergy')) || 500;
let energyprice = parseInt(localStorage.getItem('energyprice')) || 2500;
let energylevel = parseInt(localStorage.getItem('energylevel')) || 1;
let refillprice = parseInt(localStorage.getItem('refillprice')) || 5000;
let refilllevel = parseInt(localStorage.getItem('refilllevel')) || 1;
let tokenspersecond = parseInt(localStorage.getItem('tokenspersecond')) || 0;
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

function buyTappower() {
    if(balance >= tappowerprice){
        removePoints(tappowerprice);

        addTappower(1);
        tappowerprice = Math.round(tappowerprice * 2);
        updateTappower();
        updateTappowerPrice();
        localStorage.setItem('tappowerprice', tappowerprice);
    }
}

function addTappower(points) {
    tappower += points;
    updateBalance();

    localStorage.setItem('tappower', tappower);
}

function removePoints(points) {
    balance -= points;
    updateBalance();
    
    localStorage.setItem('balance', balance.toFixed(2));
}

function buyEnergy() {
    if(balance >= energyprice){
        removePoints(energyprice);

        addEnergy(1);
        energyprice = Math.round(energyprice * 3);
        updateEnergy();
        localStorage.setItem('energyprice', energyprice);
    }
}

function buyRefill() {
    if(balance >= refillprice){
        removePoints(refillprice);

        addRefill(1);
        refillprice = Math.round(refillprice * 4);
        updateRefill();
        localStorage.setItem('refillprice', refillprice);
    }
}

function addEnergy(points) {
    energylevel += points;
    maxenergy = maxenergy + 500;
    updateEnergy();

    localStorage.setItem('energylevel', energylevel);
    localStorage.setItem('maxenergy', maxenergy);
}

function addRefill(points) {
    refilllevel += points;
    updateRefill();

    localStorage.setItem('refilllevel', refilllevel);
}

function addCurrentEnergy(points) {
    currentenergy += points;
    updateEnergy();
    localStorage.setItem('currentenergy', currentenergy);
}

function updateBalance() {
    document.getElementById('balance').textContent = balance.toFixed(2);
}

function updateTappower() {
    document.getElementById('tappower').textContent = tappower;
}

function updateTappowerPrice() {
    document.getElementById('tappowerprice').textContent = tappowerprice;
}

function updateRefill() {
    document.getElementById('refillprice').textContent = refillprice;
    document.getElementById('refilllevel').textContent = refilllevel;
}

function updateEnergy() {
    document.getElementById('energyprice').textContent = energyprice;
    document.getElementById('energylevel').textContent = energylevel;
}

function addCurrentEnergy() {
    currentenergy += refilllevel;
    
    if(currentenergy > maxenergy){
        currentenergy = maxenergy;
    }

    localStorage.setItem('currentenergy', currentenergy);
}

function updateTokensperSecond() {
    document.getElementById('tokenspersecond').textContent = tokenspersecond;
}

function updateTokensPerSecond() {
    tokenspersecond = 0 + (minerpedro1 * minerpedro1power) + (minerpedro2 * minerpedro2power) + (minerpedro3 * minerpedro3power)
    + (minerpedro4 * minerpedro4power) + (minerpedro5 * minerpedro5power);
    document.getElementById("tokenspersecond").innerHTML = tokenspersecond;
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
        tokenspersecond = 0 + (minerpedro1 * (minerpedro1power/3600));
        addPoints(tokenspersecond);
    }
}, 1000);

updateBalance();
updateTappower();
updateTappowerPrice();
updateEnergy();
updateRefill();
updateTokensPerSecond();