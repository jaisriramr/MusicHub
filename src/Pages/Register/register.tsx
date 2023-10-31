import { Fragment } from "react";
import "./register.css";
import MusicHubLogo from "../../assets/musichub-logo.png";

const Register = () => {
  return (
    <Fragment>
      <div className="register-container">
        <nav className="register-navbar">
          <img
            src={MusicHubLogo}
            alt="MusicHub Logo"
            className="register-nav-logo"
          />
        </nav>
        <main className="register-main"></main>
      </div>
    </Fragment>
  );
};

export default Register;
