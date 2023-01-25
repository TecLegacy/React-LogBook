import React from 'react';

const Button = ({ children, authContext, message, className, onClick }) => {
  // const bClick = () => {
  //   if (message === 'loggedIn') {
  //     return authContext.loggIn();
  //   }
  // };

  return (
    <button
      type="button"
      // onClick={bClick}
      onClick={onClick}
      className={`   my-4  flex cursor-pointer items-center  justify-center   rounded-lg bg-blue-500 text-lg  font-bold  text-yellow-50  transition duration-500 hover:bg-yellow-300 ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
