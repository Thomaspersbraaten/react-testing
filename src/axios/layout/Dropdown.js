import { useContext } from "react";
import Form from "react-bootstrap/Form";
import { FooterContext } from "./FooterContext";

export default function Dropdown() {
  const [style, setStyle] = useContext(FooterContext);
  function handleChange(e) {
    setStyle(e.target.value);
  }
  //   return (
  //     <Form.Select aria-label="Default select example" onChange={handleChange}>
  //       <option>Open this select menu</option>
  //       <option value="deep-taupe">deep taupe</option>
  //       <option value="light-coral">light coral</option>
  //       <option value="melon">melon</option>
  //       <option value="uranian-blue">uranian blue</option>
  //       <option value="cornflower-blue">cornflower blue</option>
  //     </Form.Select>
  //   );
  const options = [
    {
      label: "deep-taupe",
      value: "deep-taupe",
    },
    {
      label: "light-coral",
      value: "light-coral",
    },
    {
      label: "melon",
      value: "melon",
    },
    {
      label: "uranian-blue",
      value: "uranian-blue",
    },
    {
      label: "cornflower-blue",
      value: "cornflower-blue",
    },
  ];

  return (
    <Form.Select onChange={handleChange}>
      <option value="">Select colour</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
      ;
    </Form.Select>
  );
}
