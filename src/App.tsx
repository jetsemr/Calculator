import React, { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [operation, setOperation] = useState("0 + 0");
  const [number, setNumber] = useState(0);
  const [error, setError] = useState(false);

  return (
    <div className="bg-blue-200 w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-200">
        <div className="w-auto m-3 h-28 text-right space-y-2 py-2">
          <div className="text-gray-700 h-4">{operation}</div>
          <div className="text-black font-bold text-3xl">
            {error ? "Error" : number}
          </div>
        </div>
        <div className="w-auto m-1 h-auto mb-2">
          <div className="m-2 flex justify-between">
            <button
              className="btn-yellow"
              onClick={() => {
                setOperation("");
              }}
            >
              C
            </button>
            <button
              className="btn-grey"
              onClick={() => {
                setOperation(operation + "(");
              }}
            >
              (
            </button>
            <button
              className="btn-grey"
              onClick={() => {
                setOperation(operation + ")");
              }}
            >
              )
            </button>
            <button
              className="btn-orange"
              onClick={() => {
                setOperation(operation + " / ");
              }}
            >
              /
            </button>
          </div>
          <div className="m-2 flex justify-between">
            <button
              className="btn-grey"
              onClick={() => {
                setOperation(operation + "7");
              }}
            >
              7
            </button>
            <button
              className="btn-grey"
              onClick={() => {
                setOperation(operation + "8");
              }}
            >
              8
            </button>
            <button
              className="btn-grey"
              onClick={() => {
                setOperation(operation + "9");
              }}
            >
              9
            </button>
            <button
              className="btn-orange"
              onClick={() => {
                setOperation(operation + " * ");
              }}
            >
              x
            </button>
          </div>
          <div className="m-2 flex justify-between">
            <button
              className="btn-grey"
              onClick={() => {
                setOperation(operation + "4");
              }}
            >
              4
            </button>
            <button
              className="btn-grey"
              onClick={() => {
                setOperation(operation + "5");
              }}
            >
              5
            </button>
            <button
              className="btn-grey"
              onClick={() => {
                setOperation(operation + "6");
              }}
            >
              6
            </button>
            <button
              className="btn-orange"
              onClick={() => {
                setOperation(operation + " - ");
              }}
            >
              -
            </button>
          </div>
          <div className="m-2 flex justify-between">
            <button
              className="btn-grey"
              onClick={() => {
                setOperation(operation + "1");
              }}
            >
              1
            </button>
            <button
              className="btn-grey"
              onClick={() => {
                setOperation(operation + "2");
              }}
            >
              2
            </button>
            <button
              className="btn-grey"
              onClick={() => {
                setOperation(operation + "3");
              }}
            >
              3
            </button>
            <button
              className="btn-orange"
              onClick={() => {
                setOperation(operation + " + ");
              }}
            >
              +
            </button>
          </div>
          <div className="m-2 flex justify-between">
            <button
              className="btn-grey-jumbo"
              onClick={() => {
                setOperation(operation + "0");
              }}
            >
              0
            </button>
            <div className="flex w-full ml-3 justify-between">
              <button
                className="btn-grey"
                onClick={() => {
                  setOperation(operation + ".");
                }}
              >
                .
              </button>
              <button
                className="btn-green"
                onClick={() => {
                  try {
                    setNumber(evaluate(operation));
                    setError(false);
                  } catch (error) {
                    setError(true);
                  }
                }}
              >
                =
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
