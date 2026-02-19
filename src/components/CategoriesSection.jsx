import React from 'react';

const CategoriesSection = ({ categories }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <p className="text-gray-500 text-sm md:text-base font-medium tracking-[0.2em] mb-3 uppercase">Check out most sold artwork categories!</p>
        <h2 className="text-4xl md:text-6xl font-bold text-black uppercase tracking-tight">
          Top <span className="text-yellow-500">Selling Artwork</span> Categories
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-full">
        {categories.map((cat) => (
          <div key={cat.id} className="relative h-[350px] md:h-[450px] group overflow-hidden cursor-pointer border-r border-white/10 last:border-0 transition-transform duration-500">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: `url(${cat.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 opacity-60 group-hover:opacity-100"></div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-left items-start">
              <p className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2 transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">{cat.count}</p>
              <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wider relative group/item overflow-hidden">
                {cat.name}
                <span className="block h-1 bg-yellow-500 w-0 group-hover:w-full transition-all duration-500 ease-out mt-1"></span>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
