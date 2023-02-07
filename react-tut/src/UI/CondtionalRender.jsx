import React from 'react';
import style from './heroStyles.module.css';
const CondtionalRender = prop => {
  return (
    <>
      {/* CARD */}
      <div className={`${prop.className ? prop.className : style.background}`}>
        <h1>hello</h1>
        {prop.children}
      </div>
    </>
  );
};

export default CondtionalRender;
