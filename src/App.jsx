import { Routes, Route } from "react-router";

import { GenericPage } from "./pages/GenericPage";

export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<GenericPage />} />
    </Routes>
  );
};
