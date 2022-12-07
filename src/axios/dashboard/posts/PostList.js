import { useContext, useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorComponent from "../../../components/ma2/API/ErrorComponent";
import { AuthContext } from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const http = useAxios();
  const [auth, setAuth] = useContext(AuthContext);

  if (!auth) {
    setAuth("");
  }
  console.log(auth);

  useEffect(function () {
    async function getPosts() {
      try {
        const response = await http.get("wp/v2/posts");
        console.log(response);
        setPosts(response.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getPosts();
  }, []);
  if (loading) {
    return (
      <>
        <Spinner />
        <div>Posts are loading</div>
      </>
    );
  } else if (error) {
    return <ErrorComponent variant="danger" message={error} />;
  } else {
    return (
      <ul className="posts-container">
        {posts.map((post) => {
          return (
            <li key={post.id}>
              {/* <Link to={`/dashboard/posts/edit/${post.id}`}> {post.title.rendered}</Link> */}
              <Link to={auth ? `/dashboard/posts/edit/${post.id}` : "/post/" + post.id}> {post.title.rendered}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
