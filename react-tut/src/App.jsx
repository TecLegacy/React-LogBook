import AddUser from './components/project/add-user/AddUser';
import ErrorModal from './components/project/errorModal/ErrorModal';

function App() {
  return (
    <>
      {/*Userlist - ref portal ? state */}
      <div className={` m-auto mt-32 h-full   w-5/6 p-6 `}>
        <AddUser />
      </div>
    </>
  );
}

export default App;
