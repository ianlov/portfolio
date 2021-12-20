import Layout from "../layout/Layout.jsx";
import Welcome from "../components/Welcome.jsx.js.js";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import Experience from "../components/Skills.jsx";

const Splash = () => {
  return (
    <>
      <Layout>
        <Welcome />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </Layout>
    </>
  )
}

export default Splash;