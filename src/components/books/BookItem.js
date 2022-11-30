import { Link } from "react-router-dom";
import propTypes from "prop-types";
export default function BookItem({ title, id, published }) {
  return (
    <Link to={`details/${id}`}>
      <h5>{title}</h5>
      <p>{published}</p>
    </Link>
  );
}

BookItem.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  published: propTypes.string.isRequired,
};
