import { useState, useEffect, useRef } from 'react';
import { useCasesData } from '../data/useCases';

const UseCases = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % useCasesData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  return (
    <section
      id="use-cases"
      className="py-24 bg-gradient-to-b from-crypto-blue to-[#12141C]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            DeFiGate Use Cases
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            How individuals, businesses, and developers use DeFiGate to move
            seamlessly between local currency and blockchain networks.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {useCasesData.map((useCase, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10 text-center">
                    {useCase.icon && (
                      <div className="flex justify-center mb-6">
                        <img
                          src={useCase.icon}
                          alt={useCase.title}
                          className="w-14 h-14"
                        />
                      </div>
                    )}

                    <h3 className="text-xl font-semibold text-white mb-4">
                      {useCase.title}
                    </h3>

                    <p className="text-gray-300 max-w-xl mx-auto">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {useCasesData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-crypto-purple'
                    : 'w-2 bg-gray-500'
                }`}
                aria-label={`Go to use case ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
