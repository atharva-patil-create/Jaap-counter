import { useState, useEffect } from "react";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [totaljaaps, setTotaljaaps] = useState(() => {
    return Number(localStorage.getItem("totalJaaps")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("totalJaaps", totaljaaps);
  }, [totaljaaps]);


  return (
    <>
      <h1 className="text-3xl font-bold underline text-orange-800 text-center bg-radial from-white to-orange-100 p-4">
        JAPA COUNTER
      </h1>
      <div className="card flex flex-col items-center justify-center gap-6">
        <button className="w-40 h-40 rounded-full bg-linear-to-r from-red-400 to-orange-600 text-white text-5xl font-bold shadow-lg flex items-center justify-center">
          {count}
        </button>
        <button
          className="px-8 py-4 text-3xl size-30 bg-radial from-orange-100 to-white text-orange-800 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
          onClick={() => {
            setTotaljaaps((prev) => prev + 1); // lifetime jaap (always)

            setCount((prevCount) => {
              const next = prevCount + 1;

              if (next === 108) {
                setCycle(cycle + 1);
                return 0;
              }

              return next;
            });
          }}
        >
          click
        </button>
      </div>
      <div className="text-center text-sm font-bold my-[20px] text-black">
        {cycle} cycles completed
      </div>

      <div className="restart-button">
        <button
          className="my-4 mx-auto block size-45  bg-radial from-orange-400 from-40% to-yellow-700 w-35 h-15 text-white text-sm font-bold rounded-md"
          onClick={() => setCount(0)}
        >
          Restart
        </button>
        <button
          className="my-4 mx-auto block size-45  bg-radial from-orange-400 from-40% to-yellow-700 w-35 h-15 text-white text-sm font-bold rounded-md"
          onClick={() => {
            setCount(0);
            setCycle(0);
          }}
        >
          Restart everything
        </button>
        <div className="text-center text-orange-800 text-sm font-bold my-[20px]">
          {totaljaaps} jaaps completed
        </div>
        <p className="text-center text-sm font-medium italic text-black">
          "Hare Ram Hare Ram
          <br />
          Ram Ram Hare Hare
          <br />
          Hare Krishna Hare Krishna
          <br />
          Krishna Krishna Hare Hare"
        </p>
      </div>
    </>
  );
}

export default App;
