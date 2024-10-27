const up = document.querySelector(".up")
const down = document.querySelector(".down")
const left = document.querySelector(".left")
const right = document.querySelector(".right")
const obj = document.querySelector(".object")
let x = 5
let y = 5

updatePosition()

right.onclick = moveRight
left.onclick = moveLeft
down.onclick = moveDown
up.onclick = moveUp

function moveRight() {
    if (x > innerWidth - 40) return
    x += 10
    updatePosition()
}

function moveLeft() {
    if (x < 10) return
    x -= 10
    updatePosition()
}

function moveUp() {
    if (y < 10) return
    y -= 10
    updatePosition()
}

function moveDown() {
   if (y > innerHeight - 40) return
    y += 10
    updatePosition()
}


function updatePosition() {
    obj.style.left = x + "px"
    obj.style.top = y + "px"
}