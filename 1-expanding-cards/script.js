//can also use getElementById, 
//querySelectorAll gets all the elements that match and put in a node list or array
const panels = document.querySelectorAll('.panel')
console.log(panels)

panels.forEach((panel) => {
    console.log(panel)
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
        //classList has built in functions you can access like add, remove, etc
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}