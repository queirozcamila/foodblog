function login () {
  let input = document.querySelector("#inputNome")
  let input_name = input.value

    if (input_name == ""){
      alert("Digite um nome primeiro")
    } else {
      alert(input_name)
      sessionStorage.setItem("nomeUsuario", input_name);
      location.href = "/feed.html"
    }
}

let btnlogin = document.querySelector("#btnLogin")

btnlogin.addEventListener("click", login)
