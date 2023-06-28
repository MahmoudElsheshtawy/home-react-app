import React from "react";
import About from "./component/about/About";
import Blog from "./component/blog/Blog";
import Footer from "./component/footer/Footer";
import Hinking from "./component/hinking/Hinking";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import Offers from "./component/offers/Offers";
import Popular from "./component/popular/Popular";


function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Home/>
      <Popular/>
      <Offers/>
      <Hinking/>
      <About/>
      <Blog/>
      <Footer/>
      </>
    
    </div>
  );
}

export default App;
