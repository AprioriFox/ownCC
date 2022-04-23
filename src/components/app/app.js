import React from "react";
import Header from "../header/";
import Footer from "../footer";
import '../../styles/core.css'
import CustomApi from "../../services/customAPI";
import MainPage from "../mainpage";
import { Provider } from "../customContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App =() => {


    return(
      <div>
          <Router>
            <Header />
            <Routes>
              <Route path = '/' element={<MainPage />}/>
              <Route path = '/cart' element ={<h3>This is Cart</h3>} />
            </Routes>
            <Footer />
          </Router>
        
        
    </div>
    )
  }

export default App