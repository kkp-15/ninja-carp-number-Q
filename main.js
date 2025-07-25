const players = [
  { "number": "!", "name": "スラィリー" },
  { "number": "00", "name": "羽月 隆太郎" },
  { "number": "0", "name": "上本 崇司" },
  { "number": "2", "name": "田中 広輔" },
  { "number": "4", "name": "矢野 雅哉" },
  { "number": "5", "name": "小園 海斗" },
  { "number": "7", "name": "堂林 翔太" },
  { "number": "9", "name": "秋山 翔吾" },
  { "number": "10", "name": "佐々木 泰" },
  { "number": "12", "name": "大道 温貴" },
  { "number": "13", "name": "森浦 大輔" },
  { "number": "14", "name": "大瀬良 大地" },
  { "number": "16", "name": "森 翔平" },
  { "number": "17", "name": "常廣 羽也斗" },
  { "number": "18", "name": "森下 暢仁" },
  { "number": "19", "name": "床田 寛樹" },
  { "number": "20", "name": "栗林 良吏" },
  { "number": "21", "name": "中﨑 翔太" },
  { "number": "22", "name": "髙 太一" },
  { "number": "24", "name": "黒原 拓未" },
  { "number": "25", "name": "新井 貴浩" },
  { "number": "26", "name": "益田 武尚" },
  { "number": "27", "name": "會澤 翼" },
  { "number": "28", "name": "佐藤 柳之介" },
  { "number": "29", "name": "ケムナ 誠" },
  { "number": "30", "name": "滝田 一希" },
  { "number": "31", "name": "坂倉 将吾" },
  { "number": "32", "name": "石原 貴規" },
  { "number": "33", "name": "菊池 涼介" },
  { "number": "34", "name": "高橋 昂也" },
  { "number": "35", "name": "赤塚 健利" },
  { "number": "36", "name": "塹江 敦哉" },
  { "number": "37", "name": "野間 峻祥" },
  { "number": "38", "name": "宇草 孔基" },
  { "number": "39", "name": "長谷部 銀次" },
  { "number": "40", "name": "磯村 嘉孝" },
  { "number": "41", "name": "鈴木 健矢" },
  { "number": "42", "name": "ドミンゲス" },
  { "number": "43", "name": "島内 颯太郎" },
  { "number": "44", "name": "林 晃汰" },
  { "number": "45", "name": "松本 竜也" },
  { "number": "46", "name": "河野 佳" },
  { "number": "47", "name": "斉藤 優汰" },
  { "number": "48", "name": "アドゥワ 誠" },
  { "number": "49", "name": "渡邉 悠斗" },
  { "number": "50", "name": "中村 健人" },
  { "number": "52", "name": "末包 昇大" },
  { "number": "53", "name": "岡本 駿" },
  { "number": "54", "name": "韮澤 雄也" },
  { "number": "55", "name": "松山 竜平" },
  { "number": "56", "name": "久保 修" },
  { "number": "57", "name": "持丸 泰輝" },
  { "number": "58", "name": "仲田 侑仁" },
  { "number": "59", "name": "大盛 穂" },
  { "number": "60", "name": "田村 俊介" },
  { "number": "61", "name": "ファビアン" },
  { "number": "62", "name": "清水 叶人" },
  { "number": "63", "name": "内田 湘大" },
  { "number": "64", "name": "髙木 翔斗" },
  { "number": "65", "name": "玉村 昇悟" },
  { "number": "66", "name": "遠藤 淳志" },
  { "number": "67", "name": "菊地 ハルン" },
  { "number": "68", "name": "ハーン" },
  { "number": "69", "name": "山足 達也" },
  { "number": "70", "name": "日髙 暖己" },
  { "number": "94", "name": "佐藤 啓介" },
  { "number": "95", "name": "モンテロ" },
  { "number": "96", "name": "中村 奨成" },
  { "number": "97", "name": "中村 貴浩" },
  { "number": "99", "name": "二俣 翔一" },
  { "number": "120", "name": "杉田 健" },
  { "number": "121", "name": "名原 典彦" },
  { "number": "122", "name": "安竹 俊喜" },
  { "number": "123", "name": "小船 翼" },
  { "number": "125", "name": "辻 大雅" },
  { "number": "126", "name": "竹下 海斗" },
  { "number": "127", "name": "前川 誠太" },
  { "number": "128", "name": "杉原 望来" },
  { "number": "129", "name": "小林 樹斗" },
  { "number": "130", "name": "ラミレス" },
  { "number": "131", "name": "ロベルト" }
];

let score = 0;
let timeLeft = 60;
let timerId;
let currentQuestion = null;

const startBtn = document.getElementById("startBtn");
const timerDiv = document.getElementById("timer");
const scoreDiv = document.getElementById("score");
const questionDiv = document.getElementById("question");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const judgeDiv = document.getElementById("judge");
const resultDiv = document.getElementById("result");
const shareDiv = document.getElementById("share");
const shareLink = document.getElementById("shareLink");

startBtn.addEventListener("click", () => {
  clearInterval(timerId);
  score = 0;
  timeLeft = 60;
  scoreDiv.textContent = `得点: ${score}`;
  timerDiv.textContent = `残り時間: ${timeLeft}秒`;
  resultDiv.style.display = "none";
  shareDiv.style.display = "none";

  timerDiv.style.display = "block";
  scoreDiv.style.display = "block";
  questionDiv.style.display = "block";
  btn1.style.display = "inline-block";
  btn2.style.display = "inline-block";

  nextQuestion();

  timerId = setInterval(() => {
    timeLeft--;
    timerDiv.textContent = `残り時間: ${timeLeft}秒`;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      endGame();
    }
  }, 1000);
});

btn1.addEventListener("click", () => handleAnswer(btn1.textContent));
btn2.addEventListener("click", () => handleAnswer(btn2.textContent));

function nextQuestion() {
  const correct = players[Math.floor(Math.random() * players.length)];
  let wrong;
  do {
    wrong = players[Math.floor(Math.random() * players.length)];
  } while (wrong.number === correct.number);

  currentQuestion = correct;
  questionDiv.textContent = `${correct.name} の背番号は？`;

  const isFirst = Math.random() < 0.5;
  btn1.textContent = isFirst ? correct.number : wrong.number;
  btn2.textContent = isFirst ? wrong.number : correct.number;
}

function handleAnswer(selected) {
  const isCorrect = selected === currentQuestion.number;
  showJudge(isCorrect);
  score += isCorrect ? 1 : -1;
  scoreDiv.textContent = `得点: ${score}`;
  setTimeout(nextQuestion, 600);
}

function showJudge(isCorrect) {
  judgeDiv.style.display = "block";
  judgeDiv.textContent = isCorrect ? "⭕️" : "❌️";
  judgeDiv.style.color = isCorrect ? "green" : "red";
  setTimeout(() => {
    judgeDiv.style.display = "none";
  }, 500);
}

function endGame() {
  questionDiv.style.display = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
  resultDiv.style.display = "block";
  resultDiv.textContent = `あなたのスコア: ${score} 点`;

  const tweet = `CARP NUMBER QUIZ 2025\nスコア: ${score} 点\n#カープ #クイズ\n\nhttps://kkp-15.github.io/carp-number-Q/?v=2\n\n@kkp_webninja`;
  shareLink.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
  shareDiv.style.display = "block";
}
