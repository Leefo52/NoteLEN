var notas = [["Nota de Exemplo", "Tente escrever uma nova nota, Esse tipo de coisa é útil para lembrar de tarefas ou organizar ideias! <br> Para criar uma nova nota é fácil, clique no botão adicionar e escreva. "]]

function adicionarNota() {
    const tituloNota = document.getElementById("inputTituloNota");
    const conteudoNota = document.getElementById("inputConteudoNota");
    if (notas.length < 8) {
        notas.push([tituloNota.value, conteudoNota.value]);
        listarNotas();
        document.getElementById("container2").style.visibility = "hidden";
        tituloNota.value = "";
        conteudoNota.value = "";
        alert("Nota criada com sucesso!");
    } else {
        alert("Número máximo de notas atingido!");
    }
}

function listarNotas() {
    const listaNotas = document.getElementById("listaNotas");
    var elementoHtml = "";
    for (i = 0; i < notas.length; i++) {
        elementoHtml += `<div class="nota"><div class="tituloNota">${notas[i][0]}</div><div class="conteudoNota">${notas[i][1]}</div></div>`;
    }
    listaNotas.innerHTML = elementoHtml;
}

function abrirTela2() {
    document.getElementById("container2").style.visibility = "visible";
}

function fecharTela2() {
    document.getElementById("container2").style.visibility = "hidden";
}