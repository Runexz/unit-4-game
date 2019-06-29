

    // gets function ready when the website loads?
$(document).ready(function() {
    
    // create a variable that will hold the random number 19-120 and test with console.log
    var Random = Math.floor(Math.random()*101+19)
    console.log("This is the computer number", Random);

    // link id that is in html to this variable to display in html the random number
    $('#randomNumber').text(Random);
    
    // create a bunch of variables that will create random numbers 1-12 and used for the gems and test with console.log
    var red1 = Math.floor(Math.random()*11+1)
    console.log("This is ruby number", red1);

    var blue2 = Math.floor(Math.random()*11+1)
    console.log("This is sapphire number", red1);

    var yellow3 = Math.floor(Math.random()*11+1)
    console.log("This is amber number", red1);

    var green4 = Math.floor(Math.random()*11+1)
    console.log("This is emerald number", red1);
    // console log works on the above

    // create variables for what the current users amount selected and wins/losses
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    // links the html id to js variables
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    // function to reset computers random number, gems numbers, users total gem amount
    function reset() {
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        red1= Math.floor(Math.random()*11+1);
        blue2= Math.floor(Math.random()*11+1);
        yellow3= Math.floor(Math.random()*11+1);
        green4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
    }

    // function to add to losses, then send loss to html, then use reset function
    function addLoss() {
        alert ("You went over the number!");
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }
    // addLoss(); testing successful

    // function to add to wins, then send wins to html, then use reset function
    function addWin() {
        alert ("You gathered the right amount of GEMS!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }
    // addWin(); testing successful

    

});
