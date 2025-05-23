import { motion } from "framer-motion";
import HeartIcon from "../Icon/Hearticon";
import Watericon from "../Icon/Watericon";
import RightArrow from "../Icon/RightArrow";

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
      

      

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold">How can I help you?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
          <motion.div
            className="bg-white/10w-full md:w-xl  mb:h-60 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6}}
            viewport={{ once: true }}
          >
            <div className="w-14  mb-3  h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10"> <HeartIcon  /> </div>
            <h3 className="text-3xl font-semibold mb-3 ml-2">Be Brave Again</h3>
            <p className="text-xl text-gray-300 mb-2 ml-2">Reconnect with your body, clear mental fog, and feel like yourself again.</p>
            <p className="text-xl text-gray-100 ml-2">5-day ocean reset</p>
            <p className="text-2xl text-gray-300 ml-2 mt-4 flex items-center ">Learn More <b><RightArrow /></b> </p>
          </motion.div>

          <motion.div
            className="bg-white/10w-full md:w-xl  mb:h-60 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6}}
            viewport={{ once: true }}
          >
            <div className="w-14  mb-3  h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10"> <Watericon  /> </div>
            <h3 className="text-3xl font-semibold mb-3 ml-2">Be friends with water</h3>
            <p className="text-xl text-gray-300 mb-2 ml-2">Relax and feel safe in water — even if it's scared you before.</p>
            <p className="text-xl text-gray-300 ml-2">Weekend experience</p>
            <p className="text-2xl text-gray-100 ml-2 mt-4 flex items-center ">Learn More <b><RightArrow /></b> </p>
          </motion.div>
      </div>

{/* Scuba Diver Image */}
      <motion.img
        src="/images/freediver2.png"
        alt="Scuba Diver"
        className="absolute bottom-0 right-0 md:right-4 w-52 md:w-88 opacity-80 z-10"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, 0],
          x: [0, 10, 0],
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
        className="absolute bottom-0 left-4 w-32 md:w-48 opacity-60 z-10"
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
      
      <Bubbles />
      
    </section>
  );
};

export default Achievements;
