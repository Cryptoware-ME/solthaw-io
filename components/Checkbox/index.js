import React from "react";

import styles from "./Checkbox.module.scss";

const Checkbox = ({ id, name, checked = true, label }) => {
  return (
    <div className={styles["checkbox-wrapper"]}>
      <span
        className={`${styles["checkmark"]} ${checked && styles["active"]}`}
      ></span>
      <label for="checkbox1">{label}</label>
    </div>
  );
};

export default Checkbox;
