import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";

import { LoadingProvider } from "./context/Loading";
import { FavoritesProvider } from "./context/Favorites";

import { App } from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </LoadingProvider>
    </BrowserRouter>
  </StrictMode>,
);
