var classes = document.getElementsByClassName("outputConsole");
var party = "";
var pingPongRunning = false, pingPongClient;
var person = function(name,penis) {
    this.coins = 50;
  //  this.bet = 0;  <-- betting function 
    this.name = name;
 this.penis = penis;
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
var cuffin = new person("cuffin",15);
var blazingfire = new person("@BlazingFire007",12);
var gabidou = new person("@Gabidou99",7);
var pike = new person("pike",20);
var rh1 = new person("@RH1-N0",0);
var teyru = new person("@Teyru",2);
var cavalry = new person("@The Cavalry",9);
var demic = new person("@killdemic",13);
var gigglingbuns = new person("@Gigglingbuns",16);
var eclipse = new person("@[RDT] Eclipse",7);
var flames = new person("@Fl🔥mes",4);
var drflash55 = new person("@Drflash55",7);
var nickmushu = new person("@nickmushu",16);
var zuppyterra = new person("@Zuppyterra",6);
var haidere = new person("@[RDT] Hai Dere",10);
var GenerikShadow = new person("@GenerikShadow",9);
var killer = new person("@The Killer",11);

var people = [cuffin,blazingfire,gabidou,pike,rh1,teyru,cavalry,demic,gigglingbuns,eclipse,flames,drflash55,nickmushu,zuppyterra,haidere,GenerikShadow,killer];

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
            
            for (var i=0;i<10000;i++){
                console.log(i);
            }
           this.sendMessage(msg,"testing, testing, 123");
        }
     
        var dialogues = ["Only pingu knows the answer to that.","Never, never ever ever ever ever.", "yes", "no", "No, not in a million years", "My subconscious tells me no", "Nope, definitely not", "I don't think so, but I could be wrong", "Nope, not a chance", "Probably, I don't see why not", "My spiritual ancestors confirms, it is surely to happen!", "Yes, it will happen 200%", "My level of clairvoyance isn't proficient enough, ask botchan", "Yes, I am completely certain"];
        if (msg.content.substring(0, 6).toLowerCase() == "should" || msg.content.substring(0, 5).toLowerCase() == "would" || msg.content.substring(0, 5).toLowerCase() == "could" || msg.content.substring(0, 4).toLowerCase() == "will" ){
            var picker = Math.floor(Math.random() * (dialogues.length - 1));
            this.reply(msg, dialogues[picker]);
        }
        
        /* FOR REFERENCE
        if (msg.content.substring(0, 7) == "addcoin") {
            if (msg.content.substring(8, 12) == "doge") {
                var ammount = parseInt(msg.content.substring(13));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    doge.addCoins(ammount);
          
            } else {
                this.reply(msg, "no user found");
            }
        }
        if (msg.content.substring(0, 7).toLowerCase() == "getcoin") {  //this is SUPER efficient
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
        }*/
      
        if (msg.content === "party" || msg.content === "server?") {
            this.reply(msg, party);
            output("pong'd <b>" + msg.sender.username + "</b>");
        }
        if (msg.content.substring(0, 8) == "setparty") {
            party = msg.content.substring(9, msg.content.length);
            this.reply(msg, "party set to " + party + "     Type 'party' to view party code");
            output("pong'd <b>" + msg.sender.username + "</b>");
        }
/* FOR REFRENCE
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
            }
        } */
        if (msg.content.substring(0, 5) === "penis") {
                var penis = "";
                var penislength = 0;
            if (msg.content.substring(6, 10) == "anna" || msg.content.substring(6, 12) == "acryuz") {
for (var i = 0; i < penislength; i++) {
                    penis = penis + "三"
                }
                this.reply(msg, msg.content.substring(5, msg.content.length) + " 8" + penis + "D");
            } else {
                 penislength = ((Math.random() * 20) + 1);
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
