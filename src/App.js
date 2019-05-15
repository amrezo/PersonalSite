import React from "react";
import "normalize.css";
import "antd/dist/antd.css";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import MyWork from "./components/MyWork";

function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <MyWork />
    </div>
  );
}

export default App;
