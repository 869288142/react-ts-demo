import React from 'react';
interface SquareProps {
  value: string
  onClick: (e: React.MouseEvent) => void,
  className: string,
  style: Partial<CSSStyleDeclaration> 
}


// 由于 无状态，所以改造成函数组件
function Square(props: SquareProps) {
  console.log(props);
  return (
    <button className={props.className}onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square