// ordenando lista em ordem crescente dando espaço
         function orderNGroup(lista) {
            lista = [...new Set(lista)].sort((a, b) => a - b).join("");
            console.log(listaNova);
        }
        orderNGroup([7, 3, 15, 0, -2, 6, -5, 100, 1, 14, -1, 100, 5]);
