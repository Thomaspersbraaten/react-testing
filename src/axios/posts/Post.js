import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Heading from "../layout/Heading";
import moment from "moment/moment";

export default function Post() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const http = useAxios();
  const url = `wp/v2/posts/${id}`;

  useEffect(() => {
    async function getPost() {
      try {
        const response = await http.get(url);
        console.log(response.data);
        setPost(response.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getPost();
  }, []);
  if (loading) {
    return (
      <>
        <Spinner />

        <div>Posts are loading</div>
      </>
    );
  }
  console.log(typeof post.title.rendered);
  function bodyText() {
    return { __html: post.excerpt.rendered };
  }
  function BodyComponent() {
    return <div dangerouslySetInnerHTML={bodyText()} />;
  }

  const postDate = moment(post.date).format(`Do MMMM YYYY`);
  return (
    <div>
      <Heading content={post.title.rendered}></Heading>
      <p>{postDate}</p>
      <BodyComponent />
    </div>
  );
}
