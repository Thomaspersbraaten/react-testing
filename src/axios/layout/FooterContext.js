import { createContext, useState } from "react";
import useLocalStorage from "../login/useLocalStorage";

export const FooterContext = createContext([null, () => {}]);
export const FooterProvider = (props) => {
  const [style, setStyle] = useLocalStorage("style", null);
  console.log(style);
  return <FooterContext.Provider value={[style, setStyle]}>{props.children}</FooterContext.Provider>;
};
