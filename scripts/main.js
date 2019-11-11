




// -----------------------------------------------------------------------------------

document.querySelector("button").addEventListener("click", rollEightBall);

// ----------------------------------------------------------------------------------
function rollEightBall() {

    var input = document.getElementById("input").value;

    if (input.length < 6) {
        $("#output").text("Enter a Yes or No Question.");
    } else {
        // Math.random(); generates a number from 0 - 0.9999999999999999 (16 decimal places). This generates up to a billion different random numbers.
        var randomNumber = Math.random();

        // Generate a random number between 0-19. pseudo random number generator.
        // calculation make a random number between 0-19.9999999999999999(16 decimal places)
        randomNumber = randomNumber * 20;

        // randomNumber = Math.floor(randomNumber);
        randomNumber = Math.round(randomNumber);

        switch (randomNumber) {
            case 0:
                $("#output").text("It is certain");
                break;
            case 1:
                $("#output").text("It is decidedly so");
                break;
            case 2:
                $("#output").text("Without a doubt");
                break;
            case 3:
                $("#output").text("Yes, definitley");
                break;
            case 4:
                $("#output").text("You may rely on it");
                break;
            case 5:
                $("#output").text("As I see it, yes");
                break;
            case 6:
                $("#output").text("Most likely");
                break;
            case 7:
                $("#output").text("Outlook good");
                break;
            case 8:
                $("#output").text("Yes");
                break;
            case 9:
                $("#output").text("Signs point to yes");
                break;
            case 10:
                $("#output").text("Reply hazy try again");
                break;
            case 11:
                $("#output").text("Ask again later");
                break;
            case 12:
                $("#output").text("Better not tell you now");
                break;
            case 13:
                $("#output").text("Maybe");
                break;
            case 14:
                $("#output").text("Maybe so");
                break;
            case 15:
                $("#output").text("Don't count on it");
                break;
            case 16:
                $("#output").text("My reply is no");
                break;
            case 17:
                $("#output").text("My sources say no");
                break;
            case 18:
                $("#output").text("Outlook not so good");
                break;
            case 19:
                $("#output").text("Very doubtful");
                break;
        }
    }

}

// Function that gets rid of the preloader
// After 10000 ms = 10 sec the preloader-finish class is called and the opacity is set to 0.
window.addEventListener(setTimeout(() => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
}, 10000));