import Heading from "../../layout/Heading";
import DashboardPage from "../DashboardPage";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../hooks/useAxios";
import MediaDropdown from "../media/mediaDropdown";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
});
export default function AddPost() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const navigate = useNavigate();
  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    data.status = "publish";

    console.log(data);

    try {
      const response = await http.post("/wp/v2/posts", data);
      console.log("response", response.data);
      navigate("/dashboard/posts");
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <DashboardPage>
      <Heading size="3" content="Add post" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <input name="title" placeholder="Title" {...register("title")} />
            {errors.title && <FormError>{errors.title.message}</FormError>}
          </div>

          <div>
            <textarea name="content" placeholder="Content" {...register("content")} />
          </div>

          <div>
            {/* <MediaDropdown register={register} /> */}
            <MediaDropdown />
          </div>
          <button>{submitting ? "Submitting..." : "Submit"}</button>
        </fieldset>
      </form>
    </DashboardPage>
  );
}
