import { motion } from "framer-motion";

const achievements = [
  {
    title: "Certified Free Diver",
    year: "2021",
    description: "Completed AIDA Level 3 with excellence and deep breath hold record.",
  },
  {
    title: "Ocean Cleanup Campaign",
    year: "2022",
    description: "Led a local ocean cleanup dive and educated over 100 people.",
  },
  {
    title: "Underwater Photography Award",
    year: "2023",
    description: "Won 1st place in national underwater photography challenge.",
  },
];

export const Bubbles = () => {

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 20}px`,
          }}
          animate={{
            y: -800,
            opacity: [0.2, 0.1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

const Achievements = () => {
  return (
    <section className="relative bg-gradient-to-b from-sky-600 to-blue-700 text-white py-16 px-4 md:px-12 overflow-hidden">
      <Bubbles />

      {/* Scuba Diver Image */}
      <motion.img
        src="/images/freediver2.png"
        alt="Scuba Diver"
        className="absolute bottom-0 right-4 w-32 md:w-88 opacity-80 z-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          x: [0, 50, 0],
          }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.img
        src="/images/starfish.png"
        alt="Scuba Diver"
        className="absolute bottom-0 left-4 w-32 md:w-48 opacity-80 z-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          x: [0, 50, 0],
          }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        <p className="text-gray-300 mt-2">Moments that shaped her journey</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-300 mb-2">{item.year}</p>
            <p className="text-gray-100">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
