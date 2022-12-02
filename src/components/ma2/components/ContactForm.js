import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
const regex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
const schema = yup.object().shape({
  name: yup.string().required("Please enter name").min(3, "Name must be atleast 3 characters"),
  age: yup.number().required("Please enter your age").typeError("please enter a number").min(10, "You must be atleast 10").max(20, "You must be under 20"),
  website: yup.string().required("Please enter your URL").matches(regex, "Enter a valid url"),
});

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log(data);
    reset();
    setSubmitted(true);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2 className="form-header">Contact Form</h2>
      {submitted && <p>Form was successfully submitted.</p>}
      <Form.Group>
        <Form.Label className="label">Name</Form.Label>
        <Form.Control placeholder="Enter Name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </Form.Group>

      <Form.Group>
        <Form.Label className="label">Age</Form.Label>
        <Form.Control placeholder="Enter Age" {...register("age")} />

        {errors.age && <p>{errors.age.message}</p>}
      </Form.Group>

      <Form.Group>
        <Form.Label className="label">URL</Form.Label>
        <Form.Control placeholder="Enter Url" {...register("website")} />
        {errors.website && <p>{errors.website.message}</p>}
      </Form.Group>

      <Button variant="primary" type="submit" className="button">
        Submit
      </Button>
    </Form>
  );
}
