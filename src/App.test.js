import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("concise test - renders contact form header", () => {
  const {getByText} = render(<App />);
  getByText(/First Name/i);
});

// test("renders App without crashing", () => {
//   //Arrange
//   const { getByText } = render(<App />);

//   //Act
//   const header = getByText (/hello there/i);

//   //Assert
//   expect(header).toBeInTheDocument();
//   expect(header).toBeTruthy();
//   expect(header).not.toBeFalsy();
// });
