import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../ContactUs";

test("should load contact us page", () => {
  render(<ContactUs />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load button inside page", () => {
  render(<ContactUs />);
  //   const button = screen.getByRole("button");
  const button = screen.getByText("submit");

  expect(button).toBeInTheDocument();
});

test("should load input name inside page", () => {
  render(<ContactUs />);
  const input = screen.getByPlaceholderText("name");

  expect(input).toBeInTheDocument();
});

test("should load two input boxes inside page", () => {
  render(<ContactUs />);
  const inputBoxes = screen.getAllByRole("textbox");

  expect(inputBoxes.length).toEqual(2);
});
