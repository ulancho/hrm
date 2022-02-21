import React from 'react';
import "normalize.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainChart} from "./pages/MainChart/MainChart";
import {SideBar} from "./components/sideBar/SideBar";
import {MainContent} from "./components/mainContent/MainContent";
import {Profile} from "./components/profile/Profile";

function App() {
  return (
      <BrowserRouter>
          <div className="d-flex">
              <SideBar/>
              <MainContent>
                  <Profile/>
                  <Routes>
                      <Route path="main_chart" element={<MainChart/>}/> /*стр. основной график*/
                  </Routes>
              </MainContent>
          </div>
      </BrowserRouter>
  );
}

export default App;
