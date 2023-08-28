import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../ContactUs";

describe("added test cases for contact us page", () => {
  it("should load contact us page", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside page", () => {
    render(<ContactUs />);
    //   const button = screen.getByRole("button");
    const button = screen.getByText("submit");

    expect(button).toBeInTheDocument();
  });

  it("should load input name inside page", () => {
    render(<ContactUs />);
    const input = screen.getByPlaceholderText("name");

    expect(input).toBeInTheDocument();
  });

  it("should load two input boxes inside page", () => {
    render(<ContactUs />);
    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toEqual(2);
  });
});
