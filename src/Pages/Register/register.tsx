import { Fragment, useState } from "react";
import "./register.css";
import MusicHubLogo from "../../assets/musichub-logo.png";
import { container } from "tsyringe";
import { UserService } from "../../Services/user.service";
import Button from "antd/lib/button";
import Input from "antd/lib/input";
import Select from "antd/lib/select";
import message from "antd/lib/message";
import { Link } from "react-router-dom";

const Register = () => {
  const userService = container.resolve(UserService);
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    date: "",
    month: undefined,
    year: "",
    gender: undefined,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      !user.email ||
      !user.name ||
      !user.password ||
      !user.date ||
      !user.month ||
      !user.year ||
      !user.gender
    ) {
      message.error("Please enter all the fields!");
    } else {
      const hide = message.loading("Loading..", 0);

      const query = {
        name: user.name,
        email: user.email,
        password: user.password,
        dob: user.date + "/" + user.month + "/" + user.year,
        gender: user.gender,
      };

      await userService
        .register(query)
        .then(() => {
          hide();
          message.success("Successfully Registed. Please Login", 10);
        })
        .catch((err: any) => {
          message.error(err?.response?.data?.message, 3);
          hide();
        });
    }
  };

  return (
    <Fragment>
      <div className="register-container">
        <nav className="auth-navbar">
          <img
            src={MusicHubLogo}
            alt="MusicHub Logo"
            className="auth-nav-logo"
          />
        </nav>
        <main className="auth-main">
          <h1>Sign up to start listening</h1>

          <form onSubmit={(e) => e.preventDefault()} className="auth-form">
            <div className="auth-form-controller">
              <label>Name</label>
              <Input
                className="auth-input"
                placeholder="Name"
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
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
            <div className="auth-form-controller">
              <label>Gender</label>
              <Select
                className="auth-input"
                value={user.gender}
                placeholder="Select Gender"
                onChange={(e) => setUser({ ...user, gender: e })}
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ]}
              />
            </div>
            <div className="auth-form-controller">
              <label>Date of Birth</label>
              <div className="dob-container">
                <Input
                  className="auth-input"
                  type="number"
                  placeholder="Date"
                  min={1}
                  max={31}
                  value={user.date}
                  onChange={(e) => setUser({ ...user, date: e.target.value })}
                />
                <Select
                  className="auth-input"
                  placeholder="Month"
                  value={user.month}
                  onChange={(e) => setUser({ ...user, month: e })}
                  options={[
                    { value: "01", label: "Jan" },
                    { value: "02", label: "Feb" },
                    { value: "03", label: "Mar" },
                    { value: "04", label: "Apr" },
                    { value: "05", label: "May" },
                    { value: "06", label: "Jun" },
                    { value: "07", label: "Jul" },
                    { value: "08", label: "Aug" },
                    { value: "09", label: "Sep" },
                    { value: "10", label: "Oct" },
                    { value: "11", label: "Nov" },
                    { value: "12", label: "Dec" },
                  ]}
                />
                <Input
                  className="auth-input"
                  type="number"
                  placeholder="Year"
                  value={user.year}
                  onChange={(e) => setUser({ ...user, year: e.target.value })}
                />
              </div>
              <Button
                type="primary"
                className="auth-btn"
                onClick={handleSubmit}
              >
                Register
              </Button>
              <label className="auth-redirect-label">
                Already have an account? <Link to="/login">Sign in</Link>
              </label>
            </div>
          </form>
        </main>
      </div>
    </Fragment>
  );
};

export default Register;
