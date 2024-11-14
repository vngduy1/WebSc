//ke2a04
//ヴゴックズイ
//2024/11/4

// 干と支の配列
var kan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"]; // 干
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
]; // 支

// 西暦を干支に変換する関数
function getEto(yr) {
  // yrが4未満または整数でない場合の処理
  if (yr < 4 || yr % 1 > 0) {
    alert("入力エラーです");
    document.body.innerHTML +=
      "<p>やり直しは，F5 キーもしくはリロード・アイコンで</p>";
    return "false";
  }
  // 干支の計算
  var kanIndex = (yr - 4) % 10;
  var shiIndex = (yr - 4) % 12;
  return kan[kanIndex] + shi[shiIndex];
}
