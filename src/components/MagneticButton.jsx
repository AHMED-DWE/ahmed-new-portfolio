import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({ href, className = "", children, ...props }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 22 });
  const springY = useSpring(y, { stiffness: 300, damping: 22 });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.16);
    y.set(relY * 0.16);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      data-cursor="interactive"
      {...props}
    >
      {children}
    </motion.a>
  );
}
