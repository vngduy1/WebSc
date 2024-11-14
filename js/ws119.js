//ke2a04
//ヴゴックズイ
//2024/11/11

// kansu関数の定義 - 仮引数をh1要素として出力
function kansu(param) {
  document.write("<h1>" + param + "</h1>"); // h1要素で仮引数を表示
}

// 変数dainyuにkansuを代入
var dainyu = kansu;

// 変数sikiに関数sikikansuを代入
var siki = function sikikansu(param) {
  kansu(param); // kansuを呼び出し、仮引数を出力

  // kansu->sikikansu->sikiの流れを表すp要素を表示
  document.write("<p>kansu->sikikansu->siki</p>");
};

// 変数tokumeiに匿名関数を代入
var tokumei = function (param) {
  siki(param); // siki関数を呼び出し、仮引数を出力

  // ->無名->tokumeiの流れを表すp要素を表示
  document.write("<p>->無名->tokumei</p>");
};
