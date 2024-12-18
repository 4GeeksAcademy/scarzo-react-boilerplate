import { isEmpty } from "lodash";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { getFilm } from "../services/api/films";
import { LoadingContext } from "../context/Loading";
import { Loading } from "../components/Loading";

export const FilmPage = () => {
  const [film, setFilm] = useState({});
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const { filmId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getFilm(filmId)
      .then((film) => {
        setFilm(film);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [filmId, setIsLoading]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      {!isEmpty(film) && (
        <div style={{ justifyItems: "center" }}>
          <h1>{film.properties.title}</h1>
          <div style={{ whiteSpace: "pre-wrap" }}>
            {film.properties.opening_crawl}
          </div>
        </div>
      )}
    </>
  );
};
