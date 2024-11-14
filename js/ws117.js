//ke2a04
//ヴゴックズイ
//2024/11/4

// getArabicIndicDigit 関数は元の ws116.js で定義済み
function getArabicIndicDigit() {
  document.write("<table><tr><th>太陽数字</th>");
  for (let i = 0; i < 10; i++) {
    document.write("<td>" + i + "</td>");
  }
  document.write("</tr><tr><th>太陰数字</th>");
  for (let i = 0; i < 10; i++) {
    document.write('<td><img src="./imgs/ws116_' + i + '.gif"></td>');
  }
  document.write("</tr></table>");
}

// parseArabicIndic 関数：太陽数字を太陰数字に変換
function parseArabicIndic(number) {
  let result = "";
  const digits = number.toString().split(""); // 数字を桁ごとに分解

  document.write("<table>");
  document.write("<tr>");
  document.write("<td>" + number + "= </td>");
  for (let digit of digits) {
    document.write('<td><img src="./imgs/ws116_' + digit + '.gif"></td>');
  }
  document.write("</tr></table>");
  return result;
}
