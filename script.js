
const questions = [
  { q: "Qual grupo tem um universo chamado 'BU'?", a: "bts" },
  { q: "Qual girlgroup da HYBE lançou 'OMG' e 'Hype Boy'?", a: "newjeans" },
  { q: "Qual boygroup da HYBE foi formado através do I-LAND?", a: "enhypen" },
  { q: "Qual girlgroup da HYBE tem uma integrante chamada Sakura?", a: "le sserafim" },
  { q: "Qual grupo da HYBE tem units como Hip Hop Team e Performance Team?", a: "seventeen" },
];

let current = 0;

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("startBtn").classList.add("hidden");
  showQuestion();
});

document.getElementById("submitBtn").addEventListener("click", () => {
  const input = document.getElementById("answerInput").value.trim().toLowerCase();
  if (input === questions[current].a.toLowerCase()) {
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      document.getElementById("quiz").classList.add("hidden");
      document.getElementById("result").classList.remove("hidden");
    }
  }
});

function showQuestion() {
  document.getElementById("question").innerText = questions[current].q;
  document.getElementById("answerInput").value = "";
}
