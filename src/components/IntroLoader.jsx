import { AnimatePresence, motion } from "framer-motion";

export default function IntroLoader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.72, ease: [0.76, 0, 0.24, 1] } }}
        >
          <motion.div
            className="loader-logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45 }}
          >
            AK
          </motion.div>
          <div className="loader-title">Ahmed Kashif</div>
          <div className="loader-track">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
