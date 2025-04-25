// import image1 from '../images/image1.jpg'
// import image2 from '../images/image2.jpg'
// import image3 from '../images/image3.jpg'
// import image4 from '../images/image4.jpg'
// import image5 from '../images/lastani.jpg'
// // C:\Users\sam\OneDrive\Desktop\Amit Yohan\poojaSeig-wed-anni\frontend\src\images\WhatsApp Image 2025-04-24 at 21.05.50_2f0b1b8f.jpg

// import {motion} from 'framer-motion';
// import StarSparkles from './starSparkles';

// function Gallery() {
//     const images = [
//       image1,
//       image2,
//       image3,
//       image4,
//       image5,
      
//     ];
  
//     return (
//       <div className=" py-16 px-4 text-[#2e2e2e]"> 
    
//   <motion.div className="relative">
//     <StarSparkles count={10} />
  
//   <div className="py-16 px-4">
//     <h2 className="text-3xl font-semibold mb-8 text-center">Photo Highlights</h2>

//   {/* First Row: 3 Images */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
//   {images.slice(0, 3).map((img, index) => (
//     <motion.div
//     key={index}
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6 }}
//     viewport={{ once: true }}
//     className="relative overflow-hidden"
//     >
//     <StarSparkles count={10} />
//     <img
//       src={img}
//       alt={`Anniversary ${index + 1}`}
//       className="w-full h-90 object-cover rounded-lg shadow-md relative overflow-hidden" 
//       />
//   </motion.div>
// ))}
//   </div>

//   {/* Second Row: 2 Images Centered */}
//   <div className="flex justify-center gap-6">
//     {images.slice(3).map((img, index) => (
//       <motion.div
//       key={index + 3}
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="relative overflow-hidden"
//       >
//       <StarSparkles count={10} />
//       <img
//         src={img}
//         alt={`Anniversary ${index + 4}`}
//         className="w-[300px] h-64 object-cover rounded-lg shadow-md"
//         />
//     </motion.div>
//     ))}
//   </div>
// </div>

// </motion.div>
//   </div>
//     );
//   }
  
//   export default Gallery;


import { useState } from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/lastani.jpg';
import { motion } from 'framer-motion';
import StarSparkles from './starSparkles';
import shuffleSound from '../assets/shuffle.mp3';

function Gallery() {
  const images = [image1, image2, image3, image4, image5];
  const [isGrid, setIsGrid] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  const handleClick = () => {
    if (!isGrid) {
      // Play shuffle sound
      const audio = new Audio(shuffleSound);
      audio.play();

      // Trigger shuffle animation before showing grid
      setIsShuffling(true);
      setTimeout(() => {
        setIsShuffling(false);
        setIsGrid(true);
      }, 500);
    } else {
      setIsGrid(false);
    }
  };

  return (
    <div className="py-16 px-4 text-[#2e2e2e]">
      <motion.div className="relative">
        <StarSparkles count={10} />
        <div className="py-16 px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Photo Highlights (click⬇️)</h2>

          <div
            className={`relative transition-all duration-700 ease-in-out ${
              isGrid ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6' : 'h-[500px]'
            }`}
            onClick={handleClick}
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                layout
                animate={isGrid ? {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  x: 0,
                  y: 0,
                  zIndex: 0
                } : {
                  rotate: Math.random() * 20 - 10,
                  x: index * 2 - 5,
                  y: index * 2 - 5,
                  scale: isShuffling ? 1.05 : 1,
                  transition: { duration: 0.2 }
                }}
                transition={{ duration: 0.8, type: 'spring' }}
                className={`cursor-pointer ${
                  isGrid
                    ? 'relative'
                    : 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                } w-[300px] h-64 object-cover rounded-lg shadow-md overflow-hidden`}
                style={!isGrid ? { zIndex: images.length - index } : {}}
              >
                <img
                  src={img}
                  alt={`Anniversary ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Gallery;
