import React, { useState, useRef } from "react";
import "./index.css";

const App: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
      setIsRunning(true);
    }
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const reset = () => {
    stop();
    setTime(0);
    setLaps([]);
  };

  const pause = () => {
    stop();
  };

  const lap = () => {
    setLaps((prev) => [...prev, time]);
  };

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = (ms % 1000) / 10;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Stopwatch</h1>

      <div className="text-4xl font-mono mb-4">{formatTime(time)}</div>

      <div className="space-x-2 mb-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={start}
        >
          Start
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={stop}
        >
          Stop
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded"
          onClick={pause}
        >
          Pause
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={lap}
        >
          Lap
        </button>
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded"
          onClick={reset}
        >
          Reset
        </button>
      </div>

      <div className="w-full max-w-md">
        {laps.length > 0 && (
          <h2 className="text-xl font-semibold mb-2">Laps</h2>
        )}
        <ul className="list-decimal list-inside">
          {laps.map((lapTime, index) => (
            <li key={index} className="text-lg">
              Lap {index + 1}: {formatTime(lapTime)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
