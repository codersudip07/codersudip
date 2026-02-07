import React from 'react'

const Button = ({ name, icon, onclick, style }) => {
  return (
    <button onClick={onclick} className={`uppercase px-4 py-1 bg-(--sec) rounded-sm hover:cursor-pointer active:scale-95 ease-in-out duration-100 ${style}`}>
      {name} {icon}
    </button>
  );
}

export default Button