/* 
    OBJETIVO quando clicar no pokedev da listagen temos que esconder o cartão do pokedev aberto e mostrar o cartão correspondente as que foi selecionado na listagem
        PASSO 1 - precisamos criar una variável to 35 pra trabalhar com a listagen de pokedevs
        PASSO 2 - Identificar o evento de clique no elemento da listagem
        PASSO 3 - remover a classe aberto so do cartão que té aberto
        PASSO 4 - ao clican en un pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir
        PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagens
        PASSO 6 - adicinar a classe ativo no pakedev selecionado na listagem 
*/


const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        esconderCartaoPokedev();

        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

        desativarPokedevNaListagem();
        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
    })
})

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
