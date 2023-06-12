import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_MENU } from "../../mocks/data";
import RestaurantsMenu from "../RestaurantsMenu";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_MENU),
  });
});

test("Add menu to cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantsMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("add-Btn");

  fireEvent.click(addBtn[0]);

  const cart = body.getByTestId("item-num");

  expect(cart.innerHTML).toBe("<img className="w-10" src ="https://cdn-icons-png.flaticon.com/512/34/34627.png" /> 0");
});
