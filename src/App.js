import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "normalize.css";
import 'animate.css';
import {MainChart} from "./pages/MainChart/MainChart";
import {Employees} from "./pages/Employees/Employees";
import {Preloader} from "./components/preloader/Preloader";
import {BackdropModal, ErrorApiModal} from "./components/modal/Modal";
import {Toaster} from "react-hot-toast";
import Remote from "./pages/Remote/Remote";
import StaffRate from "./pages/StaffRate/StaffRate";
import Login from "./pages/Login/Login";
import LoginPassword from "./pages/LoginPassword/LoginPassword";
import Welcome from "./pages/Welcome/Welcome";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/main_chart" element={<MainChart/>}/>
                <Route path="/employees" element={<Employees/>}/>
                <Route path="/remote" element={<Remote/>}/>
                <Route path="/staff_rate" element={<StaffRate/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/login/password" element={<LoginPassword/>}/>
                <Route path="/welcome" element={<Welcome/>}/>
            </Routes>
            <Preloader/>
            <BackdropModal/>
            <ErrorApiModal/>
            <Toaster/>
        </BrowserRouter>
    )
}

export default App;
