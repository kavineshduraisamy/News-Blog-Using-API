import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./navbars/Navbar";
import Home from "./homePage/Home";
import Section from "./pages/Section";
import SearchResults from "./pages/SearchResults";
import Error from "./errors/Error";
import Footer from "./footers/Footer";

function App() { 
  // Set container to stop body from scrolling when nav menu is open
  const container = React.useRef();

  return (
    <div className="container" ref={container}>
      <Router>
        <Navbar container={container} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/section/:sectionName" element={<Section />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
