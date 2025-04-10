import { useEffect, useState } from "react";
import Listapp from "./components/Listapp";

// Get data from localStorage
const getDatafromLC = () => {
  const data = localStorage.getItem("bookData");
  return data ? JSON.parse(data) : [];
};

function App() {
  const [user, setUser] = useState({ title: "", author: "", isbn: "" });
  const [books, setBooks] = useState(getDatafromLC);


  // Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.title && user.author && user.isbn) {
      setBooks([...books, user]); 
      setUser({ title: "", author: "", isbn: "" });
    }
  };

  // Delete book function
  const handleDelete = (isbn) => {
    //console.log(isbn)
     const filteredBooks = books.filter((book) => book.isbn !== isbn);
     setBooks(filteredBooks);
  };

 // Update localStorage when books change
  useEffect(() => {
    localStorage.setItem("bookData", JSON.stringify(books));
  }, [books]);


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          📚 Book List App
        </h1>
        <p className="text-center text-gray-600">Add, View and Delete books using LocalStorage</p>

        <div className="grid md:grid-cols-2 gap-8 mt-6">

        
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Add a Book</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  value={user.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Author</label>
                <input
                  type="text"
                  name="author"
                  value={user.author}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">ISBN</label>
                <input
                  type="text"
                  name="isbn"
                  value={user.isbn}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white font-medium py-2 rounded-lg hover:bg-green-600 transition duration-300 cursor-pointer"
              >
                Add Book
              </button>
            </form>
          </div>

          {/* Book List Section */}
          <div className="p-6 bg-gray-50 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Book List</h2>
            {books.length === 0 ? (
              <p className="text-gray-500">No books are added yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">ISBN</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Author</th>
                      <th className="border border-gray-300 px-4 py-2 text-center">Delete</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-300">
                    <Listapp books={books} handleDelete={handleDelete}/>
                  </tbody>
                </table>
              </div>
            )}

            <button type="submit"
                className="w-full bg-red-500 text-white font-medium py-2 rounded-lg hover:bg-red-600 transition duration-300 cursor-pointer mt-4" onClick={()=>setBooks([])}>Remove All</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
