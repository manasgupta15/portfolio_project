// import React from "react";
// import Navbar from "./Components/Navbar/Navbar";
// import Hero from "./Components/Hero/Hero";
// import About from "./Components/About/About";
// import Services from "./Components/Services/Services";
// import MyWork from "./Components/MyWork/MyWork";
// import Contact from "./Components/Contact/Contact";
// import Footer from "./Components/Footer/Footer";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <MyWork />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="Home">
        <Hero />
      </section>
      <section id="About Me">
        <About />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Portfolio">
        <MyWork />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
