
//Exercise 1
function equation(userInput1, userInput2){
    if(userInput1 === userInput2){
        return "Inputs are equal"
    }else{
        return "Inputs are not equal"
    }
}

console.log(equation(10, 10))
console.log(equation("10", 10))
console.log(equation(10, 9))
console.log(equation(10, "sandro"))



//Exercise 2
function farenheit(userInput){
    if(typeof userInput !== 'number'){
        return false
    }else{
        let convertIntoCelsius = (userInput - 32) * 5/9
        return convertIntoCelsius
    }
}

console.log(farenheit(10))
console.log(farenheit(94))
console.log(farenheit("10"))
console.log(farenheit("sandro"))



//Exercise 3
function calculation(a, b, oper){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return false
    }

    if(oper === '+'){
        return a + b
    }else if(oper === '-'){
        return a - b
    }else if(oper === '*'){
        return a * b
    }else if(oper === '/'){
        return a / b
    }else{
        return false
    }
}

console.log(calculation(10, 5, '+'))
console.log(calculation(10, 5, '/'))
console.log(calculation(10, 5, '='))
console.log(calculation("10", 5, '+'))
console.log(calculation(10, "5", '+'))