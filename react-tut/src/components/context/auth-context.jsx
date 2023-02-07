import React from 'react';
import { useState } from 'react';
// Context
export const AuthContext = React.createContext({
  isLogged: false,
  loggIn: () => {},
  loggOut: () => {},
});

// Context Provider component

const AuthProvider = ({ children }) => {
  const [log, setLog] = useState(false);

  const logiInHandler = () => {
    console.log('logIn', log);
    setLog(!log);
  };
  const logOutHandler = () => {
    console.log('logOut', log);
    setLog(!log);
  };
  return (
    <AuthContext.Provider
      value={{
        isLogged: log,
        loggIn: logiInHandler,
        loggOut: logOutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
