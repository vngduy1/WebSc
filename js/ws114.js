let count = 0; // カウンタの初期化
let fontSize = 8; // 初期フォントサイズ (8pt)
const increment = 4; // 増加量 (4pt)
const maxDivs = 13; // div要素の総数 (13個)
const middleDiv = Math.floor(maxDivs / 2); // 中央の行

let output = ""; // HTML文字列の出力を格納

while (count < maxDivs) {
  output += `<div style="font-size: ${fontSize}px;">ラクだぁ</div>`;

  // フォントサイズの増減処理
  if (count < middleDiv) {
    fontSize += increment; // 中央まではフォントサイズを増やす
  } else {
    fontSize -= increment; // 中央を過ぎたらフォントサイズを減らす
  }

  count++;
}

// 結果をページに出力
document.write(output);
