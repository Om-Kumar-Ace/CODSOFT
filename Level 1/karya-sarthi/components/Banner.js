import { useSpring, animated } from 'react-spring';

const Banner = ({ src, currentIndex, banners, onDotClick }) => {
  const bannerAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    delay: 500,
  });

  return (
    <div className="relative w-auto h-full">
      <img style={bannerAnimation} src={src} alt="Banner" className="w-full h-full object-cover p-4" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
