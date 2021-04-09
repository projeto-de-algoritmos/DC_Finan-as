export const knapsack = (items, capacity) => {
  var memo = [];

  // Preenchimento da grade de soluções dos subproblemas
  for (var i = 0; i < items.length; i++) {
    // A variável 'subCapacity' é a capacidade para subproblemas.
    var row = [];
    for (var subCapacity = 1; subCapacity <= capacity; subCapacity++) {
      row.push(getSolution(i, subCapacity));
    }
    memo.push(row);
  }

  return getLast();

  function getLast() {
    var lastRow = memo[memo.length - 1];
    return lastRow[lastRow.length - 1];
  }

  function getSolution(row, cap) {
    const without_solution = { maxValue: 0, subset: [] };

    var column = cap - 1;
    var lastItem = items[row];

    // Capacidade restante para o subproblema resolver
    var remaining = cap - lastItem.space;

    // Consulta da última solução para esta capacidade, que está na célula
    // da linha anterior com a mesma coluna
    var lastSolution =
      row > 0 ? memo[row - 1][column] || without_solution : without_solution;

    // Consulta da última solução para a capacidade restante, que está na
    // célula anterior com a coluna correspondente
    var lastSubSolution =
      row > 0
        ? memo[row - 1][remaining - 1] || without_solution
        : without_solution;

    // Retorna a última solução caso algum dos itens ocupe um espaço
    // maior que o limite
    if (remaining < 0) {
      return lastSolution;
    }

    // Comparação da melhor solução atual para o subproblema com uma
    // capacidade específica para uma nova solução com o último item
    // (novo item) adicionado
    var lastValue = lastSolution.maxValue;
    var lastSubValue = lastSubSolution.maxValue;
    var newValue = lastSubValue + lastItem.value;

    if (newValue >= lastValue) {
      // Faz a cópia do subconjunto da última solução do subproblema
      var _lastSubSet = lastSubSolution.subset.slice();

      _lastSubSet.push(lastItem);

      return { maxValue: newValue, subset: _lastSubSet };
    } else {
      return lastSolution;
    }
  }
};
