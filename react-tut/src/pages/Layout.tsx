import { Outlet, NavLink } from 'react-router-dom';
type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <main
        className={` flex h-full w-full items-center justify-center bg-teal-100 text-2xl text-black`}
      >
        <ul className=" mx-4  mt-5 flex gap-4 py-6  ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? ' underline ' : '')}
              end={true} // to match default path
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) => (isActive ? ' underline ' : '')}
            >
              Product
            </NavLink>
          </li>
        </ul>
      </main>
      <Outlet />
    </>
  );
};

export default Layout;
