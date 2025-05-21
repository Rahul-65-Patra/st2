
import { useEffect, useState } from 'react'
import './App.css'

type typeData={
  name:string
  price:number,
  Image:string
}

function App() {
  
    const[data,setData] = useState<typeData[] | undefined>();

    useEffect(()=>{
          fetch('/products.json').then((res)=>{
            return res.json();
          }).then((response)=>{
            setData(response)
            console.log(response);
          })
    },[])

  return (
    <>
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {data?.map((item, index) => (
        <div key={index} className="border p-4 rounded shadow">
          <img src={item.Image} alt={item.name} className="w-20 mb-2" />
          <h1 className="text-lg font-semibold">{item.name}</h1>
          <p className="text-gray-600">₹{item.price}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
