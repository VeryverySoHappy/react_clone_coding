import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Service from './Components/Services/Services'
import Experience from './Components/Experience/Experience'
import './App.css'
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Service/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;