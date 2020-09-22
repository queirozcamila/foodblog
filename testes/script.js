// alert("Oi eu sou um script")

let btnAdd = document.querySelector("#add");

function cadastrarTarefa () {

let input = document.querySelector("input");
let new_tarefa = input.value
alert(new_tarefa)
let ulLista = document.querySelector("ul")

ulLista.insertAdjacentHTML("beforeend","<li> ${new_tarefa}</li>")
}

btnAdd.addEventListener('click', cadastrarTarefa)

