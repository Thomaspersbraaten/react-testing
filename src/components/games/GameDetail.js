import { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { GAME_API } from "../constants/gameApi";
import GameComponent from "./GameComponent";

export default function GameDetail() {
  const [game, setGame] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { slug } = useParams();
  if (!slug) {
    navigate("/");
  }

  const url = GAME_API + "/" + slug;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setGame(json);
          } else {
            setError("an error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Alert variant="danger">An error occured: {error}</Alert>;
  }
  const { name, image, released, genre, description } = game;
  return <GameComponent name={name} image={image} released={released} genre={genre} description={description} />;
}
