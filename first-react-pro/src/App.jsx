import React from 'react'
import Cardbtn from './components/card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    {/* Fregments */}
    <div id='main'>
      <Navbar />
      <div className='card'>
        <h1>Hi i am Ahil Makwana</h1>
        <p>i learn blender , react , unitu and much more</p>
        <Cardbtn />
      </div>
    </div>
    </>
  )
}

export default App
