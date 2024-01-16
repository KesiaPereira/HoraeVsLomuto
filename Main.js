const OrdenacaoQuickSort = require('./OrdenacaoQuickSort');
const Cronometro = require('./Cronometro');
const PreencherAleatorio = require('./PreencherAleatorio');

function main(){
    const preenchimentoAutomatico = new PreencherAleatorio();
    const cronometro = new Cronometro();

    // Tamanhos das listas: 100, 500, 1000, 5000, 30000, 80000, 100000, 150000, 200000
    const tamanhoLista = 200000; // Altere conforme necessário
    const lista = PreencherAleatorio.criarLista(tamanhoLista);

    console.log(`\n***** Lista de ${lista.length} elementos *****`);

    // Criando cópias da lista para cada algoritmo
    const listaAuxiliar1 = [...lista];
    const listaAuxiliar2 = [...lista];

    cronometro.iniciar();
    const quicksortHoare = OrdenacaoQuickSort.quicksortHoare(listaAuxiliar1);
    const tempoDuracao1 = cronometro.parar();

    cronometro.iniciar();
    const quicksortLomuto = OrdenacaoQuickSort.quicksortLomuto(listaAuxiliar2);
    const tempoDuracao2 = cronometro.parar();

    // Imprimir os resultados
    console.log('\nResultados:');
    console.log(`- Método Hoare: ${quicksortHoare} trocas, ${cronometro.formatarTempo(tempoDuracao1)}`);
    console.log(`- Método Lomuto: ${quicksortLomuto} trocas, ${cronometro.formatarTempo(tempoDuracao2)}`);

}

// Verifica se o script está sendo executado diretamente
if (require.main === module) {
    main();
}