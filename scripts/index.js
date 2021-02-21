
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let limit = 15
let colors = ['#2A9D8F', '#E9C46A', '#F4A261', '#E76F51', '#d3d3d3'];
let letters = ['j', 'f', 'k', 'd', ' '];

let begin = document.querySelector(".header__begin")
let progress = document.getElementById("prog")
let buttons = document.querySelector('.buttons')
let subtitle = document.querySelector('.header__subtitle')

function drawBoard() {
    for (let index = 0; index < limit; index++) {
        let rand = getRandomInt(colors.length)
        buttons.insertAdjacentHTML("afterend",
            `<button class='game-button button' style="background-color:${colors[rand]}" id='${letters[rand]}'>${letters[rand]}</button>`);
    }
}

document.addEventListener('keydown', StartGame, {once: true});

function StartGame(e) {
    if (e.key === "Enter") {
        drawBoard()
        progress.style.display = "inline-block"
        subtitle.style.display = "block"
        begin.style.display = "none"
        mainGame()
    }
}

function mainGame() {
    document.addEventListener('keyup', press)
}

let success = 0;
let failed = 0;

function press(e) {

    let gameButtons = document.querySelectorAll(".game-button")

    if (e.key === gameButtons[0].id) {
        gameButtons[0].remove()
        success++
    } else {
        if (e.key === 'Enter') return
        failed++
        progress.value = failed;
        if (failed > limit) {
            let fail = confirm("Game over :( Хотите сыграть еще раз?");
            document.location.reload()

        }
    }
    if (success === limit) {
        alert("Вы выйграли!")
        let win = confirm("Хотите сыграть еще раз?")
        if(win){
            document.location.reload()
            drawBoard();
            begin.style.display = "none"
            mainGame()
        }
    }
}



