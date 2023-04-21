// javascript
let colorEl = document.getElementById("color")
let countEl = document.getElementById("count")
const ballsBtn = document.getElementById("balls-btn")
const enoughBallsBtn = document.getElementById("enough-balls-btn")
const ballsInBoxEl = document.getElementById("balls-in-box")
const resultEl = document.getElementById("result")
let ballsInBox = []
let biggestCount = 0
let totalCount = 0

ballsBtn.addEventListener("click", function(){
    ballsInBoxEl.textContent = ''
    ballsInBox.push(
        {
            color: colorEl.value,
            count: countEl.value,
        }
    )
    
    for(let ball of ballsInBox){
            ballsInBoxEl.innerHTML += `
                <div class="ball-style" style="background-color:${ball.color};">
                <h3 class="ball-count-style">${ball.count}</h3>
                </div>
        `
    }
    
    console.log(ballsInBox)
    colorEl.value = ''
    countEl.value = ''
})

enoughBallsBtn.addEventListener("click", function(){
    ballsBtn.disabled = true
    for(let balls of ballsInBox){
            if(Number(balls.count) > biggestCount) {
                biggestCount = balls.count
            }
        totalCount += Number(balls.count)
    } 
    console.log(biggestCount)
    console.log(totalCount)
    renderResult()
})

function renderResult() {
    resultEl.innerHTML = `
        <p class="final-msg">If you are lucky you will have to take out ${totalCount-biggestCount} balls to have only one color in the box.</p>
    `
}

