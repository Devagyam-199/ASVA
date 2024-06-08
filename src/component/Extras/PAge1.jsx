import React from 'react';
import img1 from "./Images/PAge1main.jpeg";

const PAge1 = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-7 py-10 md:py-20 lg:py-30">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold">
        AI Resume Parsing Top of the World
      </h1>
      <p className="text-lg md:text-xl lg:text-md text-center font-semibold text-gray-400">
        Prepare to test the most accurate resume parsing program ever developed - the NextGen Resume Parser.
      </p>
      <img
        className="md:w-1/2 lg:w-2/3 "
        src={img1}
        alt="image"
        style={{
          maxWidth:"700px",
          maxHeight:"550px",
          objectFit: "cover",
        }}
      />
      <button
        className="bg-purple-700 text-white font-medium rounded-lg px-6 py-4"
      >
        Test Your Resume Now
      </button>
    </div>
  );
};

export default PAge1;