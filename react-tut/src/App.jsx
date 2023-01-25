import AddUser from './components/project/add-user/AddUser';
import ErrorModal from './components/project/errorModal/ErrorModal';
import LoginOut from '@/components/context/LoginOut';
import AuthProvider from '@/components/context/auth-context';
import ForwardRef from '@/components/forward-ref/ForwardRef';
import StarWarApi from './components/Api/StarWarApi';
import { useEffect, useState } from 'react';

import Button from './UI/Button';
import Film from './components/Api/Film';

function App() {
  const [data, setData] = useState(null);
  const showConsole = () => {
    console.log(data);
  };

  return (
    <>
      {/*Userlist - ref, portal, ? ,state */}
      {/* <div className={` m-auto mt-32 h-full   w-5/6 p-6 `}>
        <AddUser />
      </div> */}

      {/* CONTEXT API */}
      {/* <AuthProvider>
        <LoginOut />
      </AuthProvider> */}

      {/* FORWARD REF */}
      {/* <ForwardRef /> */}

      {/* API */}
      {/* <StarWarApi setData={setData} />

      <div>
        <button onClick={showConsole}>click me</button>
      </div> */}

      {/* SHOW fetch data */}
      <Film data={data} />
    </>
  );
}

export default App;
