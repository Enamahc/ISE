var savegame = JSON.parse(localStorage.getItem("ISESave"))

var gamedata = {
    version: "0.0.0.a",
    newgame: 1,
    DE: 0,
    DEperclick: 1,
    DEperclickcost: 10,
    DEperseccost: 20,
    DEpersec: 0,
    shiproomsize: 1,
    shiproomused: 1,
    shiphullsize: 6,
    lasttick: Date.now()
}

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}

function reset() {
    window.localStorage.clear();
    document.location.reload();
    document.getElementById("logs").value = ">";
    gamedata.newgame = 1;
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
    "an Hypergiant star",
    "a Supergiant star",
    "a Bright giant star",
    "a Giant star",
    "a Subgiant star",
    "a Dwarf star",
    "a Subdwarf star",
    "a Red dwarf star", 
    "a Brown dwarf star",
    "a White dwarf star",
    "a Protostar",
    "a T Tauri star",
    "a Neutron star",
    " Black hole");

var spectral = new Array(
    " - Spectral type : O",
    " - Spectral type : B",
    " - Spectral type : A",
    " - Spectral type : F",
    " - Spectral type : G",
    " - Spectral type : K",
    " - Spectral type : M",
    " - Spectral type : D",
)

function getlog() {
    b = Math.random();
    console.log(b);
    a = "test";
    if (b <= 0.71) {
        b = Math.random();
        if (b <= 0.7645) {
            a = logs[7] + spectral[6];
        } else if ( b <= 0.8855) {
            a = logs[5] + spectral[5];
        } else if ( b <= 0.9615) {
            a = logs[5] + spectral[4];
        } else if ( b <= 0.9915) {
            a = logs[5] + spectral[3];
        } else if ( b <= 0.9975) {
            a = logs[5] + spectral[2];
        } else if ( b <= 0.9988) {
            a = logs[5] + spectral[1];
        } else {
            a = logs[5] + spectral[0];
        } 
    } else if (b <= 0.79) {
        b = Math.random();
        if (b <= 0.5) {
            a = logs[3] + spectral[6];
        } else {
            a = logs[3] + spectral[5];
        }
    } else if (b <= 0.83) {
        b = Math.random();
        if (b <= 0.3333334) {
            a = logs[4] + spectral[4];
        } else if ( b <= 0.6666667) {
            a = logs[4] + spectral[3];
        } else {
            a = logs[4] + spectral[5];
        }
    } else if (b <= 0.87) {
        a = logs[9] + spectral[7];
    } else if (b <= 0.88) {
        b = Math.random();
        if (b <= 0.5) {
            a = logs[2] + spectral[6];
        } else {
            a = logs[2] + spectral[5];
        }
    } else if (b <= 0.91) {
        a = logs[10];
    } else if (b <= 0.93) {
        a = logs[11];
    } else if (b <= 0.95) {
        a = logs[12] + spectral[7];
    } else if (b <= 0.96) {
        b = Math.random();
        if (b <= 0.7645) {
            a = logs[1] + spectral[6];
        } else if ( b <= 0.8855) {
            a = logs[1] + spectral[5];
        } else if ( b <= 0.9615) {
            a = logs[1] + spectral[4];
        } else if ( b <= 0.9915) {
            a = logs[1] + spectral[3];
        } else if ( b <= 0.9975) {
            a = logs[1] + spectral[2];
        } else if ( b <= 0.9988) {
            a = logs[1] + spectral[1];
        } else {
            a = logs[1] + spectral[0];
        } 
    } else if (b <= 0.97) {
        b = Math.random();
        if (b <= 0.7645) {
            a = logs[6] + spectral[6];
        } else if ( b <= 0.8855) {
            a = logs[6] + spectral[5];
        } else if ( b <= 0.9615) {
            a = logs[6] + spectral[4];
        } else if ( b <= 0.9915) {
            a = logs[6] + spectral[3];
        } else if ( b <= 0.9975) {
            a = logs[6] + spectral[2];
        } else if ( b <= 0.9988) {
            a = logs[6] + spectral[1];
        } else {
            a = logs[6] + spectral[0];
        } 
    } else if (b <= 0.98) {
        a = logs[8];
    } else if (b <= 0.99) {
        b = Math.random();
        if (b <= 0.99) {
            a = "a" + logs[13];
        } else {
            a = "a supermassive" + logs[13];
        }
    } else if (b <= 1) {
        b = Math.random();
        if (b <= 0.7645) {
            a = logs[0] + spectral[6];
        } else if ( b <= 0.8855) {
            a = logs[0] + spectral[5];
        } else if ( b <= 0.9615) {
            a = logs[0] + spectral[4];
        } else if ( b <= 0.9915) {
            a = logs[0] + spectral[3];
        } else if ( b <= 0.9975) {
            a = logs[0] + spectral[2];
        } else if ( b <= 0.9988) {
            a = logs[0] + spectral[1];
        } else {
            a = logs[0] + spectral[0];
        } 
    }
    document.getElementById("logs").value = "> Passing by " + a + "\n" + document.getElementById("logs").value ;
}

function logloop() {
    if (gamedata.newgame == 1) {
        document.getElementById("logs").value = " > Good morning Commander. Or evening? Wait, what time is it? Wait... what 'time' even is?"
        gamedata.newgame = 0;
    } else {
        getlog()
    }
    setTimeout(logloop, Math.random() * 50000)
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
    } else {
        document.getElementById("logs").value =" > Not enough resources\n" + document.getElementById("logs").value ;
    }
}

function buyDEpersec() {
    if (gamedata.DE >= gamedata.DEperseccost) {
        gamedata.DE -= gamedata.DEperseccost
        gamedata.DEpersec += 1
        gamedata.DEperseccost = 20 + (2 ** (gamedata.DEpersec))
    } else {
        document.getElementById("logs").value =" > Not enough resources\n" + document.getElementById("logs").value ;
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
    save();
}, 15000)


function format(number, type) {
	let exponent = Math.floor(Math.log10(number))
	let mantissa = number / Math.pow(10, exponent)
	if (exponent < 5) return number.toFixed(1)
	if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
	if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
    
}

if (typeof savegame.DE !== "undefined") gamedata.DE = savegame.DE;
if (typeof savegame.newgame !== "undefined") gamedata.newgame = savegame.newgame;
if (typeof savegame.DEperclick !== "undefined") gamedata.DEperclick = savegame.DEperclick;
if (typeof savegame.DEperclickcost !== "undefined") gamedata.DEperclickcost = savegame.DEperclickcost;
if (typeof savegame.DEpersec !== "undefined") gamedata.DEpersec = savegame.DEpersec;
if (typeof savegame.DEperseccost !== "undefined") gamedata.DEperseccost = savegame.DEperseccost;
if (typeof savegame.DEperseclvl !== "undefined") gamedata.DEperseclvl = savegame.DEperseclvl;
if (typeof savegame.lasttick !== "undefined") gamedata.lasttick = savegame.lasttick;
if (typeof savegame.shiproomsize !== "undefined") gamedata.shiproomsize = savegame.shiproomsize;
if (typeof savegame.shiproomused !== "undefined") gamedata.shiproomused = savegame.shiproomused;
if (typeof savegame.shiphullsize !== "undefined") gamedata.shiphullsize = savegame.shiphullsize;


document.addEventListener('keydown', function (e) {
    var key = e.keyCode || e.charCode;
    if (key == 13) {
      e.stopPropagation();
      e.preventDefault();
    }
});

