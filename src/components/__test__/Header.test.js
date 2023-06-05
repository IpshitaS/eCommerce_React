import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load n rendering header", () =>{
    //load Hearder
    const header = render(
        <StaticRouter >
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
        );
    console.log(header);

    //check if logo is loaded
    const logo = header.getAllByTestId("logo");
    console.log(logo[0]);
    expect(logo[0].src).toBe("https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj");
})

test("online status should be green", () =>{
    //load Hearder
    const header = render(
        <StaticRouter >
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
        );
    console.log(header);

    //check is user online
    const onlineStatus = header.getByTestId("online-status");
    expect(onlineStatus.innerHTML).toBe('🟢');
})

test("cart should have 0item", () =>{
    //load Hearder
    const header = render(
        <StaticRouter >
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
        );
    console.log(header);

    //check cart should have 0item
    const itemNum = header.getByTestId("item-num");
    expect(itemNum.innerHTML).toBe("<img class=\"w-10\" src=\"https://cdn-icons-png.flaticon.com/512/34/34627.png\">0");
})