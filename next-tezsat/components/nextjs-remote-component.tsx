import * as React from "react";
// import styles from '../styles/Home.module.css'
// console.log(styles)

const NextjsRemoteComponent = () => {
  return (
    <nav
      style={{
        background: "cadetblue",
        width: "100%",
        height: "100px",
        color: "white",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
      }}
    >
      Hello from Remote Nextjs component hosted on Syimyk Mitalipov
    </nav>
  );
};

export default NextjsRemoteComponent;
