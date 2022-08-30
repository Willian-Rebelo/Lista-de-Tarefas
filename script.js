const input = document.querySelector("input")
const ul = document.querySelector("ul")
let array = []

function add() {
    array.push(input.value)
    input.value = ''
    render()
    console.log(array)
};

function render(){
    ul.innerHTML = null
    array.forEach(function(tarefa){
        const li = document.createElement('li')
        li.innerHTML = tarefa
        ul.appendChild(li)
    })
};

function limpar () {
    array = []
    ul.innerHTML = null
}




