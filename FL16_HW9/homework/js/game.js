import { random } from './random.js';

export function game() {

    const paper = document.getElementById('paper'),
        rock = document.getElementById('rock'),
        scissors = document.getElementById('scissors'),
        start = document.getElementById('startGame'),
        hands = document.getElementById('hands'),
        result = document.getElementById('result'),
        opponentImage = document.getElementById('opponentImage');

    let round,
        opponent = document.getElementById('opponent'),
        opponentCount = 0,
        myCount = 0;

    function over() {
        ++round;
        if (round > 3) {
            hands.style.visibility = 'hidden'
            start.innerHTML = 'Restart'
            opponentImage.innerHTML = ''

            if(myCount > opponentCount){
                result.innerHTML  =`YOU WON!Your points:${myCount} and Opponent points:${opponentCount}`
    
            }else if(myCount < opponentCount){
                result.innerHTML  =`YOU LOSE! Your points:${myCount} and Opponent points:${opponentCount}`
                
            }else{
                result.innerHTML  =`DRAW! Your points:${myCount} and Opponent points:${opponentCount}`
            }
        }
    }

    start.addEventListener('click', () => {
        hands.style.visibility = 'visible'
        start.innerHTML = 'Let`s play!'
        result.innerHTML  =''
        opponentImage.innerHTML = ''
        round = 1;
        opponentCount = 0;
        myCount = 0;
    })

    paper.addEventListener('click', () => {

        opponent = random()
       
        if (opponent === 'scissors') {
            opponentCount++;
            opponentImage.innerHTML = '<img src="img/scissors.png" alt="Paper" class="game opponent">'
            result.innerHTML = 'You lose!'


        } else if (opponent === 'rock') {
            myCount++;
            opponentImage.innerHTML = '<img src="img/rock.png" alt="Paper" class="game opponent">'
            result.innerHTML = 'You Won!'

        } else {
            opponentImage.innerHTML = '<img src="img/paper.png" alt="Paper" class="game opponent">'
            result.innerHTML = 'Draw!'

        }
        over();

    })

    rock.addEventListener('click', () => {

        opponent = random()
    
        if (opponent === 'paper') {
            opponentCount++;
            opponentImage.innerHTML = '<img src="img/paper.png" alt="Paper" class="game opponent">'
            result.innerHTML = 'You lose!'


        } else if (opponent === 'scissors') {
            myCount++;
            opponentImage.innerHTML = '<img src="img/scissors.png" alt="Paper" class="game opponent">'
            result.innerHTML = 'You Won!'

        } else {
            opponentImage.innerHTML = '<img src="img/rock.png" alt="Paper" class="game opponent">'
            result.innerHTML = 'Draw!'
        }
        over();
    })
    scissors.addEventListener('click', () => {

        
        opponent = random()
        if (opponent === 'rock') {
            opponentCount++;
            opponentImage.innerHTML = '<img src="img/rock.png" alt="Paper" class="game opponent">'
            result.innerHTML = 'You lose!'

        } else if (opponent === 'paper') {
            myCount++;
            opponentImage.innerHTML = '<img src="img/paper.png" alt="Paper" class="game opponent">'
            result.innerHTML = 'You Won!'

        } else {
            opponentImage.innerHTML = '<img src="img/scissors.png" alt="Paper" class="game opponent">'
            result.innerHTML = 'Draw!'
        }
        over();
    })
}

