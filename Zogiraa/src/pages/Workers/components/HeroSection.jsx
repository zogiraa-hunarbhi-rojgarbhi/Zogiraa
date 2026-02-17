// import { HardHat } from "lucide-react";
// function HeroSection() {
//   return (
//     <>
//       <section className="bg-[#FFFBEB] h-200 md:h-110 px-8 py-10 md:py-12">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 flex justify-center items-center transition-all duration-300">
//           <div className="space-y-6 ">
//             <h1 className="mt-10 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
//               Hire Verified & <br />
//               <span className="text-blue-600">Skilled Workers</span>
//             </h1>
//             <p className="text-gray-600 text-md max-w-md">
//               The modern platform connecting skilled workers with employers for
//               seamless job matching
//             </p>
//             <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-blue-700 transition shadow-lg">
//               <HardHat size={20} />
//               For Labours
//             </button>
//           </div>
//           <div className="md:mt-12 relative flex justify-center">
//             <div className="rounded-3xl overflow-hidden shadow-2xl w-90 h-90 md:w-75 md:h-75 aspect-square bg-gray-200">
//               <img
//                 src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
//                 alt="Skilled worker"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
// export default HeroSection;
import { HardHat } from "lucide-react";
import "./HeroSection.css"; // Import the separate CSS

function HeroSection() {
  return (
    <section className="hero-wrapper">
      <div className="hero-inner">
        
        <div className="hero-content">
          <h1>
            Hire Verified & <br />
            <span>Skilled Workers</span>
          </h1>
          <p className="hero-description">
            The modern platform connecting skilled workers with employers for
            seamless job matching
          </p>
          <button className="hero-cta-btn">
            <HardHat size={20} />
            For Labours
          </button>
        </div>

        <div className="hero-visual">
          <div className="image-frame">
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
              alt="Skilled worker"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;