import Heading from "../../layout/Heading";
import DashboardPage from "../DashboardPage";
import { useEffect, useState } from "react";
import { Button, Container, FormSelect, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ErrorComponent from "../../../components/ma2/API/ErrorComponent";
import useAxios from "../../hooks/useAxios";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Message from "../../components/Message";
import DeletePostButton from "./DeletePostButton";
import { StatusDropdown } from "../../components/StatusDropdown";
const schema = yup.object().shape({
  title: yup.string().required("Title is required").min(3, "Please make title at least 4 characters"),
  content: yup.string().required("Content is required").min(10, "Content must be minimum 10 characters"),
  status: yup.string().required("ok"),
});
export default function EditPost() {
  const [post, setPost] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [updatingPost, setUpdatingPost] = useState(false);
  const [updateError, setUpdateError] = useState(null);
  const [fetchingPost, setFetchingPost] = useState(true);
  const [status, setStatus] = useState("published");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { id } = useParams();
  const http = useAxios();
  const url = `wp/v2/posts/${id}`;

  useEffect(function () {
    async function getPost() {
      try {
        const response = await http.get(url);
        console.log(response.data);
        setPost(response.data);
      } catch (error) {
        setFetchError(error.toString());
      } finally {
        setFetchingPost(false);
      }
    }
    getPost();
  }, []);
  async function updatePost(data) {
    setUpdatingPost(true);
    setUpdateError(null);
    setUpdated(false);
    console.log(data);
    try {
      const response = await http.put(`wp/v2/posts/${id}`, data);
      console.log(response);
      setUpdated(true);
      setPost(response.data);
    } catch (error) {
      setUpdateError(error.toString());
    } finally {
      setUpdatingPost(false);
    }
  }

  const statuses = [
    {
      label: "publish",
      value: "publish",
    },
    {
      label: "future",
      value: "future",
    },
    {
      label: "draft",
      value: "draft",
    },
    {
      label: "pending",
      value: "pending",
    },
    {
      label: "private",
      value: "private",
    },
  ];

  if (fetchingPost) return <div>loading..</div>;
  if (fetchError) return <ErrorComponent variant="danger" message="ok" />;
  // function handleChange(e) {
  //   setStatus(e.target.value);
  // }

  return (
    <DashboardPage>
      <Heading content="Edit Post" />
      <form onSubmit={handleSubmit(updatePost)}>
        {updated && <Message variant="success" message="The post was updated" />}
        {updateError && <ErrorComponent variant="danger" message={updateError} />}
        <fieldset disabled={updatingPost}>
          <div>
            <label>Title</label>
            <input name="title" defaultValue={post.title.rendered} placeholder="Title" {...register("title")} />
            {errors.title && <Message variant="warning" message={errors.title.message} />}
          </div>
          <div>
            <label>Content</label>
            <textarea name="content" defaultValue={post.content.rendered} placeholder="Content" {...register("content")} />

            {errors.content && <Message variant="warning" message={errors.content.message} />}
          </div>
          <FormSelect name="status" {...register("status")} defaultValue={post.status}>
            {statuses.map((status) => (
              <option key={status.value}>{status.label}</option>
            ))}
            ;
          </FormSelect>
          <button>Update</button>
          <hr />
          <DeletePostButton id={post.id} />
        </fieldset>
      </form>
    </DashboardPage>
  );
}
