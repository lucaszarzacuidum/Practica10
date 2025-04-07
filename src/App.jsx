import { useState } from 'react'
import './App.css'
import { SizeSelector } from './components/SizeSelector'

function App() {
  const [currentSize, setcurrentSize] = useState ('none')
  const [count, setCount] = useState(0)

  return (
    <div className='App App-header'>
      <h1>Talla seleccionada: {currentSize}</h1>
    <SizeSelector
      selectedSize={ currentSize }
      onSizeChange={ setcurrentSize }
      />
    </div>
  )
}

export default App
