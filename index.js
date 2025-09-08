const questions = ['vart ligger sverige']
const answers = ['norden']
const questionText = document.querySelector('#Fraga')
let currentQuestion = 0
questionText.textContent = questions[currentQuestion]
const userInput = document.querySelector('input')
const sendButton = document.querySelector('button')
sendButton.addEventListener('click', () => {
  console.log('click')
  if (userInput.value === answers[currentQuestion]) {
    rightAnswer()
  } else {
    wrongAnswer()
  }
})
function rightAnswer() {
  console.log('Rätt!')
  currentQuestion++
}
function wrongAnswer() {
  console.log('Fel!')
  questionText.textContent = 'You Failed'
}
