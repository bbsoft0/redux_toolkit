import { StrictMode } from "react";
import * as ReactDOMClient from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
