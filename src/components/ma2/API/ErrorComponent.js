import { Alert } from "react-bootstrap";

function ErrorComponent(props) {
  return <Alert variant={props.variant}>An error occured: {props.message}</Alert>;
}

export default ErrorComponent;
