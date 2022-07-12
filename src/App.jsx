import React from "react";
const App = () => {
  const onClickButton = () => alert();

  //オブジェクトの変数を定義
  const contentStyle = {
    //※1 これはjavascriptのブジェクト
    color: "blue",
    fontSize: "18px",
    fontWeight: "bold", //ここはjavascriptのオブジェクト野中なので、cssのハイフンはキャメルケースで確必要がある
    backgroundColor: "skyblue"
  };
  return (
    <>
      <h1
        style={
          //波括弧 javascript その中で更に波括弧 「javascriptのオブジェクト」になる
          //cssのプロパティをかくにはストリング文字列として扱う必要がある
          //文字列にしないと、javascriptにredなんかないよと渓谷が出る
          //これはjavascriptのオブジェクトなのでなので、ここにここに直接かく以外に、変数を定義しその中に確やり方※1もある
          { color: "red" }
        }
      >
        こんにちは
      </h1>
      <p style={contentStyle}>おげんきですか</p>
      <button
        onClick={
          //JSxのタグの中で波括弧でくくると、その中はjavascriptがかける
          onClickButton
        }
      >
        ボタン
      </button>
    </>
  );
};

//他のファイルでも使うときの作法 export default+関数名
export default App;
