import React from 'react';

const ErrorModal = ({ setErrorModal }) => {
  const erroHandler = () => {
    setErrorModal(false);
  };
  return (
    <>
      <div
        onClick={erroHandler}
        className={` fixed top-0 left-0 z-10  h-screen w-full  bg-green-200 opacity-75  backdrop-blur-sm `}
      ></div>
      <div
        onClick={erroHandler}
        className={` opacity-65  fixed top-[20vh] z-20 mx-28   h-4/6 w-5/6  bg-blue-400  backdrop-blur-3xl `}
      >
        <p>Enter correct data</p>
        <button> ok</button>
      </div>
    </>
  );
};

export default ErrorModal;
