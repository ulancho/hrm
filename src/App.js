import React from 'react';
import "normalize.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainChart} from "./pages/MainChart/MainChart";
import {Header} from "./components/header/Header";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Header/>
              <Routes>
                  <Route path="/main_chart" element={<MainChart/>}/> /*стр. основной график*/
              </Routes>
          </div>

      </BrowserRouter>
  );
}

export default App;
