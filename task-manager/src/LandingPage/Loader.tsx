import React from 'react';
import Lottie from 'lottie-react';
import animationData from './animation.json'; // Adjust the path to your JSON file

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 200, height: 200 }} // Adjust size as needed
      />
    </div>
  );
};

export default Loader;