const { render, screen, fireEvent } = require("@testing-library/react");
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListData.json";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should search res List for KFC", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toEqual(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "KFC" } });
  fireEvent.click(searchBtn);
  const allResCards = screen.getAllByTestId("resCard");

  expect(searchBtn).toBeInTheDocument();
  expect(allResCards.length).toEqual(1);
});
