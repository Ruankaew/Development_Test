interface Question {
    question: string;
    choices: string[];
    correctAnswer: number;
}

const questions: Question[] = [
    {
        question: 'What is the output of the following code?\n\nconsole.log(typeof null);',
        choices: ['"object"', '"null"', '"undefined"', '"boolean"'],
        correctAnswer: 0,
    },
    {
        question: 'Which method is used to add one or more elements to the end of an array?',
        choices: ['push()', 'join()', 'slice()', 'concat()'],
        correctAnswer: 0,
    },
    {
        question: 'What is the result of the following expression?\n\n3 + 2 + "7"',
        choices: ['"327"', '"12"', '"57"', '"NaN"'],
        correctAnswer: 2,
    },
    {
        question: 'What is the purpose of the "use strict" directive in JavaScript?',
        choices: ['Enforce stricter type checking', 'Enable the use of modern syntax', 'Enable strict mode for improved error handling', 'Disable certain features for better performance'],
        correctAnswer: 2,
    },
    {
        question: 'What is the scope of a variable declared with the "let" keyword?',
        choices: ['Function scope', 'Global scope', 'Block scope', 'Module scope'],
        correctAnswer: 2,
    },
    {
        question: 'Which higher-order function is used to transform elements of an array into a single value?',
        choices: ['map()', 'filter()', 'reduce()', 'forEach()'],
        correctAnswer: 2,
    },
    {
        question: 'What does the "=== " operator in JavaScript check for?',
        choices: ['Equality of values', 'Equality of values and types', 'Inequality of values', 'Reference equality'],
        correctAnswer: 1,
    },
    {
        question: 'What is the purpose of the "this" keyword in JavaScript?',
        choices: ['Refer to the current function', 'Refer to the parent function', 'Refer to the global object', 'Refer to the object that owns the current code'],
        correctAnswer: 3,
    },
    {
        question: 'What does the "NaN" value represent in JavaScript?',
        choices: ['Not a Number', 'Null', 'Negative Number', 'Not Applicable'],
        correctAnswer: 0,
    },
    {
        question: 'Which method is used to remove the last element from an array?',
        choices: ['pop()', 'shift()', 'slice()', 'splice()'],
        correctAnswer: 0,
    },
];


const ex2 = document.getElementById("exercise2") as HTMLDivElement
const div = document.createElement("div")
div.innerText = "Current Score: 0/10"
ex2.appendChild(div);
let f = 0;
for (const {question: q, choices: l, correctAnswer: b} of questions) {
    const div2 = document.createElement("div")
      , p1 = document.createElement("p")
      , div3 = document.createElement("div")
      , bt = document.createElement("button")
      , p2 = document.createElement("p");
    p1.innerText = q;
    const i: HTMLInputElement[] = [];
    let c: number | null;
    for (let t = 0; t < l.length; t++) {
        const u = t
          , div4 = document.createElement("div")
          , ip = document.createElement("input");
        ip.type = "radio";
        const p = document.createElement("span");
        p.innerText = l[u],
        ip.addEventListener("change", ()=>{
            for (const w of i)
                w.checked = !1;
            ip.checked = !0,
            c = u
        }
        ),
        i.push(ip),
        div4.appendChild(ip),
        div4.appendChild(p),
        div3.appendChild(div4)
    }
    bt.innerText = "Submit",
    bt.addEventListener("click", ()=>{
        if (c == null) {
            alert("please choose an answer first!");
            return
        }
        for (const t of i)
            t.disabled = !0;
        bt.disabled = !0,
        c === b ? (p2.innerText = "Correct!",
        f++,
        div.innerText = `Current Score: ${f}/10`) : p2.innerText = "Incorrect!"
    }
    ),
    div2.appendChild(p1),
    div2.appendChild(div3),
    div2.appendChild(bt),
    div2.appendChild(p2),
    ex2.appendChild(div2)
}

export {}