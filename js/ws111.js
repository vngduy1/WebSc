// ke2a04
// ヴゴックズイ
// 2024/10/21

// 既定値「1」とするプロンプトウィンドウを表示
var res = window.prompt(
  "今の気分は？（番号を半角で入力）\n1: ダメダメ\n2: 癒されたい\n3: 落ち着かない"
);

// 色の強さを格納する変数を準備
var r = 0,
  g = 0,
  b = 0;

switch (res) {
  case "1":
    r = 172;
    break;
  case "2":
    g = 172;
    break;
  case "3":
    b = 172;
    break;

  default:
    break;
}

document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
console.log("rgb(" + r + g + b + ")");

// メッセージを格納する配列を準備
var msg = ["燃えろ～", "よしよし", "どーどーどー", "素直じゃないねえ"];

document.write('<h1 style:"text-align:center">' + msg[res - 1] + "</h1>");
