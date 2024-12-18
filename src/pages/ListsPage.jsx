import { useEffect, useState } from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router";
import { isEmpty } from "lodash";

import { getFilms } from "../services/api/films";
import { FavoritesContext } from "../context/Favorites";

export const ListsPage = () => {
  const [films, setFilms] = useState([]);
  const { favorites, setFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    getFilms().then((films) => {
      setFilms(films);
    });
  }, []);

  const deleteFavorite = (id, type) => {
    setFavorites(
      favorites.filter((favorite) => {
        return !(favorite.id === id && favorite.type === type);
      }),
    );
  };

  const addToFavorites = (id, name, type) => {
    setFavorites([
      ...favorites,
      {
        id: id,
        name: name,
        type: type,
      },
    ]);
  };

  const isFavorited = (id, type) => {
    return favorites.some((favorite) => {
      return favorite.id === id && favorite.type === type;
    });
  };

  return (
    <>
      <h1>Films</h1>
      {!isEmpty(films) &&
        films.map((film) => {
          return (
            <div key={film._id}>
              <h3>{film.properties.title}</h3>
              <NavLink to={`film/${film.uid}`}>
                <Button>View More</Button>
              </NavLink>
              <Button
                onClick={() => {
                  isFavorited(film.uid, "film")
                    ? deleteFavorite(film.uid, "film")
                    : addToFavorites(film.uid, film.properties.title, "film");
                }}
              >
                {isFavorited(film.uid, "film") ? "Unfav" : "Fav"}
              </Button>
            </div>
          );
        })}
    </>
  );
};
