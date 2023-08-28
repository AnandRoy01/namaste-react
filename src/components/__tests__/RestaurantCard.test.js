import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/ResCardMock.json";

it("should render RestaurantCard with props Data", () => {
  render(<RestaurantCard data={MOCK_DATA} />);

  const name = screen.getByText("Domino's Pizza");

  expect(name).toBeInTheDocument();
});
