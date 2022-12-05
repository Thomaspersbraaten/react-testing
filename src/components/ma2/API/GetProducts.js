import { API } from "../constants/api";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import { Container, Row, Spinner } from "react-bootstrap";
import ErrorComponent from "./ErrorComponent";

export default function GetProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function fetchProducts() {
      try {
        const response = await fetch(API);
        // GraphQL

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setProducts(json);
        } else {
          setError("Failed to get products");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <>
        <Spinner />
        <div>Products are loading</div>
      </>
    );
  } else if (error) {
    return <ErrorComponent variant="danger" message={error} />;
  } else if (products.length < 1) {
    return <ErrorComponent variant="warning" message="we dont have any available products" />;
  } else {
    return (
      <Container>
        <Row>
          {products.map((product) => {
            const { id, title, image_url, description } = product;
            return <Product key={id} id={id} title={title} image={image_url} description={description}></Product>;
            // return <Product key={id} product={product}></Product>;
          })}
        </Row>
      </Container>
    );
  }
}
