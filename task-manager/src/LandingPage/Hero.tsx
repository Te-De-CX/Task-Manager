import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Headline */}
          <h1 className="text-5xl font-bold mb-6  animate-fade-in">
            Organize Your Tasks Effortlessly
          </h1>

          {/* Description */}
          <p className="text-lg  mb-8 max-w-2xl mx-auto animate-fade-in-up">
            GoTaskList is your ultimate task management tool. Stay organized,
            boost productivity, and achieve your goals with ease. Whether you're
            managing personal tasks or team projects, we've got you covered.
          </p>

          {/* Call-to-Action Button */}
          <button className="bg-slate-300 text-black px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 transform hover:scale-105 animate-fade-in-up">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;