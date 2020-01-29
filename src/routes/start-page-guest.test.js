import React from "react";
import ReactDOM from "react-dom";
import StartPageGuest from "./start-page-guest";
import {BrowserRouter} from 'react-router-dom';
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BrowserRouter><StartPageGuest places={[]} /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div); //cleanup
});