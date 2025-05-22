import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-sky-300 to-sky-600 text-white">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-50">
        <h1 className="text-xl font-bold">Deep with Smruti</h1>
        <ul className="flex gap-4 font-medium">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Story</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center h-full text-center px-4 z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Living Between Breaths
        </motion.h2>

      {/* Scuba Diver Image */}
      <motion.img
        src="/images/scuba-diver.png"
        alt="Scuba Diver"
        className="absolute bottom-0 right-4 w-32 md:w-48 opacity-80 z-10"
        animate={{
          x: [0, 50, 0],       // movement on X-axis (left/right)
          y: [0, -20, 0],      // movement on Y-axis (up/down)
          rotate: [0, 10, -10, 0], // rotation
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.img
        src="/images/fish.png"
        alt="Scuba Diver"
        className="absolute bottom-0 left-6 w-32 md:w-18 opacity-80 z-10"
        animate={{
          x: [0, -50, 0],       // movement on X-axis (left/right)
          y: [0, -20, 0],      // movement on Y-axis (up/down)
          rotate: [0, 10, -10, 0], // rotation
          }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl"
        >
          A journey of one breath, one dive, one soul.
        </motion.p>
      </div>

      {/* Bubble animations */}
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden z-0">
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
    </section>
  );
};

export default Hero;
