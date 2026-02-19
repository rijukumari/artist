import React from 'react';

const ArtistShowcase = ({ users, activeId, direction, handleMouseEnter, setActiveId }) => {
  const activeProfile = users.find((u) => u.id === activeId) || null;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      <div className="absolute inset-0 overflow-hidden">
        {activeProfile && (
          <>
            {/* Blurred Backdrop */}
            <div
              className="absolute inset-0 transition-all duration-1000 bg-center bg-no-repeat bg-cover scale-110"
              style={{
                backgroundImage: `url(${activeProfile.image})`,
                filter: 'blur(15px) brightness(0.6)',
                zIndex: 0
              }}
            />
            {/* Centered Image (High Visibility) */}
            <img
              key={activeProfile.id}
              src={activeProfile.image}
              alt={activeProfile.name}
              referrerPolicy="no-referrer"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] h-[85vh] object-contain pointer-events-none transition-opacity duration-1000"
              style={{ zIndex: 1 }}
            />
          </>
        )}
      </div>

      {/* Background Heading - Centered above the card */}
      <h1 className="hero-title   text-7xl md:text-5xl text-center absolute top-4 md:top-6  -translate-x-1/2 z-40 max-w-full px-4 w-full">
        MOST VISITED ARTISTS
      </h1>

      {/* Vertical "ARTISTS" text on right side */}
      <div className="absolute right-4 md:right-12 top-32 z-40">
        <h2 className="text-white text-4xl md:text-7xl font-black uppercase tracking-[0.40em] md:tracking-[0.25em] vertical-text">
          ARTISTS
        </h2>
      </div>

      {/* Subtle Gradient for Top-Left Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-transparent z-10 pointer-events-none"></div>

      {/* Artist Detail Text in the Background (Top Left) - Responsive */}
      <div className="absolute left-4 md:left-12 top-24 md:top-40 z-30 pointer-events-none max-w-[90vw] md:max-w-none">
        {activeProfile && (
          <div
            key={activeProfile.id}
            className="flex flex-col items-start artist-info-animate"
          >
            <span className="text-yellow-400/90 text-[0.6rem] md:text-sm font-bold uppercase tracking-[0.3em] md:tracking-[0.6em] mb-2 md:mb-4 block drop-shadow-[0_2px_8px_rgba(250,204,21,0.4)]">
              Artist Spotlight
            </span>
            <h2 className="text-white text-3xl  lg:text-4xl font-serif font-black uppercase tracking-[0.04em] md:tracking-[0.08em] leading-tight mb-2 md:mb-5 max-w-2xl artist-name-glow">
              {activeProfile.name}
            </h2>
            <div className="w-16 md:w-28 h-1 md:h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500/60 mb-3 md:mb-7 shadow-[0_0_20px_rgba(250,204,21,0.7)] rounded-full"></div>

            <div className="flex flex-col  md:gap-2">

              <p className="text-white/80 text-[0.40rem] md:text-lg lg:text-lg tracking-[0.1em] md:tracking-[0.35em] uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] flex flex-wrap gap-1 md:gap-3 mt-1 md:mt-2">
                <span>{activeProfile.city}</span>
                <span className="text-white/40">•</span>
                <span>{activeProfile.state}</span>
                <span className="text-white/40">•</span>
                <span>{activeProfile.country}</span>
              </p>
              <div className="block items-center gap-2 md:gap-5 flex-wrap">
                <p className="text-white text-xs md:text-xl lg:text-2xl font-semibold tracking-[0.1em] md:tracking-[0.25em] uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  {activeProfile.role}
                </p>
                <span className="hidden md:block h-8 w-[2px] bg-gradient-to-b from-white/60 to-white/20"></span>
                <p className="text-yellow-400 text-xs md:text-lg lg:text-lg font-bold tracking-[0.06em] md:tracking-[0.12em] drop-shadow-[0_4px_12px_rgba(250,204,21,0.4)]">
                  {activeProfile.artworksCount}+ Artworks
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center z-10 w-full max-w-6xl relative py-16 md:py-32">
        <div className="relative flex flex-col items-center justify-center gap-6 md:gap-12">
          {/* Main Card - Responsive sizing */}

          <div className="relative w-[300px] h-[380px] sm:w-[100px] sm:h-[500px] md:w-[500px] md:h-[600px] lg:w-[380px] lg:h-[500px]">
            {activeId && (
              <div
                key={`${activeId}-${direction}`}
                className={`absolute inset-0 ${direction === 'left'
                  ? 'animate-card-tree-fall-left'
                  : 'animate-card-tree-fall-right'
                  } flex items-center justify-center`}
              >
                <div
                  className="relative w-full h-full bg-white rounded-[40px] shadow-[0_50px_160px_rgba(0,0,0,0.45)] flex items-center justify-center"
                >
                  <div className="relative w-[98%] h-[98%] overflow-hidden rounded-[26px]">
                    <img
                      src={activeProfile.image}
                      alt={activeProfile.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Thumbnails Circular "Tree-Fall" Style Carousel - Responsive */}
          <div
            className="relative w-full h-32 md:h-48 flex justify-center -mt-16 md:-mt-32 overflow-visible"
            onMouseLeave={() => setActiveId(activeProfile.id)}
          >
            <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
              {users.map((user, index) => {
                const activeIndex = activeId
                  ? users.findIndex((u) => u.id === activeId)
                  : 0;
                const offset = index - activeIndex;
                const isActive = activeId === user.id;

                // Responsive Circular Arc Math
                const angle = offset * 22;
                const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 220;
                const tx =
                  Math.sin((angle * Math.PI) / 180) * radius;
                const ty =
                  (1 - Math.cos((angle * Math.PI) / 180)) * radius;

                return (
                  <div
                    key={user.id}
                    className="absolute transition-all duration-1000 cubic-bezier(0.19, 1, 0.22, 1) cursor-pointer"
                    style={{
                      left: '50%',
                      transform: `translateX(calc(-50% + ${tx}px)) translateY(${ty}px) rotate(${angle}deg) scale(${isActive ? 1.3 : 0.9
                        })`,
                      zIndex: 100 - Math.abs(offset),
                      opacity:
                        Math.abs(offset) > 5
                          ? 0
                          : isActive
                            ? 1
                            : 0.7,
                      transformOrigin: 'bottom center',
                    }}
                    onMouseEnter={() => handleMouseEnter(user)}
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full border-2 md:border-4 ${isActive
                        ? 'border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.6)]'
                        : 'border-white'
                        } overflow-hidden shadow-xl transition-all duration-500 bg-white group hover:scale-110`}
                    >
                      <img
                        src={user.thumb}
                        alt={user.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                      />
                    </div>

                    {isActive && (
                      <div className="absolute inset-0 rounded-full animate-pulse border-2 border-white/50 "></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistShowcase;
