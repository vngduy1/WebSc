//ke2a04
//ヴゴックズイ
//2024/11/11

// dispArray 関数を定義
function dispArray() {
  // 5名のメンバーを格納する配列を作成
  var group = ["伊藤", "佐藤", "鈴木", "田中", "山田"];

  // 配列の長さを利用してメンバー数を出力
  document.write("班には " + group.length + " 人のメンバーがいます。<br>");

  // for 文を使ってメンバーの名前を順に出力
  for (var i = 0; i < group.length; i++) {
    document.write(i + 1 + " 人目は " + group[i] + "さんです。<br>");
  }
}
