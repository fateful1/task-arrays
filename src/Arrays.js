/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let arr = data.split(',');
    arr = arr.sort((a, b) => a - b);
    return arr.join(',');
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/

export function arrayFiltering(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] > 100) {
            delete data[i];
        }
    }
    return data.filter((x) => {
        if (Number.isInteger(x) === true) return x;
    });
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let result = new Array(10);
    let k = 0;
    for (let i = 0; i < result.length; i += 2) {
        result[i] = array1[k];
        result[i + 1] = array2[k];
        k += 1;
    }
    return result;
}
