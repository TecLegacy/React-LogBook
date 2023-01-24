import AddUser from './components/project/add-user/AddUser';
import ErrorModal from './components/project/errorModal/ErrorModal';
import LoginOut from '@/components/context/LoginOut';
import Button from './UI/Button';
import AuthProvider from '@/components/context/auth-context';

function App() {
  return (
    <>
      {/*Userlist - ref portal ? state */}
      {/* <div className={` m-auto mt-32 h-full   w-5/6 p-6 `}>
        <AddUser />
      </div> */}

      {/* CONTEXT API */}
      <AuthProvider>
        <LoginOut />
      </AuthProvider>
    </>
  );
}

export default App;
