import { FooterProvider, FooterContext } from "./FooterContext";
import { useContext, useState } from "react";
export default function Footer() {
  const [style, setStyle] = useContext(FooterContext);

  return <div className={"footer" + " " + style}>FOOTER</div>;
}

// deep taupe
// light coral
// melon
// uranian blue
// cornflower blue
