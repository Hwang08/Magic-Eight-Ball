
// -----------------------------------------------------------------------------------

document.querySelector("button").addEventListener("click", rollEightBall);

// ----------------------------------------------------------------------------------
function rollEightBall() {

    var userInput = document.getElementById("input").value;

    if (userInput.length < 6) {
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
                $("#output").html(userInput + "<br/> It is certain");
                input.value = '';
                break;
            case 1:
                $("#output").html(userInput + "<br/> It is decidedly so");
                input.value = '';
                break;
            case 2:
                $("#output").html(userInput + "<br/> Without a doubt");
                input.value = '';
                break;
            case 3:
                $("#output").html(userInput + "<br/> Yes, definitley");
                input.value = '';
                break;
            case 4:
                $("#output").html(userInput + "<br/> You may rely on it");
                input.value = '';
                break;
            case 5:
                $("#output").html(userInput + "<br/> As I see it, yes");
                input.value = '';
                break;
            case 6:
                $("#output").html(userInput + "<br/> Most likely");
                input.value = '';
                break;
            case 7:
                $("#output").html(userInput + "<br/> Outlook good");
                input.value = '';
                break;
            case 8:
                $("#output").html(userInput + "<br/> Yes");
                input.value = '';
                break;
            case 9:
                $("#output").html(userInput + "<br/> Signs point to yes");
                input.value = '';
                break;
            case 10:
                $("#output").html(userInput + "<br/> Reply hazy try again");
                input.value = '';
                break;
            case 11:
                $("#output").html(userInput + "<br/> Ask again later");
                input.value = '';
                break;
            case 12:
                $("#output").html(userInput + "<br/> Better not tell you now");
                input.value = '';
                break;
            case 13:
                $("#output").html(userInput + "<br/> Maybe");
                input.value = '';
                break;
            case 14:
                $("#output").html(userInput + "<br/> Maybe so");
                input.value = '';
                break;
            case 15:
                $("#output").html(userInput + "<br/> Don't count on it");
                input.value = '';
                break;
            case 16:
                $("#output").html(userInput + "<br/> My reply is no");
                input.value = '';
                break;
            case 17:
                $("#output").html(userInput + "<br/> My sources say no");
                input.value = '';
                break;
            case 18:
                $("#output").html(userInput + "<br/> Outlook not so good");
                input.value = '';
                break;
            case 19:
                $("#output").html(userInput + "<br/> Very doubtful");
                input.value = '';
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

