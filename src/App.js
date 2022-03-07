import React from 'react';
import "normalize.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainChart} from "./pages/MainChart/MainChart";
import {MainContent} from "./components/mainContent/MainContent";
import {Profile} from "./components/profile/Profile";
import {Employees} from "./pages/Employees/Employees";
import {Preloader} from "./components/preloader/Preloader";
import {BackdropModal, ErrorApiModal} from "./components/modal/Modal";
import {SideBar} from "./components/sideBar/SideBar";

function App() {
  return (
      <BrowserRouter>
          <Profile/>
          <div className="d-flex">
              <SideBar/>
              <MainContent>
                  <Routes>
                      <Route path="/main_chart" element={<MainChart/>}/> /*стр. основной график*/
                      <Route path="/employees" element={<Employees/>}/> /*стр. список сотрудников*/
                  </Routes>
              </MainContent>
          </div>
          <BackdropModal/>
          <Preloader/>
          <ErrorApiModal/>
      </BrowserRouter>
  );
}

export default App;
