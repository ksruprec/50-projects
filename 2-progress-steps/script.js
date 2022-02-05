//bring in elements we need to manipulate

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
//use querySelectorAll because there are multiple and use .cirlce b/c it's a class; will be a node list
const circles = document.querySelectorAll('.circle')

let currentActive = 1

//event listeners
next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
    // console.log(currentActive)
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
    // console.log(currentActive)
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}