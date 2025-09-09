import { motion } from "framer-motion";

const transition = (OgComponent) => {
  return function WithTransition(props) {
    // const t = { duration: 0.7, ease: [0.83, 0, 0.17, 1] }

    const t = {
      type: "spring",
      stiffness: 120, // forza della molla
      damping: 20,    // attrito
      mass: 0.8       // "peso"
    }

    return (
      <motion.div exit={{}} style={{ position: "relative" }}>
        <OgComponent {...props} />

        {/* Uscita: chiusura */}
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={t}
        />

        {/* Entrata: apertura */}
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={t}
        />
      </motion.div>
    );
  };
};

export default transition;
