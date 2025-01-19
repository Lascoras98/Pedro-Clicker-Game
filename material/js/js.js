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
let minerton1 = parseInt(localStorage.getItem('minerton1')) || 0;
let minerton2 = parseInt(localStorage.getItem('minerton2')) || 0;
let minerton3 = parseInt(localStorage.getItem('minerton3')) || 0;
let minerton1power = parseInt(localStorage.getItem('minerton1power')) || 10;
let minerton2power = parseInt(localStorage.getItem('minerton2power')) || 35;
let minerton3power = parseInt(localStorage.getItem('minerton3power')) || 120;
let minerton1price = parseInt(localStorage.getItem('minerton1price')) || 150;
let minerton2price = parseInt(localStorage.getItem('minerton2price')) || 750;
let minerton3price = parseInt(localStorage.getItem('minerton3price')) || 2500;

var tappowercost = 500;

function completeTask(reward, taskUrl) {
   
    if (localStorage.getItem(taskUrl) === 'true') {
        alert('You have already completed this task.');
        return;
    }

 
    balance += reward;
    updateBalance();

 
    localStorage.setItem(taskUrl, 'true');

 
    localStorage.setItem('balance', balance.toFixed(2));


    window.open(taskUrl, '_blank');
}

function addPoints(points) {
    if(currentenergy >= 1){
        balance += points;
        updateBalance();
        updateTappower();
    
        localStorage.setItem('balance', balance.toFixed(2));
    }
}

function removePoints(points) {
    balance -= points;
    updateBalance();
    
    localStorage.setItem('balance', balance.toFixed(2));
}

function removeEnergyPower(points) {
    if(currentenergy >= 1){
        currentenergy -= points;
        updateEnergy();
    
        localStorage.setItem('currentenergy', currentenergy);
    }
}

function addCurrentEnergy() {
    currentenergy += refilllevel;
    
    if(currentenergy > maxenergy){
        currentenergy = maxenergy;
    }

    updateEnergy();
    localStorage.setItem('currentenergy', currentenergy);
}

function createNumberOnClicker(event) {
    let clicker = document.getElementById("clicker");

    let element = document.createElement("div");
    element.textContent = "+6546516511";
    element.classList.add("number", "unselectable");

    clicker.appendChild(element);
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

function updateEnergy() {
    document.getElementById('currentenergy').textContent = currentenergy;
    document.getElementById('maxenergy').textContent = maxenergy;
}

function updateRefill() {
    document.getElementById('refilllevel').textContent = refilllevel;
}

function updateTokensPerSecond() {
    tokenspersecond = 0 + (minerpedro1 * minerpedro1power) + (minerpedro2 * minerpedro2power) + (minerpedro3 * minerpedro3power)
    + (minerpedro4 * minerpedro4power) + (minerpedro5 * minerpedro5power);
    document.getElementById("tokenspersecond").innerHTML = tokenspersecond;
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

var windowInitWidth = window.innerWidth;
      var nums = document.getElementsByClassName('num');

      // get the value of num font-size
      var numFontSize = window.getComputedStyle(nums[0]).getPropertyValue("font-size");
      numFontSize = Number(numFontSize.replace("px", ""));

      // update the text font-size when resizing the window
      window.addEventListener("resize", function() {
        for( var i = 0; i < nums.length; i++) {
          nums[i].style.fontSize = (window.innerWidth / windowInitWidth * numFontSize) + 'px';
        }
})

updateTokensPerSecond();
updateBalance();
updateTappower();
updateEnergy();
