import { Fragment, useEffect, useState } from "react";
import "./login.css";
import MusicHubLogo from "../../assets/musichub-logo.png";
import { container } from "tsyringe";
import { UserService } from "../../Services/user.service";
import Button from "antd/lib/button";
import Input from "antd/lib/input";
import message from "antd/lib/message";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const userService = container.resolve(UserService);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let token: any = localStorage.getItem("token");
      userService.verify(token).then((response) => {
        <Navigate to="/" />;
      });
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      message.error("Please enter all the fields!");
    } else {
      const hide = message.loading("Loading..", 0);

      await userService
        .login(user)
        .then((response: any) => {
          localStorage.setItem("token", response?.token);
          hide();
          message.success("Successfully Logged In", 6);
          setTimeout(() => {
            navigate("/");
          });
        })
        .catch((err: any) => {
          message.error(err?.response?.data?.message, 3);
          hide();
        });
    }
  };

  return (
    <Fragment>
      <div className="login-container">
        <nav className="auth-navbar login-navbar">
          <img
            src={MusicHubLogo}
            alt="MusicHub Logo"
            className="auth-nav-logo"
          />
        </nav>
        <main className="auth-main">
          <h1>Sign into MusicHub</h1>

          <form onSubmit={(e) => e.preventDefault()} className="auth-form">
            <div className="auth-form-controller">
              <label>Email</label>
              <Input
                className="auth-input"
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="auth-form-controller">
              <label>Password</label>
              <Input
                className="auth-input"
                placeholder="Password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <Button type="primary" className="auth-btn" onClick={handleSubmit}>
              Login
            </Button>
            <label className="auth-redirect-label">
              Don't have an account? <Link to="/register">Sign up</Link>
            </label>
          </form>
        </main>
      </div>
    </Fragment>
  );
};

export default Login;
