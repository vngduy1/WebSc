// ke2a04
// ヴゴックズイ
// 2024/10/14

// ヒエログリフに対応する連想配列
var hieroglyph = {
  a: "ワシ",
  i: "葦穂２つ",
  u: "雛ウズラ",
  e: "葦穂",
  o: "投げ輪",
  k: "把手付きカゴ",
  s: "畳んだ布",
  t: "丸パン",
  n: "さざ波",
  h: "葦小屋",
  m: "フクロウ",
  y: "葦穂２つ",
  r: "口",
  w: "雛ウズラ",
};

var c = window.prompt("ヒエログリフに変換する半角英字を１字入力", "a");

document.write(
  '<p style="text-indent: 10em">' +
    c +
    '<img src="../imgs/ws108_' +
    c +
    '.gif">' +
    hieroglyph[c]
);
