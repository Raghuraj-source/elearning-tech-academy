import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "/apple.png",
      name: "Suyash Chitre",
      role: "Digital Marketing Student",
      text: "My personal experience with eLearning Tech Academy was good, especially when it comes to PPC the trainer here have the depth of knowledge over the subject line.",
      rating: 5,
      gradient: "bg-gradient-to-br from-orange-100 via-orange-50 to-white",
      shadowColor: "shadow-orange-500/20"
    },
    {
      id: 2,
      image: "/apple.png",
      name: "John Smith",
      role: "PPC Specialist",
      text: "Best Digital Marketing Career Academy among all! I suggest all my friends about eLearning Tech Academy. They provide depth course module both technically and strategically. Happy to be a part of Digiperform.",
      rating: 5,
      gradient: "bg-gradient-to-br from-blue-100 via-blue-50 to-white",
      shadowColor: "shadow-blue-500/20"
    },
    {
      id: 3,
      image: "/apple.png",
      name: "Kimz Hnamte",
      role: "Marketing Professional",
      text: "If you are looking for an institute which helps you learn digital marketing, then you must consider eLearning Tech Academy. They are the best in this field.",
      rating: 5,
      gradient: "bg-gradient-to-br from-purple-100 via-purple-50 to-white",
      shadowColor: "shadow-purple-500/20"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute w-[500px] h-[500px] -bottom-48 -right-48 bg-blue-500 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-orange-400 text-sm font-medium mb-6">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          What Our Trainees Have To Say
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Our Courses have Been Receiving an average rating of
          <span className="text-orange-400 font-semibold"> 9.4/10 </span> 
          from our course participants. Till date, Digiperform has trained 
          more than <span className="text-orange-400 font-semibold">75,000+</span> individuals.
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="overflow-hidden px-4">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-4"
              >
                <div 
                  className={`${testimonial.gradient} rounded-2xl p-8 backdrop-blur-sm 
                    shadow-xl hover:shadow-2xl transition-all duration-500 h-full 
                    border border-white/20 group hover:-translate-y-2 ${testimonial.shadowColor}`}
                >
                  {/* Profile Section */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <div className="mb-4">
                    <svg className="w-10 h-10 text-gray-300 group-hover:text-gray-400 transition-colors" 
                         fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full 
            shadow-lg hover:bg-white transition-all duration-300 z-10 group hover:scale-110"
        >
          <svg
            className="w-6 h-6 text-gray-800 group-hover:text-orange-500 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full 
            shadow-lg hover:bg-white transition-all duration-300 z-10 group hover:scale-110"
        >
          <svg
            className="w-6 h-6 text-gray-800 group-hover:text-orange-500 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-8 h-3 bg-orange-500' 
                  : 'w-3 h-3 bg-gray-500 hover:bg-gray-400'
              } rounded-full`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;