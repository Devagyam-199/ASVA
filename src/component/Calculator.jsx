import { useState } from "react";

const Calculator = () => {
  const [users, setUsers] = useState(30000);
  const [sessionsPerMonth, setSessionsPerMonth] = useState(7);
  const [tokensPerSession, setTokensPerSession] = useState(7000);
  const [costOfTokens, setCostOfTokens] = useState(0.06);
  const [sliderValue, setSliderValue] = useState(7);

  const calculateSavings = () => {
    const totalCost =
      users * sessionsPerMonth * tokensPerSession * costOfTokens;
    const savings = totalCost * 0.97;
    return savings;
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    setSessionsPerMonth(parseInt(event.target.value, 10));
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2  ">
        <div className="p-8 md:p-4 mt-2 w-full">
          <div className="mb-4 border border-violet-700 px-4 py-2  rounded-lg">
            <label htmlFor="users" className="block text-gray-700 font-bold mb-2">
              The number of users
            </label>
            <input
              type="number"
              id="users"
              className=" appearance-none font-bold border-none rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={users}
              onChange={(e) => setUsers(parseInt(e.target.value, 10))}
            />
          </div>
          <div className="mb-4 border border-violet-700 px-4 py-2  rounded-lg">
            <label
              htmlFor="sessionsPerMonth"
              className="block text-gray-700 font-bold mb-2"
            >
              The number of sessions per month
            </label>
            <input
              type="number"
              id="sessionsPerMonth"
              className="appearance-none font-bold rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={sessionsPerMonth}
              onChange={(e) =>
                setSessionsPerMonth(parseInt(e.target.value, 10))
              }
            />
          </div>
          <div className="mb-4 border border-violet-700 px-4 py-2  rounded-lg">
            <label
              htmlFor="tokensPerSession"
              className="block text-gray-700 font-bold mb-2"
            >
              The number of tokens per session
            </label>
            <input
              type="number"
              id="tokensPerSession"
              className="appearance-none font-bold rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={tokensPerSession}
              onChange={(e) =>
                setTokensPerSession(parseInt(e.target.value, 10))
              }
            />
          </div>
          <div className="mb-4 border border-violet-700 px-4 py-2 rounded-lg">
            <label
              htmlFor="costOfTokens"
              className="block text-gray-700 font-bold mb-2"
            >
              The cost of tokens
            </label>
            <input
              type="number"
              id="costOfTokens"
              className="appearance-none font-bold rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={costOfTokens}
              onChange={(e) => setCostOfTokens(parseFloat(e.target.value))}
            />
          </div>
          <div className="mb-4 border border-violet-700 px-4 py-2 rounded-lg">
            <label
              htmlFor="sessionsPerMonth"
              className="block text-gray-700 font-bold mb-2"
            >
              The number of sessions per month
            </label>
            <input
              type="range"
              min="1"
              max="30"
              value={sliderValue}
              onChange={handleSliderChange}
              className="w-full"
            />
          </div>
        </div>
        <div className="border border-violet-500 space-y-5 
         flex text-center justify-center my-5 flex-col rounded-lg p-10">
          <h3 className="md:text-xl text-lg text-gray-600 font-semibold mb-2">ANNUAL SAVINGS</h3>
          <p className="md:text-4xl text-2xl font-bold">
            ${calculateSavings().toLocaleString()}
          </p>
          <p className="text-gray-600 font-semibold">
            or as a percentage of total cost
            <span className="font-bold text-black md:text-xl text-lg block mt-3">(97.0%)</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Calculator;