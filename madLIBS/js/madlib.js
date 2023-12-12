console.log("It's Working!");

function write() {
    console.log("Written inside the function");

    var input1 = document.getElementById('word1').value;
    console.log(word1);

    var input2 = document.getElementById('word2').value;
    console.log(word2);

    var input3 = document.getElementById('word3').value;
    console.log(word3);

    var input4 = document.getElementById('word4').value;
    console.log(word4);

    var input5 = document.getElementById('word5').value;
    console.log(word5);

    var input6 = document.getElementById('word6').value;
    console.log(word6);

    var input7 = document.getElementById('word7').value;
    console.log(word7);

    var input8 = document.getElementById('word8').value;
    console.log(word8);

    var input9 = document.getElementById('word9').value;
    console.log(word9);

    var input10 = document.getElementById('word10').value;
    console.log(word10);

    var input11 = document.getElementById('word11').value;
    console.log(word11);

    var videogame;

    if (document.querySelector('input[name="videogame"]:checked') != null) {

        videogame = document.querySelector('input[name="videogame"]:checked').value;

    } else {

        videogame = "";

    }

    console.log(word2);

    var vgMessage;

    if (videogame == "Fortnite") {
        vgMessage = "Last one standing wins!";
    }
    else if (videogame == "Minecraft") {
        vgMessage = "All about mining and crafting!";
    }
    else if (videogame == "Roblox") {
        vgMessage = "Create or play, the choice is yours!";
    }
    else if (videogame == "Tetris") {
        vgMessage = "Nothing beats this Cold War classic!";
    }

    console.log(vgMessage);

    document.getElementById('output').innerHTML += "<h4>There once was a boy that had a real big " + input1 + ". He lived a very secluded life within his very middle-class house. His favorite thing to do was to play Fortnite " + input2 + " and go hang out with his friends. He has always been an easy-going person, and very eager to learn new things. He met his best friend " + input3 + " at a/the " + input4 + " movie. These two both share identical senses of humor. They laugh all about the dangers of " + input5 + ". However, one day, they got into a big fight. " + input3 + " was talking about the game that they are both heavily into. He was saying that he was better than him in every conceivable way at this game. The boy was irate as he threw his " + input6 + " against the wall, breaking it into a million pieces. “How dare he say this to me. I must get revenge.,” the boy says. He " + input7 + " to his friend's house and knocks on the door. As soon as his friend answers the door, the boy " + input8 + " right in his friend's face. They proceed to have an absolute brawl in the doorway, throwing punch after punch at each other. They eventually realize how " + input9 + " they were both being, and both agreed to settle their differences in a more conventional and less-violent manner. They both eventually agreed to have a " + input10 + ", with the winner of this duel being crowned the ultimate gamer. </h4>"
    
    document.getElementById('output').innerHTML += " <h3>Thanks for playing!</h3> ";

}