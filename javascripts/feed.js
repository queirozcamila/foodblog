async function exibirPosts() {
  const response = await fetch("https://foodgram-back.herokuapp.com/posts");
  const arrayDeFotos = await response.json();

  let main = document.querySelector("main")

  arrayDeFotos.forEach(post){

    main.insertAdjacentHtml()

  }

}

