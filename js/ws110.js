// ke2a04
// ヴゴックズイ
// 2024/10/21

// 評価点を入力してもらう
var score = window.prompt("評価点を入力してください");

// scoreがnullまたは整数でなかった場合の処理
if (score === null || isNaN(score) || score % 1 !== 0) {
  document.getElementById("result").innerHTML = "評価点が整数ではありません。";
} else {
  // scoreを整数に変換
  score = parseInt(score);

  // 分岐処理を行う
  if (score < 0 || score > 100) {
    document.getElementById("result").innerHTML = "ありえない評価点です。";
  } else if (score >= 90) {
    document.getElementById("result").innerHTML = "Ａランクです";
  } else if (score >= 80) {
    document.getElementById("result").innerHTML = "Ｂランクです";
  } else if (score >= 70) {
    document.getElementById("result").innerHTML = "Ｃランクです";
  } else if (score >= 60) {
    document.getElementById("result").innerHTML = "Ｄランクです";
  } else if (score >= 0 && score < 60) {
    alert("追試！");
    document.getElementById("result").innerHTML = "Ｆランクです";
  }
}
