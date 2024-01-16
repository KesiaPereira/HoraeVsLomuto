class OrdenacaoQuickSort {
  static quicksortHoare(arr, left = 0, right = arr.length - 1, swapCount = { count: 0 }) {
    if (left < right) {
      const partitionIndex = this.partitionHoare(arr, left, right, swapCount);
      this.quicksortHoare(arr, left, partitionIndex, swapCount);
      this.quicksortHoare(arr, partitionIndex + 1, right, swapCount);
    }

    return swapCount.count;
  }

  static partitionHoare(arr, left, right, swapCount) {
    const pivot = arr[Math.floor((left + right) / 2)];
    let i = left - 1;
    let j = right + 1;

    while (true) {
      do {
        i++;
      } while (arr[i] < pivot);

      do {
        j--;
      } while (arr[j] > pivot);

      if (i >= j) {
        return j;
      }

      // Swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
      swapCount.count++; // Incrementar o contador de trocas
    }
  }

  static quicksortLomuto(arr, low = 0, high = arr.length - 1) {
    // Adicionando um contador para a quantidade de trocas
    const swapCount = { count: 0 };

    if (low < high) {
      const partitionIndex = this.partitionLomuto(arr, low, high, swapCount);
      this.quicksortLomuto(arr, low, partitionIndex - 1, swapCount);
      this.quicksortLomuto(arr, partitionIndex + 1, high, swapCount);
    }

    return swapCount.count; // Retornar o número total de trocas
  }

  static partitionLomuto(arr, low, high, swapCount) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swapCount.count++; // Incrementar o contador de trocas
      }
    }

    // Troca do pivô para a posição correta
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    swapCount.count++; // Incrementar o contador de trocas para a troca final do pivô

    return i + 1;
  }
}

module.exports = OrdenacaoQuickSort;
