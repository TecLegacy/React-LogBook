import React from 'react';

const UserList = ({ userList }) => {
  return (
    <div className={`items-centers  my-4 flex w-5/6 flex-col gap-5`}>
      {userList.map((user, i) => (
        <div key={i}>{`Hey ${user.userName} your age is ${user.age}`}</div>
      ))}
    </div>
  );
};

export default UserList;
