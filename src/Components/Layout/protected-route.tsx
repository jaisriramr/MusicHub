import { Navigate, Outlet } from "react-router-dom";
import { container } from "tsyringe";
import { UserService } from "../../Services/user.service";
import { useEffect, useState } from "react";
import Loader from "../Loader/loader";

const PrivateRoute = () => {
  let userService = container.resolve(UserService);
  const [response, setResponse] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userService
      .verify(localStorage.getItem("token") || "")
      .then((response: any) => {
        setLoading(false);
        if (response.validation) {
          setResponse(true);
        } else {
          setResponse(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("errr");
        setResponse(false);
      });
  });

  if (loading) return <Loader />;
  if (!response) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoute;
