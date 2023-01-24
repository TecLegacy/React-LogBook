import React from 'react';

const Button = ({ children, authContext, message }) => {
  const bClick = () => {
    if (message === 'loggedIn') {
      return authContext.loggIn();
    }
  };
  return (
    <button
      onClick={bClick}
      className={`  my-4 flex w-full cursor-pointer items-center justify-center  rounded-lg   bg-blue-500 text-lg font-bold  text-black  transition duration-500 hover:bg-yellow-300`}
    >
      {children}
    </button>
  );
};

export default Button;
