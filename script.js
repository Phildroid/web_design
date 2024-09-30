const quizData = [
    {
        question: "Which of these is not a 300L CSC student?",
        a: "Opeyemi",
        b: "Philemon",
        c: "Godwin",
        d: "Tolulope",
        correct: "a",
    },
    {
        question: "Who teaches CSC 341?",
        a: "Dr. Ayinla",
        b: "Professor Onifade",
        c: "Prof. Akinola",
        d: "Dr. Ayorinde",
        correct: "d",
    },
    {
        question: "What is the matric number of Akande Teniayo?",
        a: "230881",
        b: "230907",
        c: "230908",
        d: "230886",
        correct: "d",
    },
    {
        question: "What post does Peace Afolabi hold in NACOS-UI?",
        a: "Treasurer",
        b: "President",
        c: "Secretary",
        d: "none of the above",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})