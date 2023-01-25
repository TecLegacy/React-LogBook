import React, { Children } from 'react';

const Card = ({ children }) => {
  return (
    <React.Fragment>
      <div
        className={` m-auto mb-5 flex w-full   items-center justify-center   rounded-md bg-slate-300 px-6 shadow-lg  `}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export default Card;
