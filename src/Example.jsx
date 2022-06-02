import React, { useState } from "react";
import { motion } from "framer-motion";
const Example = () => {
  const [active, setActive] = useState(false);
  return (
    <motion.div
      style={
        active
          ? {
              width: "500px",
              height: "250px",
              background: "blue",
              color: "#fff",
              transition: "0.3s ease",
            }
          : {
              width: "200px",
              height: "250px",
              background: "red",
              color: "#fff",
              transition: "0.3s ease",
            }
      }
      onClick={() => setActive(!active)}
    >
      Example
    </motion.div>
  );
};

export default Example;
