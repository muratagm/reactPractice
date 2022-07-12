import React from "react";
import ColorfulMessage from "./components/ColorfulMessage"; //拡張子はしょうりゃくできる
const App = () => {
  const onClickButton = () => alert();

  //オブジェクトの変数を定義
  const contentLedyStyle = {
    //※1 これはjavascriptのブジェクト
    color: "blue",
    fontSize: "18px",
    fontWeight: "bold", //ここはjavascriptのオブジェクト野中なので、cssのハイフンはキャメルケースで確必要がある
    backgroundColor: "pink"
  };
  return (
    //コンポーネント化したやつをインポートしてきて、出力するときはタグの中に凝っンポーねんと名を確<colorfulMessage />タグは閉じないとエラーになる
    //コンポーネントにてきとうな名前をつけて例：color="blue" message="おげんきですか" (color、messageがpropsになる)
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue" fontSize="24px" backgroundColor="skyblue">
        おじいちゃん
      </ColorfulMessage>
      <ColorfulMessage color="#666" fontSize="24px" backgroundColor="pink">
        おばあちゃん
      </ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

//他のファイルでも使うときの作法 export default+関数名
export default App;
