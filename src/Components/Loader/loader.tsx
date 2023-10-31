import { Spin } from "antd";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
