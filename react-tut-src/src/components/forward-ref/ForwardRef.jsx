import React, { useRef } from 'react';

import Card from '../project/layout/Card';
import InputComp from './InputComp';

const ForwardRef = () => {
  const first = useRef(null);
  const formHandler = () => {
    first.current.toParent();
  };

  return (
    <React.Fragment>
      <h3>Forward Ref & userImperativeHandle</h3>
      <Card>
        <InputComp ref={first} formHandler={formHandler} />
      </Card>
      <button onClick={formHandler}>Click me</button>
    </React.Fragment>
  );
};

export default ForwardRef;
