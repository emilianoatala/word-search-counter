const verifyWord = (word, result) => {
    let count = 0
    if (result === word.toUpperCase()) count++
    if (result.split("").reverse().join("") === word.toUpperCase()) count++
    return count
}

const verifyArrayAxisX = (array, word) => {
    let count = 0

    if (array.length === word.length) {
        let result = ""
        array.forEach(item => result += item)
        count += verifyWord(word, result)
    }
    else if (array.length > word.length) {
        array.forEach((value, index) => {
            if (index <= array.length - word.length) {
                let result = ""
                for (let i = 0; i < word.length; i++) result += array[index + i]
                count += verifyWord(word,result)
            }
        })
    }
    return count
}

const verifyArrayAxisY = (array, word) => {
    let count = 0

    if (array.length >= word.length) {
        for (let index = 0; index < array[0].length; index++){
            let result = []
            array.forEach(value => result.push(value[index]) )
            count += verifyArrayAxisX(result,word)
        }
    }
    return count
}

const verifyArrayDiagonal = (array, word)=>{
    let count = 0

    if (array.length >= word.length) {
        for (let i = 0; i < array.length; i++){
            for (let j = 0; j < array[i].length; j++){
                if ((j <= array[i].length - word.length) && (i<= array.length - word.length) ) {
                    let resultRight = []
                    for (let k = 0; k < word.length; k++) resultRight.push(array[k+i][k + j])
                    count += verifyArrayAxisX(resultRight,word)
                }
                if ((j >= word.length - 1) && (i<= array.length - word.length)) {
                    let resultLeft = []
                    for (let k = 0; k < word.length; k++) resultLeft.push(array[i + k][j-k])
                    count += verifyArrayAxisX(resultLeft,word)
                }
            }
        }
    }
    return count
}

export const verifyAllArrayAxis = (data, selectedItem, word) => {
    let value = 0
    data[selectedItem].forEach(item => value += verifyArrayAxisX(item, word))
    value += verifyArrayAxisY(data[selectedItem], word)
    value += verifyArrayDiagonal(data[selectedItem], word)
    return value
}

