import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  // Set a timeout to mark animation completion
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 1500); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative flex flex-col h-[49.7rem] w-full">
      <img
        src="https://files.cdn-files-a.com/uploads/9435802/2000_668d1172b242c.jpg"
        alt="Home"
        className="object-cover h-full w-full"
      />
      <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      <div className="absolute top-1/4 left-10 text-white">
        <motion.h1
          className="text-4xl font-bold mb-2"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Mental Wellness Haven
        </motion.h1>
        
        <motion.h2
          className="text-xl italic"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          A Caring Environment for Mental Health Recovery
        </motion.h2>
      </div>
    </div>
  );
}

export default Home;
