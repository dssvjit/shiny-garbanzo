import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  if (localStorage.getItem("dss-accessToken")) {
    return (
      <>
        <Navigate to="/" />
      </>
    );
  }

  return (
    <>
      <div className="w-full relative">
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
