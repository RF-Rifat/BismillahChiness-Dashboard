import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function NumberCount({ number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, number, {
      duration: 2,
    });

    return animation.stop;
  }, [count, number]);

  return <motion.h1>{rounded}</motion.h1>;
}
