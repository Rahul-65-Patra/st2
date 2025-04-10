import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calBmi = (e) => {
    e.preventDefault();
    if (weight == 0 || height == 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmiCal = (weight / (height * height)) * 703;
      setBmi(bmiCal.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You have a normal weight");
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage("You are overweight");
      } else {
        setMessage("You are obese");
      }
    }
  };

  const reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi('');
    setMessage('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">BMI Calculator</h2>
        <form onSubmit={calBmi} className="space-y-4">
          <div>
            <label className="block font-medium">Weight (lbs):</label>
            <input
              onChange={(e) => setWeight(e.target.value)}
              type="number"
              placeholder="Enter weight"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={weight}
            />
          </div>
          <div>
            <label className="block font-medium">Height (inches):</label>
            <input
              onChange={(e) => setHeight(e.target.value)}
              type="number"
              placeholder="Enter height"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={height}
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={reload}
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition cursor-pointer"
            >
              Reload
            </button>
          </div>
          {bmi && (
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">Your BMI is: {bmi}</h3>
              <p className="text-lg text-gray-700">{message}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
