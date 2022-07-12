import React from "react";
import ColorfulMessage from "./components/ColorfulMessage"; //拡張子はしょうりゃくできる
const App = () => {
  const onClickButton = () => alert();

  return (
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
