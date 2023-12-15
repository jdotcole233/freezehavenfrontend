import { useState } from "react";
import Context from "./context";

const Provider = ({ children }) => {
  const [cart, addToCart] = useState([]);

  return (
    <Context.Provider
      value={{
        cart,
        setAddToCart: (item) => addToCart((prev) => [...prev, item]),
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
