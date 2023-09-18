/* eslint-disable react/no-unescaped-entities */
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { motion } from "framer-motion";
import { styles } from "./styles";
import { textVariant } from "./utils/motion";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <motion.div variants={textVariant()} className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}>
          <h2 className={styles.sectionHeadText}>Technologies I've used.</h2>
        </motion.div>
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
