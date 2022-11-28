import propTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
export default function GameItem({ name, image, released, genre }) {
  return (
    <Col>
      <Card>
        <Card.Img src={image}></Card.Img>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Genre: {genre.join(" | ")}</Card.Text>
          <Card.Text>Released:{released}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

GameItem.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  released: propTypes.string,
  genre: propTypes.array.isRequired,
};

GameItem.defaultProps = {
  released: "Unknown",
};
