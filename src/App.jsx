import React from "react";
const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1
        style={
          //波括弧 javascript その中で更に波括弧 「javascriptのオブジェクト」になる
          //cssのプロパティをかくにはストリング文字列として扱う必要がある
          //文字列にしないと、javascriptにredなんかないよと渓谷が出る
          { color: "red" }
        }
      >
        こんにちは
      </h1>
      <p>おげんきですか</p>
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
