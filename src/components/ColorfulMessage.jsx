import React from "react";

const ColorfulMessage = (props) => {
  console.log(props);
  //分割代入することで、いちいちpropsと書かなくても良くなる
  const { color, fontSize, backgroundColor, children } = props;
  const contentStyle = {
    color, //color: color, javascriptはプロパティ名と当てはめるやつ(2行上でpropsから分割代入したやつ)が同じ名称だと省略して表記することができる
    fontSize: fontSize,
    fontWeight: "bold",
    backgroundColor: backgroundColor
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
