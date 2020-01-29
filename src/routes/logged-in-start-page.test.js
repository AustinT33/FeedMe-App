import React from "react";
import ReactDOM from "react-dom";
import LoggedInStartPage from "./logged-in-start-page";
import {BrowserRouter} from 'react-router-dom';
it("renders without crashing", () => {
  const div = document.createElement("div");
  const props = {
      places: [],
      user: {email:''}
  }
  ReactDOM.render(<BrowserRouter><LoggedInStartPage {...props} /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div); //cleanup
});