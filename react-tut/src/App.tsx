import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/home/Home';
import ErrorEle from '@/pages/ErrorEle';
import Product from '@/pages/Product';
import Layout from '@/pages/Layout';
import Item from '@/pages/items/Item';
import NewEventPage from '@/pages/NewEventPages';
import EditEventPage from '@/pages/EditEventPages';
import { starWarApi } from '@/pages/NewEventPages';

interface UserObj {
  name: string;
  age: number;
}

const Router = createBrowserRouter([
  // { path: '/', element: <Home /> },
  // { path: '/product', element: <Product /> },

  //# layout with RR
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorEle />, // Fallback error handling page
    children: [
      // Relative path
      { path: '', element: <Home /> },
      // { path: 'product', element: <Product /> ,},
      { path: 'items/:itemId', element: <Item /> }, //Dynamic and nested Routes
      //Fetching star war api data
      {
        path: 'items/new',
        element: <NewEventPage />,
        loader: starWarApi, // loading data
      },
      { path: 'items/:someId/edit', element: <EditEventPage /> },
    ],
  },
  {
    path: '/product',
    errorElement: <ErrorEle />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Product />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

// import AddUser from './components/project/add-user/AddUser';
// import ErrorModal from './components/project/errorModal/ErrorModal';
// import LoginOut from '@/components/context/LoginOut';
// import AuthProvider from '@/components/context/auth-context';
// import ForwardRef from '@/components/forward-ref/ForwardRef';
// import StarWarApi from './components/Api/StarWarApi';
// import MouseMove from '@/react-beta/MouseMove';
// import Button from './UI/Button';
// import Film from './components/Api/Film';
// import Counter from './react-redux/Counter';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// const App: React.FC = () => {
//   // const [data, setData] = useState(null);
//   // const showConsole = () => {
//   //   console.log(data);
//   // };

//   const counter = useSelector((state: any) => state.counter);

//   return (
//     <>
//       {/* REACT_BETA */}
//       {/* <MouseMove /> */}
//       {/*Userlist - ref, portal, ? ,state */}
//       {/* <div className={` m-auto mt-32 h-full   w-5/6 p-6 `}>
//         <AddUser />
//       </div> */}

//       {/* CONTEXT API */}
//       {/* <AuthProvider>
//         <LoginOut />
//       </AuthProvider> */}

//       {/* FORWARD REF */}
//       {/* <ForwardRef /> */}

//       {/* API */}
//       {/* <StarWarApi setData={setData} /> */}

//       {/* <div> */}
//       {/* <button onClick={showConsole}>click me</button> */}
//       {/* </div> */}

//       {/* SHOW fetch data */}
//       {/* <Film data={data} /> */}

//       {/* -------REDUX------------ */}
//       {/* <h1>{counter}</h1>
//       <Counter /> */}
//     </>
//   );
// };

export default App;
