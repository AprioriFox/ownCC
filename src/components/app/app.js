import React from "react";
import Header from "../header/";
import MainBanner from "../mainBanner";
import Cifras from "../cifras";
import Footer from "../footer";
import '../../styles/core.css'




const App =() => {
    return(
      <div>
        <Header />
        <MainBanner />
        <Cifras />
        <Footer />
      </div>
    )
  }

export default App