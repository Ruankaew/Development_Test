// const inputNumber: HTMLInputElement = document.getElementById('inputNumber') as HTMLInputElement
// const equalButton: HTMLButtonElement = document.getElementById('equalButton') as HTMLButtonElement
// const notEqualButton: HTMLButtonElement = document.getElementById('notEqualButton') as HTMLButtonElement
// const greaterThanButton: HTMLButtonElement = document.getElementById('greaterThanButton') as HTMLButtonElement
// const greaterThanOrEqualButton: HTMLButtonElement = document.getElementById('greaterThanOrEqualButton') as HTMLButtonElement
// const output: HTMLParagraphElement = document.getElementById('output') as HTMLParagraphElement

// equalButton.addEventListener('click',function () {
//     const value: number = +inputNumber.value
//     const result = value === 10
//     output.innerText = result + ''
// })

// notEqualButton.addEventListener('click',function () {
//     const value: number  = +inputNumber.value
//     const result = value !== 10
//     output.innerText = result + ''
// })

// greaterThanButton.addEventListener('click',function () {
//     const value: number  = +inputNumber.value
//     const result = value > 10
//     output.innerText = result + ''
// })

// greaterThanOrEqualButton.addEventListener('click',function () {
//     const value: number  = +inputNumber.value
//     const result = value >= 10
//     output.innerText = result + ''
// })

// export { }

// const person = {
//     name:"Nasan",
//     age:21,
//     hobbies:["listen to music","reading"],
//     address:{
//         street:"12/6",
//         city:"Rayong",
//     }
// }


interface Address {
    street: string
    city: string
    country?: string
}

interface Person {
    name: string
    age: number
    address: Address
    hobbies: string[]
}


const person: Person = {
    name: "Nasan",
    age: 21,
    hobbies: ["listen to music", "reading"],
    address: {
        street: "12/6",
        city: "Rayong",
    }
}

function DisplayDetail(person: Person): string {
    return "Name: " + person.name + "   " + "Age: " + person.age
}

console.log(DisplayDetail(person))
console.log(DisplayDetail({
    name: "William",
    age: 99,
    hobbies: ["listen to music", "reading"],
    address: {
        street: "12/6",
        city: "Rayong",
    }
}))

const addresses:Address[] = [
    {city:"a",street:"a",country:"a"},
    {city:"b",street:"b",country:"b"},
    {city:"c",street:"c",country:"c"},
]

console.log("addresses",addresses)

export { }