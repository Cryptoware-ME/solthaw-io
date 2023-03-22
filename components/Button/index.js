import React from "react";

import styles from "./Button.module.scss";

const Button = ({ children, className, variant, ...props }) => {
  return (
    <div
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button;
