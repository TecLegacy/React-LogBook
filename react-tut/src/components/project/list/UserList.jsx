import { useEffect } from 'react';
let newList;
const UserList = ({ userList }) => {
  useEffect(() => {}, [newList]);
  const edited = (id) => {
    newList = userList.filter((c, i) => i !== id);
  };
  return (
    <div className={`items-centers  my-4 flex w-5/6 flex-col gap-5`}>
      {userList.map((user, i) => (
        <div
          onClick={edited(i)}
          id={i}
          key={i}
        >{`Hey ${user.userName} your age is ${user.age}`}</div>
      ))}
    </div>
  );
};

export default UserList;
