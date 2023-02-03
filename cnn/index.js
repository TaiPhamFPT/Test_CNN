const arr1 = [1, 3, 4, 2, 7, 9, 10, 6, 8]
const arr2 = [1, 3, 9, 11, 5, 7, 13]

function timSoChung(arr1, arr2) {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1)
            }
        }
    }
    return result
}

console.log(timSoChung(arr1, arr2));