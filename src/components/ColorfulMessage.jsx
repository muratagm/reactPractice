import React from "react";

const ColorfulMessage = (props) => {
  //分割代入することで、いちいちpropsと書かなくても良くなる
  const { color, fontSize, backgroundColor, children } = props;
  const contentStyle = {
    color: color,
    fontSize: fontSize,
    fontWeight: "bold",
    backgroundColor: backgroundColor
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
