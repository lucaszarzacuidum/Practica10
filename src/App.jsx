import { useState } from 'react'
import './App.css'
import { SizeSelector } from './components/SizeSelector'

function App() {
  const [currentSize, setCurrentSize] = useState('none')
  const [currentColor, setCurrentColor] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setSelectedImage(imageUrl)
    }
  }

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

      <div className='image-uploader'>
        <label htmlFor="imageUpload">Subir imagen:</label>
        <input type="file" id="imageUpload" accept="image/*" onChange={handleImageChange} />
        
        {selectedImage && (
          <div className="preview-container">
            <p>Vista previa:</p>
            <img src={selectedImage} alt="Vista previa" className="preview-image" />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
