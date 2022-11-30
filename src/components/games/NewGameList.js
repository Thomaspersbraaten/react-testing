import { useEffect, useState } from "react";
// import { Alert, Spinner } from "react-bootstrap";
import { GAME_API } from "../constants/gameApi";
import { Col, Row, Container } from "react-bootstrap";
import GameItem from "./GameItem.js";
import { Routes } from "react-router-dom";

function NewGameList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function getGames() {
      try {
        const response = await fetch(GAME_API);
        if (response.ok) {
          const json = await response.json();
          console.log(json.results);
          setGames(json.results);
        } else {
          setError("a server error occured");
        }
      } catch (error) {
        setError(error.toString());
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getGames();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>ERROR: {error}</div>;
  }
  return (
    <Container>
      <Row>
        {games.map(function (game) {
          const { slug, name, image, released, genre } = game;
          return <GameItem key={slug} slug={slug} name={name} image={image} released={released} genre={genre} />;
        })}
      </Row>
    </Container>
  );
  //   if (loading) {
  //     return (
  //       <Spinner animation="border" role="status">
  //         {/* <span className="visually-hidden">Loading...</span> */}
  //       </Spinner>
  //     );
  //   }
  //   if (error) {
  //     console.log(error);
  //     return (
  //       <Alert variant="danger">
  //         <div>an error occured</div>
  //       </Alert>
  //     );
  //   }
  //   return (
  //     <>
  //       {games.map(function (game) {
  //         return <div key={game.id}>{game.title}</div>;
  //       })}
  //     </>
  //   );
}
// <>
//   <Container fluid="md">
//     <Row>
//       {games.map(function (game) {
//         return <Col key={game.id}>{game.name}</Col>;
//       })}
//     </Row>
//   </Container>
// </>

export default NewGameList;
