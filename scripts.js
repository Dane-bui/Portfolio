const questions = [
  {
    text: "Solar energy",
    isRenewable: true,
    explanation: "Solar energy is renewable because sunlight is constantly available."
  },
  {
    text: "Coal",
    isRenewable: false,
    explanation: "Coal is non‑renewable because it takes millions of years to form."
  },
  {
    text: "Wind power",
    isRenewable: true,
    explanation: "Wind is naturally replenished and does not run out."
  },
  {
    text: "Oil (petroleum)",
    isRenewable: false,
    explanation: "Oil is a fossil fuel that cannot be replaced once used."
  },
  {
    text: "Hydropower",
    isRenewable: true,
    explanation: "Hydropower uses flowing water, which is naturally renewed by the water cycle."
  },
  {
    text: "Natural gas",
    isRenewable: false,
    explanation: "Natural gas is a fossil fuel and takes millions of years to form."
  },
  {
    text: "Geothermal energy",
    isRenewable: true,
    explanation: "Geothermal energy comes from Earth's heat, which is continuously produced."
  },
  {
    text: "Nuclear energy (uranium)",
    isRenewable: false,
    explanation: "Uranium is a finite mineral resource and cannot be replenished."
  }
];

let currentIndex = 0;
let score = 0;

const questionTextEl = document.getElementById("question-text");
const scoreEl = document.getElementById("score");
const questionNumberEl = document.getElementById("question-number");
const totalQuestionsEl = document.getElementById("total-questions");
const feedbackEl = document.getElementById("feedback");
const progressBarEl = document.getElementById("progress-bar");
const btnRenewable = document.getElementById("btn-renewable");
const btnNonrenewable = document.getElementById("btn-nonrenewable");
const btnRestart = document.getElementById("btn-restart");

totalQuestionsEl.textContent = questions.length;

function loadQuestion() {
  if (currentIndex >= questions.length) {
    endGame();
    return;
  }

  const q = questions[currentIndex];
  questionTextEl.textContent = q.text;
  questionNumberEl.textContent = currentIndex + 1;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";

  const progressPercent = (currentIndex / questions.length) * 100;
  progressBarEl.style.width = progressPercent + "%";
}

function handleAnswer(isRenewableChoice) {
  if (currentIndex >= questions.length) return;

  const q = questions[currentIndex];
  const correct = q.isRenewable === isRenewableChoice;

  if (correct) {
    score++;
    scoreEl.textContent = score;
    feedbackEl.textContent = "Correct! " + q.explanation;
    feedbackEl.className = "feedback correct";
  } else {
    feedbackEl.textContent = "Not quite. " + q.explanation;
    feedbackEl.className = "feedback wrong";
  }

  currentIndex++;

  setTimeout(() => {
    loadQuestion();
  }, 900);
}

function endGame() {
  questionTextEl.textContent =
    "Game over! Your final score is " +
    score +
    " out of " +
    questions.length +
    ". Great job learning about Earth’s resources!";

  progressBarEl.style.width = "100%";
  feedbackEl.textContent = "";
  btnRenewable.disabled = true;
  btnNonrenewable.disabled = true;
  btnRestart.style.display = "inline-block";
}

function restartGame() {
  currentIndex = 0;
  score = 0;
  scoreEl.textContent = score;
  btnRenewable.disabled = false;
  btnNonrenewable.disabled = false;
  btnRestart.style.display = "none";
  loadQuestion();
}

btnRenewable.addEventListener("click", () => handleAnswer(true));
btnNonrenewable.addEventListener("click", () => handleAnswer(false));
btnRestart.addEventListener("click", restartGame);

loadQuestion();
