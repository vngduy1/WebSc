//ke2a04
//ヴゴックズイ
//2024/11/4

function getArabicIndicDigit() {
  document.write("<table>" + "<tr><th>太陽数字</th>");
  for (let i = 0; i < 10; i++) {
    document.write("<td align-item:'center'>" + i + "</td>");
  }
  document.write("</tr>");
  document.write("<tr><th>太陰数字</th>");
  for (let i = 0; i < 10; i++) {
    document.write('<td><img src="./imgs/ws116_' + i + '.gif"></td>');
  }
  document.write("</tr>" + "</table>");
}
