import { useState } from "react";
import { Button } from "react-bootstrap";
import useAxios from "../../hooks/useAxios";
import { confirmAlert } from "react-confirm-alert";
import { useNavigate } from "react-router-dom";

export default function DeletePostButton({ id }) {
  const http = useAxios();
  const navigate = useNavigate();
  const [deleteError, setDeleteError] = useState(null);
  const [deletingPost, setDeletingPost] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const url = `wp/v2/posts/${id}`;
  async function handleDelete() {
    setDeletingPost(true);

    try {
      await http.delete(url);
      navigate(`/dashboard/posts`);
    } catch (error) {
      setDeleteError(error.toString());
    }
  }

  return (
    <Button variant="danger" onClick={handleDelete}>
      Delete
    </Button>
  );
}
