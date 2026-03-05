const questions = [
  {
    text: "Installing solar panels on the roof of a school.",
    isClean: true,
    explanation: "Solar power is a renewable, clean energy source that reduces reliance on fossil fuels."
  },
  {
    text: "Leaving lights on all night in empty classrooms.",
    isClean: false,
    explanation: "Wasting electricity increases energy demand and often leads to more fossil fuel use."
  },
  {
    text: "Using energy-efficient LED bulbs instead of old incandescent ones.",
    isClean: true,
    explanation: "LED bulbs use much less electricity and last longer, supporting energy efficiency."
  },
  {
    text: "Running a diesel generator all day when the grid is available.",
    isClean: false,
    explanation: "Diesel generators emit greenhouse gases and air pollution."
  },
  {
    text: "Building a wind farm near a coastal town.",
    isClean: true,
    explanation: "Wind energy is renewable and produces electricity without direct emissions."
  },
  {
    text: "Burning coal to generate electricity for a city.",
    isClean: false,
    explanation: "Coal is one of the most polluting fossil fuels and harms air quality and climate."
  },
  {
    text: "Adding insulation to homes so they stay warm or cool with less energy.",
    isClean: true,
    explanation: "Insulation reduces the energy needed for heating and cooling, improving efficiency."
  },
  {
    text: "Leaving phone and laptop chargers plugged in all the time, even when not in use.",
    isClean: false,
    explanation: "Standby power still uses energy and adds unnecessary demand."
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
const btnClean = document.getElementById("btn-clean");
const btnNotClean = document.getElementById("btn-not-clean");
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

  const progressPercent = ((currentIndex) / questions.length) * 100;
  progressBarEl.style.width = progressPercent + "%";
}

function handleAnswer(isCleanChoice) {
  if (currentIndex >= questions.length) return;

  const q = questions[currentIndex];
  const correct = q.isClean === isCleanChoice;

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
  }, 4500);
}

function endGame() {
  questionTextEl.textContent =
    "Game over! Your final score is " +
    score +
    " out of " +
    questions.length +
    ". Every smart energy choice brings us closer to SDG 7.";

  progressBarEl.style.width = "100%";
  feedbackEl.textContent = "";
  btnClean.disabled = true;
  btnNotClean.disabled = true;
  btnRestart.style.display = "inline-block";
}

function restartGame() {
  currentIndex = 0;
  score = 0;
  scoreEl.textContent = score;
  btnClean.disabled = false;
  btnNotClean.disabled = false;
  btnRestart.style.display = "none";
  loadQuestion();
}

btnClean.addEventListener("click", () => handleAnswer(true));
btnNotClean.addEventListener("click", () => handleAnswer(false));
btnRestart.addEventListener("click", restartGame);

loadQuestion();