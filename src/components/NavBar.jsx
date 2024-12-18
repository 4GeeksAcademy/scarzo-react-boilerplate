import { useContext } from "react";
import { FavoritesContext } from "../context/Favorites";
import { isEmpty } from "lodash";
import { NavLink, useLocation } from "react-router";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const NavBar = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  let location = useLocation();

  const deleteFavorite = (id, type) => {
    setFavorites(
      favorites.filter((favorite) => {
        return !(favorite.id === id && favorite.type === type);
      }),
    );
  };

  const parsedLocation = () => {
    const locations = {
      film: "Films",
    };
    return locations[location.pathname.split("/")[1]] || "";
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to={"/"}>
          <Navbar.Brand>SWDB</Navbar.Brand>
        </NavLink>
        <Navbar.Text>{parsedLocation()}</Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!isEmpty(favorites) && (
              <NavDropdown title="Favorites" id="basic-nav-dropdown">
                {favorites.map((favorite) => {
                  return (
                    <div key={`${favorite.type}${favorite.id}`}>
                      <NavDropdown.Item>
                        <NavLink to={`${favorite.type}/${favorite.id}`}>
                          {favorite.name}
                        </NavLink>
                      </NavDropdown.Item>
                      <Badge
                        onClick={() => {
                          deleteFavorite(favorite.id, favorite.type);
                        }}
                      >
                        {" "}
                        X{" "}
                      </Badge>
                    </div>
                  );
                })}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
