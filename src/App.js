import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import SocialLinks from "./components/SocialLinks.js";
import About from "./components/About.js";
import Journey from "./components/Journey.js";
import Why from "./components/Why.js";
import Project from "./components/Projects.js";
import TEAM from "./components/Service.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div>
    <NavBar/>
    <Home/>
    <SocialLinks/>
    <About/>
    <Journey/>
    <Why/>
    <Project/>
    <TEAM/>
    <Contact/>
    </div>
  );
}

export default App;
