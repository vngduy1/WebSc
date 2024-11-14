// ke2a04
// ヴゴックズイ
// 2024/10/14

// 干支の配列を準備
var kan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
var shi = [
  "子",
  "丑",
  "寅",
  "卯",
  "辰",
  "巳",
  "午",
  "未",
  "申",
  "酉",
  "戌",
  "亥",
];

// プロンプトで年を入力させる
var seireki = window.prompt(
  "干支を調べます。\n西暦で年を入力してくださ(いただし半角で4以上の整数)",
  "4"
);

// 入力が正しいかどうかをチェック
if (seireki !== null && !isNaN(seireki) && seireki >= 4) {
  seireki = parseInt(seireki); // 西暦を整数に変換

  // 干と支を計算
  var kanIndex = (seireki - 4) % 10; // 干の添字
  var shiIndex = (seireki - 4) % 12; // 支の添字

  // 結果を表示
  document.write(
    seireki + "年の干支は " + kan[kanIndex] + shi[shiIndex] + " です。"
  );
} else {
  document.write("正しい西暦を入力してください。");
}
