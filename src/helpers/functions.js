export const verifyWord = (word, result) => {
    let count = 0
    if (result === word.toUpperCase()) count++
    if (result.split("").reverse().join("") === word.toUpperCase()) count++
    console.log("normal: ", result)
    console.log("reverse: ", result.split("").reverse().join(""))
    return count
}

export const verifyArrayAxisX = (array, word) => {
    let count = 0

    if (array.length === word.length) {
        let result = ""
        array.forEach(item => result += item)
        console.log(result)
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

export const verifyArrayAxisY = (array, word) => {
    let count = 0

    if (array.length >= word.length) {
        for (let index = 0; index < array[0].length; index++){
            let result = []
            array.forEach(value => {
                 result.push(value[index]) 
            })
            count += verifyArrayAxisX(result,word)
        }
    }
    return count
}