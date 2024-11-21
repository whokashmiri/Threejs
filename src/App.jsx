import { useEffect } from 'react'
import script from './script';
import './App.css'


function App() {
  useEffect(()=>{
    script();
  },[])
 

  return (
    <>
     
    </>
  )
}

export default App
