import React from 'react';
import bg_img from '../assets/bg_img.png';

const Banner = () => {
  return (
    <section className="mt-20 relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute">
        <img
          src={bg_img}
          alt="Art Gallery Banner"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
      </div>



      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
};

export default Banner;
