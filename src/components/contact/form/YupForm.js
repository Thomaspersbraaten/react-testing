import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Alert, Container } from "react-bootstrap";
import Select from "react-select";
import { useState } from "react";
const DEFAULT_VALUES = {
  skills: "",
};
const SKILLS = [
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "Sass", label: "Sass" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "React", label: "React" },
  { value: "Angular", label: "Angular" },
  { value: "Vue", label: "Vue" },
  { value: "PHP", label: "PHP" },
  { value: "C#", label: "C#" },
  { value: "Wordpress", label: "Wordpress" },
  { value: "MySQL", label: "MySQL" },
];
const pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name").min(4, "Name must be atleast 4 characters"),
  email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
  password: yup.string().required("Please enter a password").matches(pass, "Your password is not valid"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function YupForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    setSubmitted(true);
    reset(DEFAULT_VALUES);
  }

  console.log(errors);

  //   return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //       <input {...register("name")} />
  //       {errors.name && <span>{errors.name.message}</span>}

  //       <input {...register("email")} />
  //       {errors.email && <span>{errors.email.message}</span>}

  //       <textarea {...register("message")} />
  //       {errors.message && <span>{errors.message.message}</span>}

  //       <button>Send</button>
  //     </form>
  //   );
  return (
    <Container>
      <h1>Registration</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {submitted && <Alert variant="success">it workd</Alert>}
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Name" {...register("name")} />
          <Form.Text className="text-muted">At least 4 characters.</Form.Text>
          {errors.name && <p>{errors.name.message}</p>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control placeholder="Password" type="password" autoComplete="current-password" {...register("password")} />
          <Form.Text className="text-muted">Minimum eight characters, at least one letter and one number:</Form.Text>
          {errors.password && <p>{errors.password.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control placeholder="Confirm Password" type="password" {...register("confirmPassword")} />
          <Form.Text className="text-muted">Minimum eight characters, at least one letter and one number:</Form.Text>
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </Form.Group>
        <Form.Group>
          <Controller name="skills" control={control} render={({ field }) => <Select isMulti options={SKILLS} {...field} />} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

// username
// pw
// ThomasPerry
// UQg@uGDj1yOum5oeBT
