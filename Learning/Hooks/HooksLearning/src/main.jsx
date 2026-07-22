import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import App1 from './App1.jsx'
// import App2 from './App2.jsx'
import AppAPI from './AppAPI.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // <App />,
  // <App1/>
  // <App2/>
  <AppAPI />
)