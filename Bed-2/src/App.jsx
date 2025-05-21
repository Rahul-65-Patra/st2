
import './App.css'
import Card from './components/Card'
import Bed from './assets/bed1.jpg'
import Lamp from './assets/lamp.jpg'
import Sofa from './assets/sofa.jpg'



function App() {

  return (
    <>
     <div className='flex items-center justify-center flex-row gap-5 p-10 bg-gray-100 text-center shadow-lg text-xl'> 
      <Card image={Bed} text="Bed"/>
      <Card image={Lamp} text="Lamp"/>
      <Card image={Sofa} text="Sofa"/>
     </div>
    </>
  )
}

export default App
