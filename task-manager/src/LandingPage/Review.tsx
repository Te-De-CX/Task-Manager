import React from "react";

const ReviewsPage: React.FC = () => {
  // Sample review data
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      role: "Freelancer",
      comment:
        "GoTaskList has completely transformed how I manage my tasks. It's intuitive, fast, and reliable!",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Project Manager",
      comment:
        "I love how easy it is to collaborate with my team using GoTaskList. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Alex Johnson",
      role: "Student",
      comment:
        "As a student, GoTaskList helps me stay organized and focused. The interface is clean and simple.",
      rating: 4,
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Entrepreneur",
      comment:
        "GoTaskList is a game-changer for my business. It keeps me on track and boosts my productivity.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-black mb-12 animate-fade-in">
          What Our Users Say
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
            >
              {/* User Info */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-black font-bold">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-black">
                    {review.name}
                  </h3>
                  <p className="text-sm text-slate-600">{review.role}</p>
                </div>
              </div>

              {/* Review Comment */}
              <p className="text-slate-700 mb-4">{review.comment}</p>

              {/* Rating */}
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;