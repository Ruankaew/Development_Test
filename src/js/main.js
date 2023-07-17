const inputNumber = document.getElementById('inputNumber')
const equalButton = document.getElementById('equalButton')
const notEqualButton = document.getElementById('notEqualButton')
const greaterThanButton = document.getElementById('greaterThanButton')
const greaterThanOrEqualButton = document.getElementById('greaterThanOrEqualButton')
const output = document.getElementById('output')

equalButton.addEventListener('click',function () {
    const value = +inputNumber.value
    const result = value === 10
    output.innerText = result + ''
})

notEqualButton.addEventListener('click',function () {
    const value = +inputNumber.value
    const result = value !== 10
    output.innerText = result + ''
})

greaterThanButton.addEventListener('click',function () {
    const value = +inputNumber.value
    const result = value > 10
    output.innerText = result + ''
})

greaterThanOrEqualButton.addEventListener('click',function () {
    const value = +inputNumber.value
    const result = value >= 10
    output.innerText = result + ''
})