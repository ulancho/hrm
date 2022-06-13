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
import {RequireAuth} from "./components/hoc/RequireAuth";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/main_chart" element={
                    <RequireAuth>
                        <MainChart/>
                    </RequireAuth>}/>
                <Route path="/employees" element={
                    <RequireAuth>
                        <Employees/>
                    </RequireAuth>}/>
                <Route path="/remote" element={
                    <RequireAuth>
                        <Remote/>
                    </RequireAuth>}/>
                <Route path="/staff_rate" element={
                    <RequireAuth>
                        <StaffRate/>
                    </RequireAuth>}/>
                <Route path="/login" element={
                    <RequireAuth>
                        <Login/>
                    </RequireAuth>}/>
                <Route path="/login/password" element={
                    <RequireAuth>
                        <LoginPassword/>
                    </RequireAuth>}/>
                <Route path="/welcome" element={
                    <RequireAuth>
                        <Welcome/>
                    </RequireAuth>}/>
            </Routes>
            <Preloader/>
            <BackdropModal/>
            <ErrorApiModal/>
            <Toaster/>
        </BrowserRouter>
    )
}

export default App;
