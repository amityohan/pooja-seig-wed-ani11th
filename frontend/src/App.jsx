import React, {useEffect} from "react";
import Footer from "./components/footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import {motion} from "framer-motion";
import Shimmer from "./components/shimmer";
import backgroundMusic from "../src/assets/bluesong.mp3"


function App() {

  useEffect(() => {
    const bgAudio = new Audio(backgroundMusic);
    bgAudio.loop = true;
    bgAudio.volume = 0.5;

    const playMusic = () => {
      bgAudio.play();
      document.removeEventListener('click', playMusic);
    };

    document.addEventListener('click', playMusic);
    return () => {
      bgAudio.pause();
      bgAudio.currentTime = 0;
      document.removeEventListener('click', playMusic);
    };
  }, []);


  return (
    // <div className="text-3xl text-center mt-20 text-pink-600">
    //   🎉 Happy Anniversary Website coming soon!
    // </div>
    <div className="font-sans text-center text-gray-800 bg-pink-50 min-h-screen">
      <div className="relative">
      
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      >
        <Shimmer/>
        <Hero />
        <Gallery />
        <Footer />
    </motion.div>
        </div>
    </div>
  );
}

export default App;