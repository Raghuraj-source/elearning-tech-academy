const Certified = () => {
  const programs = [
    {
      category: "Data Science",
      title: "Data Science, AI & ML",
      background: "bg-gray-900",
      textColor: "text-white",
      badge: {
        text: "Data Science",
        color: "bg-[#FF6B3D]"
      }
    },
    {
      category: "Annual Program",
      title: "Annual DigiHero Program",
      background: "bg-gray-800",
      textColor: "text-white",
      badge: {
        text: "Annual Program",
        color: "bg-[#FF6B3D]"
      }
    },
    {
      category: "Digital Marketing",
      title: "Online Marketing Professional",
      background: "bg-[#FF6B3D]",
      textColor: "text-white",
      badge: {
        text: "Digital Marketing",
        color: "bg-gray-900"
      }
    },
    {
      category: "Digital Marketing",
      title: "Online Marketing Practitioner",
      background: "bg-gray-900",
      textColor: "text-white",
      badge: {
        text: "Digital Marketing",
        color: "bg-[#FF6B3D]"
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FF6B3D]">
          eLearning Tech Academy Certified Programs.
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-[#FF6B3D]">
          Join The Next Revolution Now!
        </h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
          eLearning Tech Academy, as a Leading Digital Marketing Courses & Certification 
          Academy, provides value-for-money courses which you can afford at 
          the best price in the market. 6700+ eLearners got a placement 
          with eLearning Tech AcademyCertifications in top brands.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((program, index) => (
          <div 
            key={index}
            className={`${program.background} rounded-2xl p-6 transition-transform hover:scale-105 cursor-pointer`}
          >
            <div className="space-y-4">
              <span className={`${program.badge.color} text-white px-4 py-1 rounded-full text-sm font-medium`}>
                {program.badge.text}
              </span>
              <h3 className={`${program.textColor} text-2xl font-bold mt-4`}>
                {program.title}
              </h3>
              <div className="flex items-center">
                <span className={`${program.textColor} text-lg opacity-80`}>Know More</span>
                <svg 
                  className={`w-5 h-5 ml-2 ${program.textColor}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certified;