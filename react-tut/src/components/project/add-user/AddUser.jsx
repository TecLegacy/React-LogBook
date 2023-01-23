import { useRef, useState } from 'react';
import Card from '../layout/Card';
import UserList from '../list/UserList';
import { createPortal } from 'react-dom';

const AddUser = () => {
  const userRef = useRef(null);
  const ageRef = useRef(null);
  const [errorModal, setErrorModal] = useState(false);
  const [userList, setUserList] = useState([{ userName: 'kanu', age: '19' }]);
  const formHandler = (e) => {
    e.preventDefault();
    console.log(userRef.current.value);
    console.log(ageRef.current.value);

    const userList = {
      userName: userRef.current.value,
      age: ageRef.current.value,
    };
    if (!userRef.current.value && !ageRef.current.value) {
      console.log('enter name and Age');
      setErrorModal(true);
      return;
    }

    // setErrorModal(!errorModal);
    setUserList((p) => [...p, userList]);
  };

  const erroHandler = () => {
    setErrorModal(false);
  };
  return (
    <>
      {errorModal ? (
        createPortal(<div></div>, document.getElementById('modal'))
      ) : (
        <div>
          <Card>
            <form onSubmit={formHandler}>
              <div
                className={` flex items-center
                      justify-center gap-5 
          `}
              >
                <label htmlFor="username">Username </label>
                <input
                  ref={userRef}
                  type="text"
                  id="username"
                  placeholder="User Name"
                />

                <label htmlFor="age">Age </label>
                <input ref={ageRef} type="text" id="age" placeholder="Age" />
              </div>
              <button
                className={`text-red-400 hover:bg-yellow-300
          `}
              >
                Add user
              </button>
            </form>
          </Card>

          {/* User list */}

          <Card>
            <UserList userList={userList} />
          </Card>
        </div>
      )}
      {/* {errorModal && (

        <div
          onClick={erroHandler}
          className={`z-20 h-full w-full items-center gap-1 bg-red-300 backdrop-blur-sm `}
        >
          <div>Enter Correct Data</div>
          <button>ok</button>
        </div>
      )} */}
    </>
  );
};

export default AddUser;