import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const up = () => {
    console.log('clicked');
    dispatch({
      type: 'INCREE',
    });
    // console.log('clicked')
    console.log('clicked');
  };
  return (
    <>
      <div>
        <h1>counter</h1>
      </div>

      <div>
        <h2>value</h2>
        {/* <h2>{counter}</h2> */}
      </div>
      <br />
      <hr />
      <div>
        <button
          onClick={up}
          //   onClick={() => {
          //     dispatch({
          //       type: 'INCREE',
          //     });
          //   }}
        >
          {' '}
          1 UP Store Counter
        </button>
        <hr />
        <button
          onClick={() => {
            dispatch({
              type: 'DECRE',
            });
          }}
        >
          {' '}
          1 DOWN Store Counter
        </button>
        <hr />
        <button
          onClick={() => {
            dispatch({
              type: 'PAYLOAD',
              payload: 10,
            });
          }}
        >
          {' '}
          10 PAYLOAD Store Counter
        </button>
      </div>
    </>
  );
};

export default Counter;
