class PreencherAleatorio {
    static criarLista(tamanho) {
        const lista = [];

        for (let i = 0; i < tamanho; i++) {
            const numeroAleatorio = Math.floor(Math.random() * 100);
            lista.push(numeroAleatorio);
        }

        return lista;
    }
}

// Exportando a classe para ser utilizada em outros arquivos
module.exports = PreencherAleatorio;
