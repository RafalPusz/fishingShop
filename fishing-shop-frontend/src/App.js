import React from "react";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import ScrollToTop from "./services/ScrollToTop.js";

import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage.js"
import Newsletter from "./pages/Newsletter.js";
import Regulations from "./pages/regulations.js";

const Shop = () => 
{
  return(
    <h1>Sklepik w budowie</h1>
  );
}
const Kalendarz = () => 
{
  return(
    <h1>Kalendarz bran</h1>
  );
}
const Forum = () => 
{
  return(
    <h1>Forum wędkarskie</h1>
  );
}

const Mapa = () => 
{
  return(
    <h1>Mapa</h1>
  );
}

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="pageContainer">
      <NavigationBar/>
      <div className="PageContent">
        <ScrollToTop />
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/sklep" element={<Shop />} />
          <Route path="/kalendarzBran" element={<Kalendarz />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/mapaLowisk" element={<Mapa />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter/>}/>
          <Route path="/regulamin" element={<Regulations/>}/>
        </Routes>
      </div>
      <Footer className = "footer"/>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
