import React from "react";
import { RotatingLines } from "react-loader-spinner";
import css from "../Loader/Loader.module.css";

const Loader = () => (
  <div className={css.loader}>
    <RotatingLines
      visible={true}
      height="96"
      width="96"
      color="grey"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
    />
  </div>
);

export default Loader;
