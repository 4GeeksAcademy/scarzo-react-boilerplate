import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  setFavorites: () => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  console.log("FavoritesContext", favorites);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
