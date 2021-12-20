import Layout from "../layout/Layout.jsx";
import Welcome from "../components/Welcome.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import Experience from "../components/Experience.jsx";

const Splash = () => {
  return (
    <>
    <Welcome />
      <Layout>
        <About />
        <Projects />
        <Skills />
        <Experience />
      </Layout>
    </>
  )
}

export default Splash;