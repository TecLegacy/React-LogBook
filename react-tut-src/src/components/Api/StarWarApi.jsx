import React from 'react';
import Button from '../../UI/Button';
import Card from '../project/layout/Card';

const StarWarApi = ({ setData }) => {
  const swaHandler = async () => {
    //STARWAR API
    try {
      // const response = await fetch('https://swapi.dev/api/films/');  //get
      const response = await fetch(
        'https://react-http-ea626-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify('hello'),
        }
      ); //POST to firebase
      if (!response.status) {
        console.log('Error');
      }

      const data = await response.json();
      setData(data);
      console.log('fetch succesful');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <React.Fragment>
      <Card>
        <div
          className={`  my-32 flex  w-5/6  flex-col items-center  justify-center gap-12 rounded-lg  bg-yellow-50 py-20 shadow-2xl `}
        >
          <h2>Start War API</h2>
          <div>
            <ul className={`list-none`}>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          <Button
            className={` w-3/5  py-2 hover:text-black`}
            onClick={swaHandler}
          >
            Fetch
          </Button>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default StarWarApi;
