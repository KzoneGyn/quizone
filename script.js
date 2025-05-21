const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result");
const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answer");
const submitBtn = document.getElementById("submit-btn");
const selectSound = document.getElementById("select-sound");

const questions = [
  { question: "Qual grupo tem um universo chamado 'BU'?", answer: "bts" },
  { question: "Qual girlgroup da HYBE lançou 'OMG' e 'Hype Boy'?", answer: "newjeans" },
  { question: "Qual boygroup da HYBE foi formado através do I-LAND?", answer: "enhypen" },
  { question: "Qual girlgroup da HYBE tem uma integrante chamada Sakura?", answer: "le sserafim" },
  { question: "Qual grupo da HYBE tem units como Hip Hop Team e Performance Team?", answer: "seventeen" }
];

let currentQuestion = 0;

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  quizContainer.classList.remove("hidden");
  showQuestion();
});

submitBtn.addEventListener("click", () => {
  const userAnswer = answerInput.value.toLowerCase().trim();
  selectSound.play();
  if (userAnswer === questions[currentQuestion].answer) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
      answerInput.value = "";
    } else {
      quizContainer.classList.add("hidden");
      resultContainer.classList.remove("hidden");
    }
  } else {
    alert("Resposta incorreta, tente novamente!");
  }
});

function showQuestion() {
  questionEl.textContent = questions[currentQuestion].question;
}
