"use client";
import { motion } from "framer-motion";

import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const RevelMotion = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const mainControles = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControles.start("visible");
    }
  });
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControles}
      transition={{
        duration: 0.5,
        delay: 0.25,
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevelMotion;
