import React from "react";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Timeline</h1>
      </header>

      <main className="main">
        <div className="gridContainer">{/* <Grid /> */}</div>
        <div className="formContainer">{/* <Form /> */}</div>
      </main>
    </div>
  );
};

export default App;
