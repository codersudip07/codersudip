import React from 'react'

const Title = ({title, style}) => {
  return (
    <>
      <h3 className={`uppercase text-2xl text-(--sec) mb-5 ${style}`}>{title}</h3>
    </>
  );
}

export default Title