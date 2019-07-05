

// gets function ready when the website loads?
$(document).ready(function () {

    // create a variable that will hold the random number 19-120 and test with console.log
    var cpuNum = Math.floor(Math.random() * 101 + 19)
    console.log("This is the computer number", cpuNum);

    // link id that is in html to this variable to display in html the random number
    $('#computerNumber').text(cpuNum);

    // create a bunch of variables that will create random numbers 1-12 and used for the gems and test with console.log
    var red1 = Math.floor(Math.random() * 11 + 1)
    console.log("This is ruby number", red1);

    var blue2 = Math.floor(Math.random() * 11 + 1)
    console.log("This is sapphire number", blue2);

    var yellow3 = Math.floor(Math.random() * 11 + 1)
    console.log("This is amber number", yellow3);

    var green4 = Math.floor(Math.random() * 11 + 1)
    console.log("This is emerald number", green4);
    // console log works on the above

    // create variables for what the current users amount selected and wins/losses
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    var gemResult = 0;

    // links the html id to js variables
    $('#numWins').text(wins);
    $('#numLosses').text(losses);
    $('#gemTotal').text(gemResult);
    // function to reset computers random number, gems numbers, users total gem amount
    function reset() {
        cpuNum = Math.floor(Math.random() * 101 + 19);
        console.log(cpuNum)
        $('#computerNumber').text(cpuNum);
        red1 = Math.floor(Math.random() * 11 + 1);
        console.log("This is ruby number", red1);
        blue2 = Math.floor(Math.random() * 11 + 1);
        console.log("This is sapphire number", blue2);
        yellow3 = Math.floor(Math.random() * 11 + 1);
        console.log("This is amber number", yellow3);
        green4 = Math.floor(Math.random() * 11 + 1);
        console.log("This is emerald number", green4);
        userTotal = 0;
        $('#gemTotal').text(userTotal);
    }

    // function to add to losses, then send loss to html, then use reset function
    function addLoss() {
        alert("You went over the number!");
        losses++;
        $('#numLosses').text(losses);
        reset();
    }
    // addLoss(); testing successful

    // function to add to wins, then send wins to html, then use reset function
    function addWin() {
        alert("You gathered the right amount of GEMS!");
        wins++;
        $('#numWins').text(wins);
        reset();
    }
    // addWin(); testing successful

    // need to add the on click function for each gem that will add the random number associated plus user total
    // on click function to connect with ruby html id
    $('#ruby').on('click', function () {
        userTotal = userTotal + red1;
        console.log("total red = " + userTotal);
        // works adds user total which was 0 + userTotal
        // adds user totals to html gemTotal id
        $('#gemTotal').text(userTotal);

        // if statements if the user amount equals the computer number addWin function should be called
        if (userTotal == cpuNum) {
            addWin();
        }
        // if the user amount is greater than computer number addLoss function should be called
        else if (userTotal > cpuNum) {
            addLoss();
        }
    })

    // replicate ruby button but replace with the correct gems and variables. could a function do this?
    $('#sapphire').on('click', function () {
        userTotal = userTotal + blue2;
        console.log("total blue = " + userTotal);
        // works adds user total which was 0 + userTotal
        // adds user totals to html gemTotal id
        $('#gemTotal').text(userTotal);

        // if statements if the user amount equals the computer number addWin function should be called
        if (userTotal == cpuNum) {
            addWin();
        }
        // if the user amount is greater than computer number addLoss function should be called
        else if (userTotal > cpuNum) {
            addLoss();
        }
    })
    // Yellow button works
    $('#amber').on('click', function () {
        userTotal = userTotal + yellow3;
        console.log("total yellow = " + userTotal);
        // works adds user total which was 0 + userTotal
        // adds user totals to html gemTotal id
        $('#gemTotal').text(userTotal);

        // if statements if the user amount equals the computer number addWin function should be called
        if (userTotal == cpuNum) {
            addWin();
        }
        // if the user amount is greater than computer number addLoss function should be called
        else if (userTotal > cpuNum) {
            addLoss();
        }
    })
    $('#emerald').on('click', function () {
        userTotal = userTotal + green4;
        console.log("total green = " + userTotal);
        // works adds user total which was 0 + userTotal
        // adds user totals to html gemTotal id
        $('#gemTotal').text(userTotal);

        // if statements if the user amount equals the computer number addWin function should be called
        if (userTotal == cpuNum) {
            addWin();
        }
        // if the user amount is greater than computer number addLoss function should be called
        else if (userTotal > cpuNum) {
            addLoss();
        }
    });

});
