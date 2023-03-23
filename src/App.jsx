import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Section1 from './components/Section1';
import './index.css'

function App() {

  return (

    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Section1/>}/>
        <Route path='*' element={<div className='w-full h-[80vh] flex justify-center items-center font-[SatoshiBold] text-2xl'>Invalid Route</div>}/>
      </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
