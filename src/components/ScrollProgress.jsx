import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });

  return <motion.div className="scroll-progress" style={{ scaleX: smoothProgress }} aria-hidden="true" />;
}
