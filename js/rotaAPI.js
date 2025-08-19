async function buscarMensagem() {
    try {
        const resposta = await fetch("http://localhost:8000/api/hello");
        const dados = await resposta.json();
        console.log(dados.message);
    } catch (error) {
        console.error("Erro na API:", error);
    }
}

buscarMensagem();
