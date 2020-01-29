import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./login-page";
import {BrowserRouter} from 'react-router-dom';
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BrowserRouter><LoginPage places={[]} /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
