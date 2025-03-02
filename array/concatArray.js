// 合并两个有序数组

// 方法1: 两数组比较
function mergeArrays(arr1, arr2) {
    let mergedArray = [];
    let index1 = 0;
    let index2 = 0;

    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            mergedArray.push(arr1[index1]);
            index1++;
        } else {
            mergedArray.push(arr2[index2]);
            index2++;
        }
    }

    // 将剩余的元素追加到合并数组中
    while (index1 < arr1.length) {
        mergedArray.push(arr1[index1]);
        index1++;
    }

    while (index2 < arr2.length) {
        mergedArray.push(arr2[index2]);
        index2++;
    }

    return mergedArray;
}




// 方法2:递归
function mergeArrays(arr1, arr2) {
    if (arr1.length === 0) {
        return arr2;
    }

    if (arr2.length === 0) {
        return arr1;
    }

    if (arr1[0] < arr2[0]) {
        return [arr1[0], ...mergeArrays(arr1.slice(1), arr2)];
    } else {
        return [arr2[0], ...mergeArrays(arr1, arr2.slice(1))];
    }
}


//   方法3:使用concat合并后排序
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a - b);
}

