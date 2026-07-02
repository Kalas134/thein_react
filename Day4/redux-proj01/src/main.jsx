import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";

createRoot(document.getElementById("root")).render(
  // 전체 앱에서 Redux 사용 가능하게 설정
  <Provider store={store}>
    <App />
  </Provider>,
);