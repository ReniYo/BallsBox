let colorEl = document.getElementById("color")
let countEl = document.getElementById("count")
const ballsBtn = document.getElementById("balls-btn")
const enoughBallsBtn = document.getElementById("enough-balls-btn")
const ballsInBoxEl = document.getElementById("balls-in-box")
const resultEl = document.getElementById("result")
let ballsInBox = []
let biggestCount = 0
let totalCount = 0
let html = ''

document.addEventListener("click", function(e) {
    if(e.target.id === "balls-btn") {
        hadleAddBalls()
    }else if(e.target.id === "enough-balls-btn"){
        renderResult()
    }
})

function hadleAddBalls() {
    resultEl.textContent = ''
    ballsInBoxEl.textContent = ''
    if(countEl.value > 0){
        ballsInBox.push(
            {
                color: colorEl.value,
                count: countEl.value,
            }
        )
    }else{
        resultEl.innerHTML = `<p class="final-msg">Please, choose a count for the balls.</p>`
    }
    
    for(let ball of ballsInBox){
            ballsInBoxEl.innerHTML += `
                <div class="ball-style" style="background-color:${ball.color};">
                    <h3 class="ball-count-style">${ball.count}</h3>
                </div>
        `
    }
    
    colorEl.value = ''
    countEl.value = ''
}

function renderResult() {
    resultEl.innerHTML = handleEnoughBallsBtn()
}

function handleEnoughBallsBtn() {
    if(ballsInBox.length > 0) {
        ballsBtn.disabled = true
        for(let balls of ballsInBox){
            if(Number(balls.count) > biggestCount) {
                biggestCount = balls.count
            }
            totalCount += Number(balls.count)
        } 
        html = `<p class="final-msg">If you are lucky you will have to take out ${totalCount-biggestCount} 
        balls to have only one color in the box.</p>`
    }else{
        html = `<p class="final-msg">Please, add balls in the box.</p>`
    }
    return html
}