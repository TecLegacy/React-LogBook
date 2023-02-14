import { Outlet } from 'react-router-dom';
type Props = {};

const ErrorEle = (props: Props) => {
  return (
    <>
      <div className="  text-2xl">
        <h1>No page Fount</h1>
      </div>
      <Outlet />
    </>
  );
};

export default ErrorEle;
