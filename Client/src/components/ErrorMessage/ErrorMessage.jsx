import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./ErrorMessage.module.css";

export default function ErrorMessage(props) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      props.onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [props]);

  const handleClick = () => {
    setShow(false);
    props.onClose();
  };
  return (
    <>
      {show && (
        <div className={styles.container}>
          <p>{props.message}</p>
          <div className={styles.close} onClick={handleClick}>
            
          </div>
        </div>
      )}
    </>
  );
}
