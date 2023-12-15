import { useState } from "react";
import Context from "./context";

const Provider = ({ children }) => {
  const [cart, addToCart] = useState([]);
  const [showBag, setShowBag] = useState(false)

  return (
    <Context.Provider
      value={{
        cart,
        setAddToCart: (item) => addToCart((prev) => [...prev, item]),
        addToCart,
        showBag,
        setShowBag
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
