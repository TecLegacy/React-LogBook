import { useContext } from 'react';

import Button from '@/UI/Button';
import Card from '../project/layout/Card';

import { AuthContext } from '@/components/context/auth-context.jsx';

const LoginOut = () => {
  const authContext = useContext(AuthContext);

  return (
    <div className={`mx-auto mt-32 w-2/5 `}>
      {/* login */}
      <Card>
        <div>
          {/* {!authContext.islogged && <p>Hi you are Logged {`${}`}</p>} */}
          {authContext.isLogged ? (
            <p>Hi you are Logged In</p>
          ) : (
            <p>Hi you are Logged Out</p>
          )}
          <Button authContext={authContext} message="loggedIn">
            Logged {authContext.isLogged ? 'Out' : 'In'}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginOut;
