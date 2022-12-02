import { API } from "../constants/api";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import { Alert, Button, Container, Image, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../Heading";
import ErrorComponent from "./ErrorComponent";

export default function GetProductDetail() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { id } = useParams();

  if (!id) {
    navigate("/");
  }
  const url = API + "/" + id;

  useEffect(
    function () {
      async function fetchProducts() {
        try {
          const response = await fetch(url);
          // GraphQL

          if (response.ok) {
            const json = await response.json();
            setProduct(json);
          } else {
            setError("Failed to fetch product");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchProducts();
    },
    [url]
  );
  if (loading) {
    return (
      <>
        <Spinner />
        <div>stuff be loadin</div>
      </>
    );
  } else if (error) {
    return <ErrorComponent variant="danger" message={error} />;
  } else if (product.length < 1) {
    return <ErrorComponent variant="warning" message="Product did not render" />;
  } else {
    const { featured, title, description, price, image_url } = product;
    console.log(title);
    return (
      <Container className="product">
        <Heading heading={title} />
        <Image src={image_url} className="product__img"></Image>
        <p className="product__desc">{description}</p>
        <div>
          <p>Price:</p>
          <p>{price}</p>
        </div>
        <Button>BUY NOW</Button>
      </Container>
    );
  }
}
