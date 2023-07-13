import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import './index.js';
import './assets/css/Root.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Section_one from './components/Section_one';
import Section_two from './components/Section_two';
import Section_three from './components/Section_three';
import Section_four from './components/Section_four';
import Section_five from './components/Section_five';
import Section_six from './components/Section_six';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Nav />
      <Section_one />
      <Section_two />
      <Section_three />
      <Section_four />
      <Section_five />
      <Section_six />
      <Footer />
    </div>
  );
}

export default App;
