import React from "react";

const Page5 = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <p className="text-4xl font-bold text-center mb-8">
        What makes our solutions for recruitment
      </p>
      <p className="text-4xl font-bold text-center mb-8">your best choice?</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-md shadow-md">
          <div className="flex items-center mb-4">
            <svg
              className="text-black"
              fill="none"
              width="35px"
              height="35px"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="ml-3 text-xl font-semibold">Accurate</h3>
          </div>
          <p className="text-gray-600">
            Affinda consistently comes out ahead in competitive tests against
            other systems.
          </p>
        </div>
        <div className="p-6 bg-white rounded-md shadow-md">
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="35px"
              height="35px"
              x="0px"
              y="0px"
              viewBox="0 0 128 160"
              xml:space="preserve"
            >
              <path d="M75.9,10.4c-0.3-1.1-1.5-1.6-2.5-1.3l-62,19.5c-0.3,0.1-0.5,0.2-0.8,0.4h71.1L75.9,10.4z" />
              <path d="M107.6,29L105,14.3c-0.2-1.1-1.2-1.8-2.3-1.6L83.9,16l4.3,13H107.6z" />
              <path d="M125.1,67.1V39c0-3.3-2.7-6-6.1-6H6c-3.4,0-6.1,2.7-6.1,6v83c0,3.3,2.7,6,6.1,6h113c3.4,0,6.1-2.7,6.1-6V90.8  c1.6-0.5,2.8-2.3,2.8-4.5V71.6C128,69.4,126.8,67.5,125.1,67.1z M119,124H6c-1.2,0-2.1-0.9-2.1-2V39c0-1.1,0.9-2,2.1-2h113  c1.2,0,2.1,0.9,2.1,2v28H94.6c-2,0-3.6,2.1-3.6,4.6v14.7c0,2.6,1.6,4.6,3.6,4.6h26.5V122C121.1,123.1,120.2,124,119,124z M105,79  c0,2.2-1.8,4-4,4s-4-1.8-4-4s1.8-4,4-4S105,76.8,105,79z" />
            </svg>
            <h3 className="ml-3 text-xl font-semibold">Affordable</h3>
          </div>
          <p className="text-gray-600">
            With Affinda, you can spend less without sacrificing quality.
          </p>
        </div>
        <div className="p-6 flex flex-col justify-center bg-white rounded-md shadow-md">
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              width="55px"
              height="35px"
              viewBox="0 4 98 85"
              xml:space="preserve"
            >
              <g>
                <path d="M63.3,43.4c-0.4-0.4-1-0.4-1.4,0L56.3,49c-0.9-0.6-1.8-0.9-2.9-0.9c-1.4,0-2.7,0.6-3.7,1.6c-1,1-1.6,2.3-1.6,3.7   s0.6,2.7,1.6,3.7s2.3,1.6,3.7,1.6s2.7-0.6,3.7-1.6s1.6-2.3,1.6-3.7c0-1.1-0.3-2.2-1-3l5.5-5.5C63.7,44.4,63.7,43.8,63.3,43.4z    M55.8,55.7c-1.2,1.2-3.4,1.2-4.7,0c-0.6-0.6-1-1.5-1-2.3c0-0.9,0.3-1.7,1-2.3c1.2-1.2,3.4-1.2,4.7,0c0.6,0.6,1,1.5,1,2.3   C56.7,54.3,56.4,55.1,55.8,55.7z" />
                <path d="M25.1,52.5c0,0.6,0.4,1,1,1h17.3c0.6,0,1-0.4,1-1s-0.4-1-1-1H26.1C25.5,51.5,25.1,51.9,25.1,52.5z" />
                <path d="M21.9,45.1h17.3c0.6,0,1-0.4,1-1s-0.4-1-1-1H21.9c-0.6,0-1,0.4-1,1S21.3,45.1,21.9,45.1z" />
                <path d="M40.2,60.9c0-0.6-0.4-1-1-1H21.9c-0.6,0-1,0.4-1,1s0.4,1,1,1h17.3C39.8,61.9,40.2,61.5,40.2,60.9z" />
                <path d="M71.8,35.4l1-1c0.5,0.3,1,0.4,1.6,0.4c1.9,0,3.4-1.5,3.4-3.4S76.4,28,74.5,28s-3.4,1.5-3.4,3.4c0,0.5,0.1,1.1,0.4,1.5   L70.4,34c-4.2-3.7-9.6-6-15.6-6.2v-4.2h3.6c0.6,0,1-0.4,1-1s-0.4-1-1-1h-9.1c-0.6,0-1,0.4-1,1s0.4,1,1,1h3.5v4.2   c-6.6,0.3-12.7,3-17.3,7.9c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0c4.5-4.7,10.5-7.3,16.9-7.3c6.1,0,11.7,2.4,15.9,6.3   c0,0,0,0,0,0c0,0,0,0,0,0c4.5,4.2,7.3,10.2,7.3,16.8c0,12.8-10.4,23.2-23.2,23.2c-6.2,0-12-2.4-16.4-6.8c-0.4-0.4-1-0.4-1.4,0   s-0.4,1,0,1.4c4.8,4.8,11.1,7.4,17.8,7.4C67.7,78.1,79,66.8,79,52.9C79,46.1,76.3,39.9,71.8,35.4z M74.5,30c0.8,0,1.4,0.6,1.4,1.4   s-0.6,1.4-1.4,1.4c-0.3,0-0.6-0.1-0.9-0.3c0-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.2-0.1c-0.2-0.2-0.2-0.5-0.2-0.8   C73.1,30.6,73.7,30,74.5,30z" />
                <path d="M41.7,68.9c-0.3,0.5-0.2,1.1,0.3,1.4c3.5,2.4,7.6,3.7,11.9,3.7c11.6,0,21-9.4,21-21c0-11.6-9.4-21-21-21   c-4.4,0-8.7,1.4-12.3,4c-0.4,0.3-0.5,1-0.2,1.4c0.3,0.4,0.9,0.5,1.4,0.2c3.2-2.4,7.1-3.6,11.1-3.6c10.5,0,19,8.5,19,19   s-8.5,19-19,19c-3.9,0-7.6-1.1-10.7-3.3C42.6,68.4,42,68.5,41.7,68.9z" />
              </g>
            </svg>
            <h3 className="ml-3 text-xl font-semibold">Fast</h3>
          </div>
          <p className="text-gray-600">
            Resumes typically parse in 2-3 seconds, while searching candidates
            is 5x faster.
          </p>
        </div>
        <div className="p-6 bg-white rounded-md shadow-md">
          <div className="flex items-center mb-4">
            <svg
              class="svg-icon"
              width="35px"
              height="35px"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M896 554.666667v170.666666a85.333333 85.333333 0 0 1-85.333333 85.333334v42.666666a128 128 0 0 1-128 128h-128a42.666667 42.666667 0 0 1-42.666667-42.666666v-21.333334a21.333333 21.333333 0 0 1 21.333333-21.333333H682.666667a42.666667 42.666667 0 0 0 42.666666-42.666667v-42.666666a42.666667 42.666667 0 0 1-42.666666-42.666667v-256a42.666667 42.666667 0 0 1 42.666666-42.666667V341.333333A213.333333 213.333333 0 0 0 298.666667 341.333333v128a42.666667 42.666667 0 0 1 42.666666 42.666667v256a42.666667 42.666667 0 0 1-42.666666 42.666667H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333334v-170.666666a85.333333 85.333333 0 0 1 85.333333-85.333334V341.333333a298.666667 298.666667 0 0 1 597.333334 0v128a85.333333 85.333333 0 0 1 85.333333 85.333334z" />
            </svg>
            <h3 className="ml-3 text-xl font-semibold">Supported</h3>
          </div>
          <p className="text-gray-600">
            Dedicated support team to answer your questions and optimise your
            solution.
          </p>
        </div>
        <div className="p-6 bg-white rounded-md shadow-md">
          <div className="flex items-center mb-4">
            <svg
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="35px"
              height="35px"
              viewBox="0 0 579.16 579.16"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M569.979,353.841h9.181v-9.18v-107.1v-9.18h-9.181H497.1c-4.287-14.669-10.128-28.859-17.433-42.338l51.46-51.46
			l6.49-6.49l-6.49-6.49l-75.731-75.732l-6.49-6.494l-6.491,6.494l-51.649,51.649c-12.781-6.848-26.182-12.399-39.985-16.561V9.182
			v-9.18h-9.18H234.5h-9.18v9.18v71.781c-13.109,3.954-25.839,9.146-37.993,15.49l-50.582-50.582l-6.49-6.494l-6.49,6.494
			L48.033,121.6l-6.49,6.49l6.49,6.491l49.483,49.483c-7.316,13.155-13.225,26.98-17.631,41.255H9.18H0v9.18v107.1v9.181h9.18H79
			c4.495,15.379,10.704,30.232,18.522,44.309l-49.489,49.489l-6.49,6.49l6.49,6.49l75.732,75.732l6.49,6.493l6.49-6.493
			l50.579-50.579c13.06,6.833,26.821,12.316,41.056,16.358v70.909v9.181h9.18H344.66h9.18v-9.181v-72.724
			c12.727-4.033,25.102-9.263,36.931-15.608l51.645,51.64l6.49,6.494l6.49-6.494l75.731-75.731l6.49-6.49l-6.49-6.49l-51.46-51.46
			c6.814-12.567,12.356-25.731,16.542-39.278h73.771V353.841z M418.1,289.582c0,71.711-58.339,130.05-130.05,130.05
			S158,361.292,158,289.582s58.339-130.05,130.05-130.05S418.1,217.871,418.1,289.582z"
                  />
                </g>
              </g>
            </svg>
            <h3 className="ml-3 text-xl font-semibold">Highly Configurable</h3>
          </div>
          <p className="text-gray-600">
            Our Search interface can be white-labelled and configured with
            custom fields to meet your needs.
          </p>
        </div>
        <div className="p-6 bg-white rounded-md shadow-md">
          <div className="flex items-center mb-4">
            <svg
              fill="#000000"
              height="35px"
              width="35px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xml:space="preserve"
            >
              <g id="XMLID_509_">
                <path
                  id="XMLID_510_"
                  d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85
		S80,38.131,80,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M180,234.986V255c0,8.284-6.716,15-15,15
		s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986c0-13.785,11.215-25,25-25s25,11.215,25,25
		C190,223.162,186.068,230.421,180,234.986z M110,85c0-30.327,24.673-55,55-55s55,24.673,55,55v45H110V85z"
                />
              </g>
            </svg>
            <h3 className="ml-3 text-xl font-semibold">Secure</h3>
          </div>
          <p className="text-gray-600">
            Information security is at our core and we are ISO 27001 certified.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page5;
