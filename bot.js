var classes = document.getElementsByClassName("outputConsole");
var party = "";
var pingPongRunning = false, pingPongClient;
var person = function(name) {
    this.coins = 50;
    this.bet = 0;
    this.name = name;
    // this.penis = penis;
}
person.prototype.addCoins = function(ammount) {
    this.coins += ammount;
}
person.prototype.betCoins = function(ammount) {
    this.bet += ammount;
}
person.prototype.subtractCoins = function(ammount) {
    this.coins -= ammount;
}
person.prototype.getName = function() {
    return this.name;
}
var doge = new person("doge");
var marferin = new person("marferin");
var shepherd = new person("shepherd");
var ruzyu = new person("ruzyu");
var hardeep = new person("hardeep");
var riyaj = new person("riyaj");
var lit = new person("1it");
var crypton = new person("crypton");
var nucleus = new person("nucleus");
var sheep = new person("sheep");
var touka = new person("touka");
var jaws = new person("jaws");
var reaper = new person("reaper");
var goku = new person("goku");
var anna = new person("anna");
var sway = new person("sway");
var peripsis = new person("peripsis");
var odyssey = new person("odyssey");
var cursed = new person("cursed");
var acryuz = new person("acryuz");
var rampage = new person("rampage");
var rubik = new person("rubik");
var legend = new person("legend");
var people = [shepherd, doge, marferin, ruzyu, hardeep, riyaj, lit, crypton, nucleus, sheep, touka, jaws, reaper, goku, anna, sway, peripsis, odyssey, cursed, acryuz, rampage, rubik, legend];
function getEmail() {
    if (document.getElementById("email").value)
        return document.getElementById("email").value;
    else
        return prompt("Email?")
}
function getPassword() {
    if (document.getElementById("password").value)
        return document.getElementById("password").value;
    else
        return prompt("Password?")
}
person.prototype.getCoin = function() {
    var coin = 0;
    for (var i = 0; i < people.length; i++) {
        if (people[i].getName() == this.getName()) {
            coin = people[i].coins;
        }
    }
    if (coin == 0) {
        console.log("COIN NOT FOUND");
        return coin;
    } else {
        return coin;
    }
}
function toggleStateOfPingPong() {
    if (pingPongRunning) {
        pingPongClient.logout();
        pingPongClient = null ;
        document.getElementById("pingpongoutput").innerHTML = "Client farted and died";
        pingPongRunning = false;
        document.getElementById("pingpongbutton").innerHTML = "ACTIVATE YOUR GAY BOT";
        document.getElementById("pingpongbutton").className = "startButton";
    } else {
        document.getElementById("pingpongoutput").innerHTML = "";
        startPingPong();
        pingPongRunning = true;
        document.getElementById("pingpongbutton").innerHTML = "IMMEDIATE SHUTDOWN";
        document.getElementById("pingpongbutton").className = "stopButton";
    }
}
function startPingPong() {
    function output(t) {
        document.getElementById("pingpongoutput").innerHTML += "> " + t + "<br/>"
    }
    function error(e) {
        output(e + " - <i><u>are you sure your user and pass is correct?</u></i>");
    }
    pingPongClient = new Discord.Client();
    pingPongClient.once("ready", function() {
        output("Bot is activated in the following servers:");
        for (var sid in pingPongClient.servers) {
            output("<span class='light'> " + pingPongClient.servers[sid].name + "</span>");
        }
    });
    pingPongClient.on("message", function(msg) {
        if(msg.content=="123"){
        setInterval(function() {
            var a = ['hello', 'hi', 'hey', 'howdy', 'hey guys!', 'Hello guys'];
            var b = Math.floor(Math.random() * a.length);
            this.reply(msg, a[b]);
        }, 69000);
        }
        if (msg.content == "goku") {
            this.reply(msg, "over 9000                                                             (what a gay message)");
        }
        if (msg.content == "cryp") {
            this.reply(msg, "I'm gay                                                                     (suggested by goku)");
        }
        var dialogues = ["f*** off sir", "yes", "no", "No, not in a million years", "My subconscious tells me no", "Nope, definitely not", "I don't think so, but I could be wrong", "Nope, not a chance", "Probably, I don't see why not", "My spiritual ancestors confirms, it is surely to happen!", "Yes, it will happen 200%", "My level of clairvoyance isn't proficient enough, ask botchan", "Yes, I am completely certain"];
        if (msg.content.substring(0, 6).toLowerCase() == "should" || msg.content.substring(0, 5).toLowerCase() == "would") {
            var picker = Math.floor(Math.random() * (dialogues.length - 1));
            this.reply(msg, dialogues[picker])
        }
        if (msg.content.substring(0, 7) == "addcoin") {
            if (msg.content.substring(8, 12) == "doge") {
                var ammount = parseInt(msg.content.substring(13));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    doge.addCoins(ammount);
            } else if (msg.content.substring(8, 13) == "ruzyu") {
                var ammount = parseInt(msg.content.substring(14));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    ruzyu.addCoins(ammount);
            } else if (msg.content.substring(8, 16) == "shepherd") {
                var ammount = parseInt(msg.content.substring(17));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    shepherd.addCoins(ammount);
            } else if (msg.content.substring(8, 16) == "marferin") {
                var ammount = parseInt(msg.content.substring(17));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    marferin.addCoins(ammount);
            } else if (msg.content.substring(8, 15) == "hardeep") {
                var ammount = parseInt(msg.content.substring(16));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    hardeep.addCoins(ammount);
            } else if (msg.content.substring(8, 11) == "1it") {
                var ammount = parseInt(msg.content.substring(12));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    lit.addCoins(ammount);
            } else if (msg.content.substring(8, 15) == "crypton") {
                var ammount = parseInt(msg.content.substring(16));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    crypton.addCoins(ammount);
            } else if (msg.content.substring(8, 15) == "nucleus") {
                var ammount = parseInt(msg.content.substring(16));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    nucleus.addCoins(ammount);
            } else if (msg.content.substring(8, 13) == "sheep") {
                var ammount = parseInt(msg.content.substring(14));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    sheep.addCoins(ammount);
            } else if (msg.content.substring(8, 13) == "riyaj") {
                var ammount = parseInt(msg.content.substring(14));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    riyaj.addCoins(ammount);
            } else if (msg.content.substring(8, 13) == "touka") {
                var ammount = parseInt(msg.content.substring(14));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    touka.addCoins(ammount);
            } else if (msg.content.substring(8, 12) == "jaws") {
                var ammount = parseInt(msg.content.substring(13));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    jaws.addCoins(ammount);
            } else if (msg.content.substring(8, 14) == "reaper") {
                var ammount = parseInt(msg.content.substring(15));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    reaper.addCoins(ammount);
            } else if (msg.content.substring(8, 12) == "goku") {
                var ammount = parseInt(msg.content.substring(13));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    goku.addCoins(ammount);
            } else if (msg.content.substring(8, 12) == "anna") {
                var ammount = parseInt(msg.content.substring(13));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    anna.addCoins(ammount);
            } else if (msg.content.substring(8, 12) == "sway") {
                var ammount = parseInt(msg.content.substring(13));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    sway.addCoins(ammount);
            } else if (msg.content.substring(8, 16) == "peripsis") {
                var ammount = parseInt(msg.content.substring(17));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    peripsis.addCoins(ammount);
            } else if (msg.content.substring(8, 15) == "odyssey") {
                var ammount = parseInt(msg.content.substring(16));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    odyssey.addCoins(ammount);
            } else if (msg.content.substring(8, 14) == "cursed") {
                var ammount = parseInt(msg.content.substring(15));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    cursed.addCoins(ammount);
            } else if (msg.content.substring(8, 14) == "acryuz") {
                var ammount = parseInt(msg.content.substring(15));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    acryuz.addCoins(ammount);
            } else if (msg.content.substring(8, 15) == "rampage") {
                var ammount = parseInt(msg.content.substring(16));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    rampage.addCoins(ammount);
            } else if (msg.content.substring(8, 13) == "rubik") {
                var ammount = parseInt(msg.content.substring(14));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    rubik.addCoins(ammount);
            } else if (msg.content.substring(8, 14) == "legend") {
                var ammount = parseInt(msg.content.substring(15));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    legend.addCoins(ammount);
            } else {
                this.reply(msg, "no user found");
            }
        }
        if (msg.content.substring(0, 7).toLowerCase() == "getcoin") {
            var a = msg.content.substring(8);
            var b = false;
            var c;
            for (var i = 0; i < people.length; i++) {
                if (people[i].name == a) {
                    b = true;
                    c = people[i];
                }
            }
            if (b) {
                this.reply(msg, c.getCoin());
                output("pong'd <b>" + msg.sender.username + "</b>");
            } else {
                this.reply(msg, "user not found");
                output("pong'd <b>" + msg.sender.username + "</b>");
            }
        }
        if (msg.content === "1it") {
            this.reply(msg, "'add me on pornhub' - 1it 2k16");
        }
        if (msg.content.substring(0, 6) == "gamble") {
            var a = 7;
            var b = false;
            var c = 0;
            var f;
            for (var i = 0; i < people.length; i++) {
                a += people[i].getName().length;
                for (var j = 0; j < people.length; j++) {
                    if (msg.content.substring(7, a) == people[i].getName()) {
                        //maybe .getName()
                        b = true;
                        c = a;
                        f = people[i];
                    }
                }
                a = 7;
            }
            if (b) {
                var d = parseInt(msg.content.substring(c + 2));
                if (!isNaN(d)) {
                    if (d > f.getCoins) {
                        //maybe .getCoin()
                        this.reply("You don't have enough coins (" + d + ")");
                    } else {
                        var g = Math.random() * 100;
                        var h = (g > 50);
                        if (h) {
                            f.addCoins(d);
                            this.reply("Rolled a " + h + ". You won " + d + " coins")
                        } else {
                            f.subtractCoins(d);
                            this.reply("Rolled a " + h + ". You lost " + d + " coins");
                        }
                    }
                } else {
                    this.reply("ammount to gamble not found");
                }
            } else {
                this.reply(msg, "user not found")
            }
        }
        if (msg.content === "party") {
            this.reply(msg, party);
            output("pong'd <b>" + msg.sender.username + "</b>");
        }
        if (msg.content.substring(0, 8) == "setparty") {
            party = msg.content.substring(9, msg.content.length);
            this.reply(msg, "party set to " + party);
            output("pong'd <b>" + msg.sender.username + "</b>");
        }
        if (msg.content == "hardeep") {
            this.reply(msg, "'I've never watched porn' - Hardeep 2016");
        }
        if (msg.content === "cursed") {
            this.reply(msg, "u have been cursed 4 lyfe now go die in a hole and jump into traffic no one cares and KYS");
            output("pong'd <b>" + msg.sender.username + "</b>");
        }
        if (msg.content === "acryuz") {
            this.reply(msg, "Cursed, I'm gonna find you and shove a corn dog up your ass.");
            output("pong'd <b>" + msg.sender.username + "</b>");
        }
        if (msg.content === "tag") {
            this.reply(msg, "〈ɪɳȷ〉                                                                                  (aka Indian Jizz)");
        }
        if (msg.content.substring(0, 3) === "bet") {
            if (msg.content.substring(4, 11) == "hardeep") {
                //subtract substring parameters by 3	//hardeep
                var ammount = parseInt(msg.content.substring(16));
                //subtract substring parameters by 3
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (hardeep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins")
                    } else
                        hardeep.betCoins(ammount);
                    //Change function to betCoins
                }
            } else if (msg.content.substring(4, 7) == "1it") {
                //1it
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (lit.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        lit.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 13) == "ruzyu") {
                //ruzyu
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (lit.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        ruzyu.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 15) == "crypton") {
                //crypton
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (crypton.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        crypton.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 15) == "nucleus") {
                //nucleus
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (nucleus.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        nucleus.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 13) == "sheep") {
                //sheep
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (sheep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        sheep.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 13) == "riyaj") {
                //riyaj
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (riyaj.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        riyaj.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 13) == "touka") {
                //touka
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (touka.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        touka.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 12) == "jaws") {
                //jaws
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (jaws.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        jaws.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 14) == "reaper") {
                //reaper
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (reaper.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        reaper.addCoins(ammount);
                }
            } else if (msg.content.substring(8, 12) == "goku") {
                //goku
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (goku.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        goku.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 12) == "anna") {
                //anna
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (anna.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        anna.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 12) == "sway") {
                //sway
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (sway.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        sway.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 16) == "peripsis") {
                //peripsis
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (hardeep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        peripsis.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 15) == "odyssey") {
                //odyssey
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (hardeep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        odyssey.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 14) == "cursed") {
                //cursed
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (hardeep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        cursed.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 14) == "acryuz") {
                //acryuz
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (hardeep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        acryuz.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 15) == "rampage") {
                //rampage
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (hardeep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        rampage.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 13) == "rubik") {
                //rubik
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (hardeep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        rubik.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 14) == "legend") {
                //legend
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (hardeep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        legend.betCoins(ammount);
                }
            }
        }
        if (msg.content == "legend") {
            this.reply(msg, "shoutout to all my hoes, goku, crypton, touka, burnt, cursed and sway");
        }
        if (msg.content.substring(0, 5) === "penis") {
            if (msg.content.substring(6, 10) == "anna" || msg.content.substring(6, 12) == "acryuz") {
                this.reply(msg, "You have a vagina! (!)");
            } else {
                var penis = "";
                var penislength = ((Math.random() * 20) + 1);
                for (var i = 0; i < penislength; i++) {
                    penis = penis + "三"
                }
                this.reply(msg, msg.content.substring(5, msg.content.length) + " 8" + penis + "D");
            }
        }
    });
    pingPongClient.login(getEmail(), getPassword()).catch(error);
    output("logging in...");
}
var fn = function() {
    this.innerHTML = "";
}
for (var i = 0; i < classes.length; i++) {
    classes[i].addEventListener("dblclick", fn, false);
}
