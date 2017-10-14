import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>,
    document.getElementById("root"));
registerServiceWorker();
