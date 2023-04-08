import './App.css';
import './index.css'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import About from './Components/About/About'
import Experience from './Components/experience/Experience'
import Portfolio from './Components/portfolio/Portfolio'
import Testimonials from './Components/testimonials/Testimonials'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'

import Services from './Components/services/Services';


function App() {
  return (
    <div className="App">
     <Header/>
     <Nav/>
     <About/>
     <Experience/>
     <Services/>
     <Portfolio/>
     <Testimonials/>
     <Contact/>
     
     <Footer/>
    </div>
  );
}

export default App;
