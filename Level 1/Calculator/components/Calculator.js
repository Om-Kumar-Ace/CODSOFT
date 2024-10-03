"use client";

import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Use eval with caution
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-80 p-6 bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full h-12 text-right text-white bg-gray-900 rounded-lg px-2 mb-2 text-lg focus:outline-none"
          />
          <div className="text-2xl text-white">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button
            className="col-span-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg"
            onClick={handleClear}
          >
            C
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded-lg"
            onClick={handleBackspace}
          >
            ←
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
            onClick={() => handleClick("/")}
          >
            /
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
            onClick={() => handleClick("7")}
          >
            7
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
            onClick={() => handleClick("8")}
          >
            8
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
            onClick={() => handleClick("9")}
          >
            9
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
            onClick={() => handleClick("*")}
          >
            *
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
            onClick={() => handleClick("4")}
          >
            4
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
            onClick={() => handleClick("5")}
          >
            5
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
            onClick={() => handleClick("6")}
          >
            6
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
            onClick={() => handleClick("-")}
          >
            -
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
            onClick={() => handleClick("1")}
          >
            1
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
            onClick={() => handleClick("2")}
          >
            2
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
            onClick={() => handleClick("3")}
          >
            3
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
            onClick={() => handleClick("+")}
          >
            +
          </button>
          <button
            className="col-span-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
            onClick={() => handleClick("0")}
          >
            0
          </button>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 rounded-lg"
            onClick={() => handleClick(".")}
          >
            .
          </button>
          <button
            className="row-span-2 bg-green-500 hover:bg-green-600 text-white font-bold py-1 rounded-lg"
            onClick={handleCalculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
