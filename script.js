let runs = 0;
let wickets = 0;
let balls = 0;

function updateDisplay() {
  document.getElementById("score").innerText = `Score: ${runs}/${wickets}`;
  document.getElementById("overs").innerText = `Overs: ${Math.floor(balls / 6)}.${balls % 6}`;
  document.getElementById("summaryText").innerText =
    `Runs: ${runs}, Wickets: ${wickets}, Balls: ${balls}`;
}

function addRun(num) {
  runs += num;
  updateDisplay();
}

function addWicket() {
  if (wickets < 10) wickets++;
  updateDisplay();
}

function nextBall() {
  balls++;
  updateDisplay();
}

function resetMatch() {
  if (confirm("Reset match data?")) {
    runs = 0;
    wickets = 0;
    balls = 0;
    updateDisplay();
  }
}

updateDisplay();
