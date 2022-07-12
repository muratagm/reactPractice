import React from "react";

const ColorfulMessage = (props) => {
  //propsは引数、名前は何でもいいがpropsとしたほうがわかりやすい
  console.log(props);
  //コンソールで確認すると、App.jsxでかいたpropsが渡ってきている ({color: "blue", message: "おげんきですか"})
  //コンポーネントのなかでそれを使うように書いていく {color: "blue", message: "おげんきですか"}
  const contentStyle = {
    //※1 これはjavascriptのブジェクト
    color: props.color,
    fontSize: props.fontSize,
    fontWeight: "bold", //ここはjavascriptのオブジェクト野中なので、cssのハイフンはキャメルケースで確必要がある
    backgroundColor: props.backgroundColor
  };

  return <p style={contentStyle}>{props.children}</p>; //props コンポーネントに特定のめいしょうをつけて渡すこともできるし、タグで囲って(コンポーネントタグでくくると)childrenという変数で渡すこともできる
};

export default ColorfulMessage;
