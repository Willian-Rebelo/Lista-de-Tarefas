// estado de aplicação
const tarefas = []

// alteradores de estado da aplicação 
function add() {
    const input = document.querySelector("input")
    const tarefa = input.value
    tarefas.push(tarefa)
    input.value = "" 
    render()
}
  // mostrar estado na tela 
    function render() {
    const ul = document.querySelector("ul")
    ul.innerHTML = null
    
    tarefas.forEach(function (tarefa) {
      const li = document.createElement("li")
      li.innerText = tarefa
      ul.appendChild(li)
      const button=document.createElement("button")
      button.innerHTML= "X"
      button.addEventListener("click" ,function(){
        const index= tarefas.indexOf(tarefa)
        tarefas.splice(index, 1)
        render()
      })
      li.appendChild (button)
    })
    
    }
    // iniciar 
    render()






