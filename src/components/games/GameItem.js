import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function GameItem({ name, image, released, genre, slug }) {
  // console.log(slug);
  return (
    <Col>
      <Link to={`game/${slug}`}>
        <Card>
          <Card.Img src={image}></Card.Img>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Genre: {genre.join(" | ")}</Card.Text>
            <Card.Text>Released:{released}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

// GameItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   released: PropTypes.string,
//   genre: PropTypes.array.isRequired,
// };

// GameItem.defaultProps = {
//   released: "Unknown",
// };

export default GameItem;
