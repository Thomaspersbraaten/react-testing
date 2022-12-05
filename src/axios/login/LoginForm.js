import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { BASE_URL, TOKEN_PATH } from "../../axios/api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Alert, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your name").min(4, "Name must be atleast 4 characters"),
  password: yup.string().required("Please enter a password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();
  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      console.log(response.data.token);
      setAuth(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError>{loginError}</FormError>}
        <fieldset disabled={submitting}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="username" {...register("username")} />
            {errors.username && <p>{errors.username.message}</p>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder="Password" {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
          </Form.Group>
          {/* <div>
            <input name="password" placeholder="Password" {...register("password")} type="password" />
            {errors.password && <FormError>{errors.password.message}</FormError>}
          </div> */}
          <button>{submitting ? "Loggin in..." : "Login"}</button>
        </fieldset>
      </Form>
    </>
  );
}
