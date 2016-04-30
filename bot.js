var classes = document.getElementsByClassName("outputConsole");
var party = "";
var pingPongRunning = false,
    pingPongClient;

function getEmail() {
    if(document.getElementById("email").value)
        return document.getElementById("email").value;
    else
        return prompt("Email?")
}

function getPassword() {
    if(document.getElementById("password").value)
        return document.getElementById("password").value;
    else
        return prompt("Password?")
}

function toggleStateOfPingPong() {
    if(pingPongRunning) {
        pingPongClient.logout();
        pingPongClient = null;
        document.getElementById("pingpongoutput").innerHTML = "Client terminated...";
        pingPongRunning = false;
        document.getElementById("pingpongbutton").innerHTML = "RUN";
        document.getElementById("pingpongbutton").className = "startButton";
    } else {
        document.getElementById("pingpongoutput").innerHTML = "";
        startPingPong();
        pingPongRunning = true;
        document.getElementById("pingpongbutton").innerHTML = "STOP";
        document.getElementById("pingpongbutton").className = "stopButton";
    }
}

function startPingPong() {

    function output(t) {
        document.getElementById("pingpongoutput").innerHTML += "> " + t + "<br/>"
    }

    function error(e) {
        output(e + " - <i><u>are you sure your credentials are correct?</u></i>");
    }

    pingPongClient = new Discord.Client();

    pingPongClient.once("ready", function() {
        output("ready! send the message <u><i>ping</i></u> in any of the following servers:");
        for(var sid in pingPongClient.servers) {
            output("<span class='light'> " + pingPongClient.servers[sid].name + "</span>");
        }
    });

    pingPongClient.on("message", function(msg) {

        if(msg.content === "!party") {
            this.reply(msg, party);
            output("pong'd <b>" + msg.sender.username + "</b>");
        }
        if(msg.content.substring(0, 9) == "!setparty") {
            party = msg.content.substring(10, msg.content.length);
            this.reply(msg, "party set to " + party);
            output("pong'd <b>" + msg.sender.username + "</b>");
        }

        if(msg.content === "cursed") {
            this.reply(msg, "You just been cursed lolololol");
            output("pong'd <b>" + msg.sender.username + "</b>");
        }


    });



    pingPongClient.login(getEmail(), getPassword()).catch(error);
    output("logging in...");

}

var fn = function() {
    this.innerHTML = "";
}

for(var i = 0; i < classes.length; i++) {
    classes[i].addEventListener("dblclick", fn, false);
}
