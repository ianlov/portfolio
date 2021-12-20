import { Routes, Route } from "react-router-dom";

import Splash from "../screens/Splash.jsx";
import Contact from "../screens/Contact.jsx";

const Container = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default Container;