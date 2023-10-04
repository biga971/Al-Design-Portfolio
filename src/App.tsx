import React, { useState, useEffect, useRef }  from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Sections/NavBar';
import Home from './Components/Sections/Home';
import About from './Components/Sections/About';
import Background from './assets/Images/background.png'
import CustomerReviews from './Components/Sections/CustomerReviews';
import Projects from './Components/Sections/Projects';
import Contact from './Components/Sections/Contact';
import Footer from './Components/Sections/Footer';

function App() {
  /* opacity-95 bg-gradient-to-b from-white via-white to-teal-600 */
  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight)
    }
    //console.log(height)
  })

  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="w-full h-full linear z-0">
        <About />
        <div
         ref={ref}
         /* className='contain' */  style={{ 
          backgroundImage: `url(${Background})`, 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative',
          height: "auto",
          width: "100%",
          
          }} >
     
            <Projects />
          <CustomerReviews />
          <Contact />
          <Footer />
        </div>
      
      </div>
    </div>
  );
}

export default App;
