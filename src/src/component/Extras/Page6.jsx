import React from "react";

function App() {
  return (
    <div className="container mx-auto -mt-10 px-4 py-16">
      <div className="bg-gradient-to-r from-gray-50 via-purple-100 to-purple-200 px-4 py-7 h-auto mb-10 rounded-md flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center w-full gap-y-8">
          <h1 className=" text-5xl font-semibold text-center mb-4">
            Get started your project!
          </h1>
          <p className="text-gray-400 text-md font-medium text-center mb-8">
            We will help you grow towards your archivements
          </p>
        </div>
        <div className="flex justify-center gap-6 mb-8">
          <button className="bg-purple-700 hover:bg-purple-500 hover:shadow-lg text-white font-bold py-2 px-4 rounded-md transition-all duration-150">
            Try ASVA AI
          </button>
          <button className="border-purple-700 border-2 hover:shadow-lg bg-white hover:bg-purple-500 hover:text-white font-bold flex justify-center transition-all duration-150 items-center text-purple-700 py-2 px-4 rounded-md">
            Book Free Consultation
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-100 hover:bg-gray-400 transition-all duration-150 cursor-pointer flex justify-center items-center rounded-lg shadow-md px-6 py-3">
          <div className="flex items-center fill-purple-700 justify-center">
            <svg
              enable-background="new 0 0 52 52"
              id="Layer_1"
              version="1.1"
              width="25px"
              height="25px"
              fill="inherit"
              viewBox="0 0 52 52"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path
                  d="M26.2303429,49.9599915l-0.3300171,0.1199951l-0.3299561-0.1199951   C1.4703339,41.4999695,2.0003633,9.7499695,2.0003633,9.4299622l0.0299683-1.0099487l1.0100098,0.039978   c8.1500244,0.2799683,22.4000244-6.2800293,22.539978-6.3499756l0.4200439-0.1900024l0.4199829,0.1900024   C26.56036,2.1799622,40.850338,8.769989,48.9603233,8.4599915l1.0200195-0.039978l0.0200195,1.0199585   C50.0003624,9.7599792,50.3203697,41.4999695,26.2303429,49.9599915z"
                  fill="inherit"
                />
              </g>
            </svg>
            <h2 className="text-xl font-bold ml-2">Advanced Security</h2>
          </div>
        </div>
        <div className="bg-gray-100 hover:bg-gray-400 transition-all duration-150 cursor-pointer flex justify-center items-center rounded-lg shadow-md px-6 py-3">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-xl font-bold ml-2">24/7 Support</h2>
          </div>
        </div>
        <div className="bg-gray-100 hover:bg-gray-400 fill-purple-700 transition-all duration-150 cursor-pointer flex justify-center items-center rounded-lg shadow-md px-6 py-3">
          <div className="flex items-center">
            <svg
              enable-background="new 0 0 32 32"
              height="25px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 32 32"
              width="25px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="inherit"
            >
              <g id="note">
                <path
                  clip-rule="evenodd"
                  d="M31.414,7.585l-6-6C25.039,1.21,24.529,1,24,1H3   C1.346,1,0,2.345,0,4v24c0,1.654,1.346,3,3,3h26c1.654,0,3-1.346,3-3V9C32,8.469,31.789,7.96,31.414,7.585z M30,28   c0,0.553-0.447,1-1,1H3c-0.553,0-1-0.447-1-1V4c0-0.553,0.447-1,1-1h20v4h-0.002c0,1.657,1.344,3,3,3h1H30V28z M26.998,9h-1   c-1.102,0-2-0.897-2-2H24V3l6,6H26.998z"
                  fill="inherit"
                  fill-rule="evenodd"
                />
                <path
                  clip-rule="evenodd"
                  d="M15.5,8h5C20.775,8,21,7.776,21,7.5S20.775,7,20.5,7h-5   C15.224,7,15,7.223,15,7.5S15.224,8,15.5,8z"
                  fill="inherit"
                  fill-rule="evenodd"
                />
                <path
                  clip-rule="evenodd"
                  d="M15.5,11h5c0.275,0,0.5-0.224,0.5-0.5S20.775,10,20.5,10h-5   c-0.276,0-0.5,0.224-0.5,0.5S15.224,11,15.5,11z"
                  fill="inherit"
                  fill-rule="evenodd"
                />
                <path
                  clip-rule="evenodd"
                  d="M15,13.5c0,0.276,0.224,0.5,0.5,0.5h12c0.275,0,0.5-0.224,0.5-0.5   S27.775,13,27.5,13h-12C15.224,13,15,13.223,15,13.5z"
                  fill="inherit"
                  fill-rule="evenodd"
                />
                <path
                  clip-rule="evenodd"
                  d="M27.5,19h-23C4.224,19,4,19.223,4,19.5C4,19.775,4.224,20,4.5,20   h23c0.275,0,0.5-0.225,0.5-0.5C28,19.223,27.775,19,27.5,19z"
                  fill="inherit"
                  fill-rule="evenodd"
                />
                <path
                  clip-rule="evenodd"
                  d="M27.5,22h-23C4.224,22,4,22.223,4,22.5C4,22.775,4.224,23,4.5,23   h23c0.275,0,0.5-0.225,0.5-0.5C28,22.223,27.775,22,27.5,22z"
                  fill="inherit"
                  fill-rule="evenodd"
                />
                <path
                  clip-rule="evenodd"
                  d="M27.5,25h-23C4.224,25,4,25.223,4,25.5C4,25.775,4.224,26,4.5,26   h23c0.275,0,0.5-0.225,0.5-0.5C28,25.223,27.775,25,27.5,25z"
                  fill="inherit"
                  fill-rule="evenodd"
                />
                <path
                  clip-rule="evenodd"
                  d="M27.5,16h-23C4.224,16,4,16.223,4,16.5S4.224,17,4.5,17h23   c0.275,0,0.5-0.224,0.5-0.5S27.775,16,27.5,16z"
                  fill="inherit"
                  fill-rule="evenodd"
                />
                <path
                  clip-rule="evenodd"
                  d="M5,14h7c0.553,0,1-0.447,1-1V7c0-0.553-0.447-1-1-1H5   C4.447,6,4,6.447,4,7v6C4,13.552,4.447,14,5,14z M6,8h5v4H6V8z"
                  fill="inherit"
                  fill-rule="evenodd"
                />
              </g>
            </svg>
            <h2 className="text-xl font-bold ml-2">More than 1000+ models</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
