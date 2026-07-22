// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
       <nav id="nav">
        <div class="logo">
            <h1>Medium</h1>
        </div>
        <div class="link">
            <a href="#">Our story</a>
            <a href="#">Membership</a>
            <a href="#">Write</a>
            <a href="#">Sign in</a>
            <a id="spclLink" href="#">Get started</a>
        </div>
    </nav>

    <div id="main">
        <div class="content">
            <h1 class="contentA">Human</h1>
            <h1 class="contentB">stories & ideas</h1>
            <p>A place to read, write, and deepen your understanding</p>
            <a href="#">Start reading</a>
        </div>
        <div class="image">
            <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"></img>
        </div>
    </div>
    
    <footer>
        <a href="#">Help</a>
        <a href="#">Status</a>
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Press</a>
        <a href="#">Blog</a>
        <a href="#">Store</a>
        <a href="#">Privacy</a>
        <a href="#">Rules</a>
        <a href="#">Terms</a>
        <a href="#">Text to speech</a>
    </footer>
    </>
  )
}

export default App
