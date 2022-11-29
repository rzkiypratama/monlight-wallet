import React from "react";
import styles from "src/styles/Loader2.module.css"

function Loader() {
  return (
    <>
      <div className={styles["loader-container"]}>
        <div className={styles.spinner}></div>
      </div>
    </>
  );
};

export default Loader;