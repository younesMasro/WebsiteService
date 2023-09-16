import './App.css';
import AboutUs from './Compenents/About/AboutUs';
import Contact from './Compenents/Contact/Contact';
import Footer from './Compenents/Footer/Footer';
import Header from './Compenents/Header/Header';
import Services from './Compenents/Services/Services';
import Skills from './Compenents/Skilles/Skills';
import Stats from './Compenents/Stats/Stats';
import Testimonials from './Compenents/Testimonials/Testimonials';
import Work from './Compenents/Work/Work';
import WorkProcess from './Compenents/WorkProcess/WorkProcess';

function App() {
  return (
    <div className="holder">
      <Header></Header>
      <AboutUs></AboutUs>
      <Skills></Skills>
      <Stats></Stats>
      <Work></Work>
      <WorkProcess></WorkProcess>
      <Services></Services>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
