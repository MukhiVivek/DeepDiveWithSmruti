import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-sky-200 py-12 flex flex-col md:flex-row items-center px-6">
      <motion.img
        src="/sister.jpg"
        alt="Freediver"
        className="rounded-2xl w-60 md:w-96 mb-6 md:mb-0 md:mr-12 shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold mb-4">Meet [Her Name]</h3>
        <p className="text-lg text-gray-800 max-w-xl">
          I am a soul connected to the sea. Through freediving, I’ve discovered the quiet depths of strength, discipline, and nature.
        </p>
      </motion.div>
    </section>
  );
};
