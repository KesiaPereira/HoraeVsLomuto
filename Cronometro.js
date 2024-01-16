class Cronometro {
    constructor() {
        this.tempoInicial = 0;
    }

    iniciar() {
        this.tempoInicial = Date.now();
    }

    parar() {
        if (this.tempoInicial !== null) {
            const tempoDecorrido = Math.floor(Date.now() - this.tempoInicial);
            this.tempoInicial = null;
            return tempoDecorrido;
        } else {
            return 0;
        }
    }

    formatarTempo(milissegundos) {
        const horas = Math.floor(milissegundos / (1000 * 60 * 60));
        const minutos = Math.floor((milissegundos % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((milissegundos % (1000 * 60)) / 1000);
        const milissegundosRestantes = milissegundos % 1000;

        const tempoFormatado = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}.${String(milissegundosRestantes).padStart(3, '0')}`;

        return tempoFormatado;
    }
}

// Exportando a classe para ser utilizada em outros arquivos
module.exports = Cronometro;
