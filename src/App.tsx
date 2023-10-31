import { Fragment } from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/layout";
import Register from "./Pages/Register/register";
import Login from "./Pages/Login/login";
import ForgotPassword from "./Pages/ForgotPassword/forgot-password";
import ResetPassword from "./Pages/ResetPassword/reset-password";

function App() {
  const router = createBrowserRouter([
    {
      path: "/*",
      element: <Layout />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <Fragment>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Fragment>
    </RecoilRoot>
  );
}

export default App;
