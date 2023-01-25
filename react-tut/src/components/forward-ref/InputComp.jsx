import React, { useImperativeHandle, useRef } from 'react';

// let refValue = 'd';
const InputComp = React.forwardRef((prop, ref) => {
  const childRef = useRef(null);
  const submitHanlder = (e) => {
    e.preventDefault();
    // Way 1 to send data to parent using forward ref
    // formHandler(ref.current.value);
  };

  //Way 2 of sending data to parent component with forward ref
  const run = () => {
    console.log(childRef.current.value);
  };
  useImperativeHandle(
    ref,
    () => {
      return {
        // return should always be a method
        toParent: run,
      };
    },
    []
  );
  return (
    <React.Fragment>
      <form
        action=""
        onSubmit={submitHanlder}
        className={` my-5 flex flex-col gap-5 text-lg`}
      >
        <label htmlFor="name">Your Name</label>
        {/* <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          ref={ref}
        /> */}
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          ref={childRef}
        />
        <button
          className={`rounded-xl transition duration-500  hover:bg-pink-400 `}
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
});

export default InputComp;
