const startButton = document.getElementById('start-btn')
const mainPageElement = document.getElementById('content')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('hello')
    startButton.classList.add('hide')
    mainPageElement.classList.remove('hide')
}


const questions = [

]
