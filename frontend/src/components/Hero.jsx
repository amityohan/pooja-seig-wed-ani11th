
// import mainImg from '../images/main.jpg';
// import heartIcon from '../images/heart.png';


// function Hero() {
//   return (
//     <div className="bg-[#b9a6d3] py-20 px-4 relative overflow-hidden text-[#2e2e2e]">
//       {/* Background sparkles or particles */}
//       {/* <StarSparkles count={30} /> */}
//       {/* <ParticlesBackground /> */}

//       {/* Decorative floating hearts */}
//       <img src={heartIcon} alt="heart" className="absolute top-10 left-8 w-10 opacity-80 animate-bounce" />
//       <img src={heartIcon} alt="heart" className="absolute top-20 right-10 w-12 opacity-80 animate-float" />
//       <img src={heartIcon} alt="heart" className="absolute bottom-10 left-16 w-8 opacity-70 animate-ping" />
//       <img src={heartIcon} alt="heart" className="absolute bottom-16 right-24 w-10 opacity-70 animate-float" />
//       <img src={heartIcon} alt="heart" className="absolute top-32 left-1/3 w-6 opacity-60 animate-ping" />
//       <img src={heartIcon} alt="heart" className="absolute top-5 right-1/4 w-9 opacity-80 animate-bounce" />
//       <img src={heartIcon} alt="heart" className="absolute bottom-20 left-1/4 w-7 opacity-75 animate-float" />
//       <img src={heartIcon} alt="heart" className="absolute bottom-5 right-1/3 w-5 opacity-60 animate-ping" />

//       {/* Main content */}
//   <div className="text-center mb-6">
//     <h2 className="text-4xl font-bold text-rose-600 mb-2 font-serif">Happy 11th Anniversary!</h2>
//     <div className="w-20 h-1 bg-rose-300 mx-auto"></div>
//   </div>
//       <div className="mt-6 mb-6">
//         <img
//           src={mainImg}
//           alt="Couple main"
//           className="w-64 h-64 object-cover rounded-full mx-auto shadow-xl neon-glow"
//         />
//       </div>

//   <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg">
  
//   <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans">
//     To two incredible souls who have shown us the true meaning of love, commitment, and partnership. Over the years, you've created a beautiful journey together, full of laughter, memories, and unwavering support for each other like the power couple that you guys are.
//   </p>
  
//   <p className="text-lg text-gray-700 leading-relaxed mb-8 font-sans">
//     May your love continue to grow stronger with every passing year. Here's to many more years of happiness, love, and adventures together.
//   </p>
  
//   <div className="text-center">
//     <p className="text-2xl font-semibold text-rose-500 italic">Cheers to you both!</p>
//     <div className="flex justify-center mt-4">
//       <span className="text-4xl">🥂</span>
//     </div>
//   </div>
// </div>
//     </div>
//   );
// }

// export default Hero;


import { useState } from 'react';
import mainImg from '../images/main.jpg';
import heartIcon from '../images/heart.png';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#b9a6d3] py-20 px-4 relative overflow-hidden text-[#2e2e2e] min-h-screen">
      {/* Floating hearts */}
      <img src={heartIcon} alt="heart" className="absolute top-10 left-8 w-10 opacity-80 animate-bounce" />
      <img src={heartIcon} alt="heart" className="absolute top-20 right-10 w-12 opacity-80 animate-float" />
      <img src={heartIcon} alt="heart" className="absolute bottom-10 left-16 w-8 opacity-70 animate-ping" />
      <img src={heartIcon} alt="heart" className="absolute bottom-16 right-24 w-10 opacity-70 animate-float" />
      <img src={heartIcon} alt="heart" className="absolute top-32 left-1/3 w-6 opacity-60 animate-ping" />
      <img src={heartIcon} alt="heart" className="absolute top-5 right-1/4 w-9 opacity-80 animate-bounce" />
      <img src={heartIcon} alt="heart" className="absolute bottom-20 left-1/4 w-7 opacity-75 animate-float" />
      <img src={heartIcon} alt="heart" className="absolute bottom-5 right-1/3 w-5 opacity-60 animate-ping" />

      {/* Main content */}
      <div className="flex flex-col items-center">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-rose-600 mb-2 font-serif">Happy 11th Anniversary!</h2>
          <div className="w-20 h-1 bg-rose-300 mx-auto"></div>
        </div>

        <div className="mt-6 mb-6">
          <img
            src={mainImg}
            alt="Couple main"
            className="w-64 h-64 object-cover rounded-full mx-auto shadow-xl neon-glow"
          />
        </div>

        {/* Closed Envelope */}
        {!isOpen && (
          <div 
            className=" envelope-closed relative w-64 h-40 bg-rose-200 rounded cursor-pointer transition-all duration-300 hover:scale-105 mb-8"
            onClick={() => setIsOpen(true)}
          >
            <div className="envelope-flap absolute top-0 left-0 w-0 h-0 border-l-[128px] border-l-transparent border-r-[128px] border-r-transparent border-t-[70px] border-t-rose-300"></div>
            <div className="envelope-body absolute bottom-0 left-0 w-full h-[calc(100%-35px)] bg-rose-200 rounded-b"></div>
            <div className="envelope-label absolute bottom-4 left-1/2 transform -translate-x-1/2 text-rose-600 font-bold">Click to Open</div>
          </div>
        )}

        {/* Open Envelope and Message */}
        {isOpen && (
          <div className="animate-fade-in">
            <div className="envelope-open relative w-64 -mt-4">
              <div className= "w-full h-4 bg-rose-100 rounded-t-lg"></div>
            </div>
            
            <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl shadow-lg -mt-2">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-sans">
                To two incredible souls who have shown us the true meaning of love, commitment, and partnership. Over the years, you've created a beautiful journey together, full of laughter, memories, and unwavering support for each other like the power couple that you guys are.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-sans">
                May your love continue to grow stronger with every passing year. Here's to many more years of happiness, love, and adventures together.
              </p>
              
              <div className="text-center">
                <p className="text-2xl font-semibold text-rose-500 italic">Cheers to you both!</p>
                <div className="flex justify-center mt-4">
                  <span className="text-4xl">🥂</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;