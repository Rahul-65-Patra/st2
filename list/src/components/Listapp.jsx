import React from 'react';

const Listapp = ({ books,handleDelete }) => {
  return (
    <>
      {books.map((item) => (
                      <tr key={item.isbn} className="hover:bg-gray-100">
                        <td className="border border-gray-300 px-4 py-2">{item.isbn}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.author}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <button
                            onClick={() => handleDelete(item.isbn)}
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300 cursor-pointer"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
    </>
  );
};

export default Listapp;
