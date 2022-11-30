import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../constants/api";

export default function BookDetail() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();
  //   const id = null;

  if (!id) {
    navigate("/");
  }

  const url = API_URL + "/" + id;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const json = await response.json();
            // console.log(json);
            setBook(json);
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }
  return (
    <div className="book-detail">
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
}
