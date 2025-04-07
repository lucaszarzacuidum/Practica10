import { useState } from 'react'
import './App.css'
import { SizeSelector } from './components/SizeSelector'

function App() {
  const [currentSize, setCurrentSize] = useState('none')
  const [currentColor, setCurrentColor] = useState('')

  return (
    <div className={`App App-header ${currentColor.toLowerCase()}`}>
      <h1>Talla seleccionada: {currentSize}</h1>

      <SizeSelector
        selectedSize={currentSize}
        onSizeChange={setCurrentSize}
      />

      <div className='color-selector'>
        <label htmlFor='color-select'>Selecciona un color:</label>
        <select
          id='color-select'
          value={currentColor}
          onChange={(e) => setCurrentColor(e.target.value)}
        >
          <option value=''>-- Elige un color --</option>
          <option value='Negro'>Negro</option>
          <option value='Blanco'>Blanco</option>
          <option value='Azul'>Azul</option>
          <option value='Rojo'>Rojo</option>
          <option value='Verde'>Verde</option>
        </select>

        {currentColor && <p>Color seleccionado: {currentColor}</p>}
      </div>
    </div>
  )
}

export default App
