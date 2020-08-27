var savegame = JSON.parse(localStorage.getItem("ISESave"))

var gamedata = {
    version: "0.0.0.a",
    DE: 0,
    DEperclick: 1,
    DEperclickcost: 10,
    DEperseccost: 20,
    DEpersec: 0,
    lasttick: Date.now()
}

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}

function reset() {
    window.localStorage.clear();
    document.location.reload();
    document.getElementById("logs").value = ">";
}

function save() {
    localStorage.setItem("ISESave", JSON.stringify(gamedata))
}

function tab(tab){
    document.getElementById("mainpage").style.display = "none"
    document.getElementById("researchlabpage").style.display = "none"
    document.getElementById("testtab").style.display = "none"
    document.getElementById(tab).style.display = "inline-block"
}
tab("mainpage")

var logs = new Array(
    "> Message 1 particulièrement long pour faire un test",
    "> Message 2 particulièrement long pour faire un test",
    "> Message 3 particulièrement long pour faire un test",
    "> Message 4 particulièrement long pour faire un test",
    "> Message 5 particulièrement long pour faire un test",
    "> Message 6 particulièrement long pour faire un test",
    "> Message 7 particulièrement long pour faire un test",
    "> Message 8 particulièrement long pour faire un test",
    "> Message 9 particulièrement long pour faire un test",
    "> Message 10 particulièrement long pour faire un test",
    "> Message 11 particulièrement long pour faire un test" );

function getPhrase(){
    document.getElementById("logs").value = logs[Math.floor(Math.random() * logs.length)] + "\n" + document.getElementById("logs").value ;
}

function logloop() {
    getPhrase();
    setTimeout(logloop, Math.random() * 10000)
}
logloop()

function gatherDE() {
    gamedata.DE += gamedata.DEperclick
}

function buyDEperclick() {
    if (gamedata.DE >= gamedata.DEperclickcost) {
        gamedata.DE -= gamedata.DEperclickcost
        gamedata.DEperclick += 1
        gamedata.DEperclickcost *= 2
    }
}

function buyDEpersec() {
    if (gamedata.DE >= gamedata.DEperseccost) {
        gamedata.DE -= gamedata.DEperseccost
        gamedata.DEpersec += 1
        gamedata.DEperseccost = 20 + (2 ** (gamedata.DEpersec))
    }
}

var refreshloop = window.setInterval(function() {
    update("DE", "Dark Energy : " + format(gamedata.DE, "scientific"))
    update("DEperclick", "Dark energy per click : " + format(gamedata.DEperclick, "scientific"))
    update("DEperclickupgrade", format(gamedata.DEperclick, "scientific"))
    update("DEperclickupgradecost", "Cost : " + format(gamedata.DEperclickcost, "scientific") + " DE")
    update("DEpersecupgrade", format(gamedata.DEpersec, "scientific"))
    update("DEpersecupgradecost", "Cost : " + format(gamedata.DEperseccost, "scientific") + " DE")
    update("DEpersec", "Dark energy production: " + format(gamedata.DEpersec, "scientific") + " /s")
}, 10)

var maingameloop = window.setInterval(function() {
    diff = Date.now() - gamedata.lasttick
    gamedata.lasttick = Date.now()
    gamedata.DE += gamedata.DEpersec
}, 1000)

var savegameloop = window.setInterval(function() {
    localStorage.setItem("ISESave", JSON.stringify(gamedata))
}, 15000)


function format(number, type) {
	let exponent = Math.floor(Math.log10(number))
	let mantissa = number / Math.pow(10, exponent)
	if (exponent < 5) return number.toFixed(1)
	if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
	if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
    
}

if (typeof savegame.DE !== "undefined") gamedata.DE = savegame.DE;
if (typeof savegame.DEperclick !== "undefined") gamedata.DEperclick = savegame.DEperclick;
if (typeof savegame.DEperclickcost !== "undefined") gamedata.DEperclickcost = savegame.DEperclickcost;
if (typeof savegame.DEpersec !== "undefined") gamedata.DEpersec = savegame.DEpersec;
if (typeof savegame.DEperseccost !== "undefined") gamedata.DEperseccost = savegame.DEperseccost;
if (typeof savegame.DEperseclvl !== "undefined") gamedata.DEperseclvl = savegame.DEperseclvl;
if (typeof savegame.lasttick !== "undefined") gamedata.lasttick = savegame.lasttick;


document.addEventListener('keydown', function (e) {
    var key = e.keyCode || e.charCode;
    if (key == 13) {
      e.stopPropagation();
      e.preventDefault();
    }
});

