import React from "react";
import logo from "../assets/logooooo.png";

export default function Welcome() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <img style={{ width: "100%" }} src={logo} />
      </div>
      <div>
        <h1 style={{ fontSize: "4rem" }}>Coming Soon...</h1>
      </div>
    </div>
  );
}
