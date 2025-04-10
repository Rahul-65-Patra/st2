import { useEffect,useState } from "react";
import "./App.css";


function App() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("./data.json")  // https://jsonplaceholder.typicode.com/users
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setData(response);
        setRecords(response)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);



   // filter serach data
  const filterChange=(e)=>{
    const filterData = data.filter((f)=>
       f.name.toLowerCase().includes(e.target.value)
    );
     setRecords(filterData)
  }

  return (
    <>
      <div className="p-5 bg-gray-100 min-h-screen">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
          <input
            type="text"
            placeholder="Search name..."
            className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={filterChange}
          />
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-left">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6">ID</th>
                  <th className="py-3 px-6">Name</th>
                  <th className="py-3 px-6">Email</th>
                  <th className="py-3 px-6">Phone</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">  
                 {records.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-6">{item.id}</td>
                    <td className="py-3 px-6">{item.name}</td>
                    <td className="py-3 px-6">{item.email}</td>
                    <td className="py-3 px-6">{item.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
