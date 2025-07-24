const players = [
  { name: "羽月 隆太郎", number: "00" },
  { name: "上本 崇司", number: "00" },
  { name: "田中 広輔", number: "02" },
  { name: "矢野 雅哉", number: "04" },
  { name: "小園 海斗", number: "05" },
  { name: "堂林 翔太", number: "07" },
  { name: "秋山 翔吾", number: "09" },
  { name: "佐々木 泰", number: "10" },
  { name: "大道 温貴", number: "12" },
  { name: "森浦 大輔", number: "13" },
  { name: "大瀬良 大地", number: "14" },
  { name: "森 翔平", number: "16" },
  { name: "常廣 羽也斗", number: "17" },
  { name: "森下 暢仁", number: "18" },
  { name: "床田 寛樹", number: "19" },
  { name: "栗林 良吏", number: "20" },
  { name: "中﨑 翔太", number: "21" },
  { name: "髙 太一", number: "22" },
  { name: "黒原 拓未", number: "24" },
  { name: "新井 貴浩", number: "25" },
  { name: "益田 武尚", number: "26" },
  { name: "會澤 翼", number: "27" },
  { name: "佐藤 柳之介", number: "28" },
  { name: "ケムナ 誠", number: "29" },
  { name: "滝田 一希", number: "30" },
  { name: "坂倉 将吾", number: "31" },
  { name: "石原 貴規", number: "32" },
  { name: "菊池 涼介", number: "33" },
  { name: "高橋 昂也", number: "34" },
  { name: "赤塚 健利", number: "35" },
  { name: "塹江 敦哉", number: "36" },
  { name: "野間 峻祥", number: "37" },
  { name: "宇草 孔基", number: "38" },
  { name: "長谷部 銀次", number: "39" },
  { name: "磯村 嘉孝", number: "40" },
  { name: "鈴木 健矢", number: "41" },
  { name: "ドミンゲス", number: "42" },
  { name: "島内 颯太郎", number: "43" },
  { name: "林 晃汰", number: "44" },
  { name: "松本 竜也", number: "45" },
  { name: "河野 佳", number: "46" },
  { name: "斉藤 優汰", number: "47" },
  { name: "アドゥワ 誠", number: "48" },
  { name: "渡邉 悠斗", number: "49" },
  { name: "中村 健人", number: "50" },
  { name: "末包 昇大", number: "52" },
  { name: "岡本 駿", number: "53" },
  { name: "鳴澤 雄也", number: "54" },
  { name: "松山 竜平", number: "55" },
  { name: "久保 修", number: "56" },
  { name: "持丸 泰輝", number: "57" },
  { name: "仲田 侑仁", number: "58" },
  { name: "大盛 穂", number: "59" },
  { name: "田村 俊介", number: "60" },
  { name: "ファビアン", number: "61" },
  { name: "清水 叶人", number: "62" },
  { name: "内田 湘大", number: "63" },
  { name: "髙木 翔斗", number: "64" },
  { name: "玉村 昇悟", number: "65" },
  { name: "遠藤 淳志", number: "66" },
  { name: "菊地 ハルン", number: "67" },
  { name: "ハーン", number: "68" },
  { name: "山足 達也", number: "69" },
  { name: "日髙 暖己", number: "70" },
  { name: "佐藤 啓介", number: "94" },
  { name: "モンテロ", number: "95" },
  { name: "中村 奨成", number: "96" },
  { name: "中村 貴浩", number: "97" },
  { name: "二俣 翔一", number: "99" },
  { name: "杉田 健", number: "120" },
  { name: "名原 典彦", number: "121" },
  { name: "安竹 俊喜", number: "122" },
  { name: "小船 翼", number: "123" },
  { name: "辻 大雅", number: "125" },
  { name: "竹下 海斗", number: "126" },
  { name: "前川 誠太", number: "127" },
  { name: "杉原 望来", number: "128" },
  { name: "小林 樹斗", number: "129" },
  { name: "ラミレス", number: "130" },
  { name: "ロベルト", number: "131" }
];

let score = 0;
let timeLeft = 60;
let timerInterval;

const timerEl = document.getElementById('timer');
const scoreEl = document.getElementById('score');
const questionEl = document.getElementById('question');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const resultEl = document.getElementById('result');
const shareDiv = document.getElementById('share');
const shareLink = document.getElementById('shareLink');
const judgeEl = document.getElementById('judge');

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = "残り時間: " + timeLeft + "秒";
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

function getRandomPlayer() {
  return players[Math.floor(Math.random() * players.length)];
}

function getRandomNumber(exclude) {
  let num;
  do {
    num = players[Math.floor(Math.random() * players.length)].number;
  } while (num === exclude);
  return num;
}

function showQuestion() {
  const player = getRandomPlayer();
  const correct = player.number;
  const wrong = getRandomNumber(correct);
  const isLeftCorrect = Math.random() < 0.5;

  questionEl.textContent = `${player.name} の背番号は？`;
  if (isLeftCorrect) {
    btn1.textContent = correct;
    btn2.textContent = wrong;
    btn1.onclick = () => answer(true);
    btn2.onclick = () => answer(false);
  } else {
    btn1.textContent = wrong;
    btn2.textContent = correct;
    btn1.onclick = () => answer(false);
    btn2.onclick = () => answer(true);
  }
}

function answer(isCorrect) {
  if (isCorrect) {
    score++;
    judgeEl.textContent = "⭕️";
  } else {
    score = Math.max(0, score - 1);
    judgeEl.textContent = "❌";
  }
  scoreEl.textContent = "得点: " + score;
  judgeEl.style.display = "block";
  setTimeout(() => {
    judgeEl.style.display = "none";
    showQuestion();
  }, 600);
}

function endGame() {
  questionEl.style.display = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
  resultEl.style.display = "block";
  resultEl.textContent = `あなたのスコア: ${score} 点`;
  shareDiv.style.display = "block";
  const tweet = `CARP NUMBER QUIZ⚾\\nスコア: ${score}点\\n#カープ #背番号クイズ`;
  const url = encodeURIComponent(window.location.href);
  shareLink.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}&url=${url}`;
}

// ゲーム開始
startTimer();
showQuestion();
