import React from "react";
import ReactDOM from "react-dom";
import SignupPage from "./signup-page";
import {BrowserRouter} from 'react-router-dom';
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BrowserRouter><SignupPage places={[]} /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div); //cleanup
});