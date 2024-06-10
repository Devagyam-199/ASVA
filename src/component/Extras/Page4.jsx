import { useState } from "react";

const Page4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Improves data-driven decisions.",
      description:
        "Accurate search, match, and analysis capabilities are built on the foundation of rich and full applicant and job data.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 448 512"
        >
          <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" />
        </svg>
      ),
    },
    {
      title: "Streamline recruitment processes",
      description:
        "Using automated data extraction, you may improve recruitment accuracy, reduce data entry mistakes, and standardize input.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
        </svg>
      ),
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-4">Parsing benefits</h2>
      <p className="text-lg text-center mb-8">
        These features collectively contribute to a more streamlined, effective,
        and efficient recruitment process
      </p>
<div className="flex w-full flex-col md:flex-row justify-between items-center">
    <div className="w-full flex py-4 px-3 flex-col">
        <p className="text-2xl pb-8 font-semibold ">
            Unlocking value: Reveal our parser's benefits.
        </p>
        <p className="text-md text-gray-500 font-medium">
            With the help of ASva AI Parser, hiring procedures are accelerated and talent acquisition teams are able to work more efficiently to identify the best candidates for each job ad.  
        </p>
    </div>
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md p-6 ${
              index === currentSlide ? "bg-purple-100" : ""
            }`}
          >
            <div className=" flex items-center mb-4">
              <div className="border-4 flex items-center justify-center border-gray-400 rounded-full mr-3">
                <div
                  className="rounded-full flex items-center justify-center p-3 bg-purple-500"
                  style={{ width: "55px", height: "55px" }}
                >
                  {slide.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold">{slide.title}</h3>
            </div>
            <p className="text-gray-700">{slide.description}</p>
          </div>
        ))}
      </div>
      </div>
</div>


      <div className="flex justify-center items-center h-6 mt-8">
        <div className="px-6 py-4 bg-gray-100 h-full items-center mr-10 rounded-lg flex justify-center">
            <p>{currentSlide+1}/{slides.length} </p>
        </div>
        <button
          className="hover:bg-purple-600 hover:fill-white h-full flex justify-center items-center text-gray-800 font-bold py-6 px-4 rounded-full transition-all duration-150"
          onClick={handlePrevious}
          disabled={currentSlide === 0}
        >
          <svg
            fill="inherit"
            width="20px"
            height="20px"
            viewBox="-128 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
          </svg>
        </button>
        <button
          className="hover:bg-purple-600 hover:fill-white h-full flex justify-center items-center text-gray-800 font-bold py-6 px-4 rounded-full transition-all duration-150"
          onClick={handleNext}
          disabled={currentSlide === slides.length - 1}
        >
          <svg
            fill="inherit"
            width="20px"
            height="20px"
            viewBox="-128 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Page4;
