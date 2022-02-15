import React from "react";
import Authenticate from "./Authenticate";
function App() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          margin: "0",
          padding: "0",
          display: "flex",
          jusifyContent: "center",
          alignItems: "center",
          backgroundImage: "url('/images/polygon-scatter-haikei.svg')",
        }}
      >
        <Authenticate />
      </div>
    </>
  );
}

export default App;
