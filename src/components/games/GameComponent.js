import { Image } from "react-bootstrap";

export default function GameComponent({ name, released, description, image, genre }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{released}</p>
      <p>{description}</p>
      <Image src={image}></Image>
      <p>{genre}</p>
    </div>
  );
}
