import { API_URL } from "../constants/api";
import { useEffect, useState } from "react";

export default function Booklist() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setBooks(json);
        } else {
          setError("An error occureddd");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>ERROR: {error}</div>;
  }
  return (
    <>
      {books.map(function (book) {
        return <div key={book.id}>{book.title}</div>;
      })}
    </>
  );
}
