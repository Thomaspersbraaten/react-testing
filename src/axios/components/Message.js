import { Alert } from "react-bootstrap";

export default function Message(props) {
  return <Alert variant={props.variant}>{props.message}</Alert>;
}
