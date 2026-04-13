import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { App2, App3 } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Render dos dois juntinhos*/}
    <div style={{ display: 'flex' }}> 
      
      <App />  {/*e a Frente do site */}
      <App2 /> {/* a NavBar lateral */}
      <App3 /> {/* a NavBar lateral */}
    </div>
  </StrictMode>,
)
