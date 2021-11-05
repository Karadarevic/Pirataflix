var lista = [
    "https://criticalhits.com.br/wp-content/uploads/2020/01/dragon-ball-z-filme-dead-zone-01.jpg",
    "https://img.elo7.com.br/product/zoom/1E0EB9C/poster-cartaz-o-poderoso-chefao-chefao.jpg"
];


document.write("<img class='first' src=" + lista[0] + ">");
document.write("<img class='first' src=" + lista[1] + ">");


//function layout (lista){

  //for (var i = 0; i < lista.length; i++){

    //var lista = lista[i]

    //document.write("<img class='first' src=" + lista[i] + ">");
  //}
//}

  
function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
      listarFilmesNaTela(filmeFavorito);
    } else {
      console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
}
  
function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}


var film = document.getElementById("listaFilmes");

film.addEventListener("dblclick", function(event){
   event.target.parentNode.classList.add("fadeOut");

   setTimeout(function(){
    event.target.parentNode.remove();
   }, 500);    
});
