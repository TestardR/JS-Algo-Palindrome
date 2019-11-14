/* palindromeChecker('racecar') // will return true */

const str = "racecar"

/* function palindromeChecker(str) {
    var reversedString = str.split('').reverse().join('')

    return str === reversedString ? true : false
} */

/* function palindromeChecker(str) {
    var reversedString = [...str].reverse().join('')

    return str === reversedString ? true : false
}
 */

function palindromeChecker(str) { 
    let charArray = [...str.toLowerCase()]
    
    let result = charArray.every((letter, index) => {
        return letter === charArray[charArray.length - index - 1]
    })

    return result
}


console.log(palindromeChecker(str))