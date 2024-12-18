import { Routes, Route } from "react-router";

import { ListsPage } from "./pages/ListsPage";
import { FilmPage } from "./pages/FilmPage";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*" element={<ListsPage />} />
        <Route path="/film/:filmId" element={<FilmPage />} />
      </Routes>
    </>
  );
};
