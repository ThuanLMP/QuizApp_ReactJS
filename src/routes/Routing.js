import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../views/Login/LoginPage";
import ForgotPasswordPage from "../views/ForgotPassword/ForgotPasswordPage";
import RegisterPage from "../views/Register/RegisterPage";
import PlayQuiz from "../views/PlayQuiz/PlayQuizPage";
import ErrorPage from "../views/NotFound/ErrorPage";

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element= {<RegisterPage/>}/>
                <Route path="/forgotpassword" element= {<ForgotPasswordPage/>}/> 
                <Route path="/play" element= {<PlayQuiz/>}/> 
                
                <Route path='*' element={<ErrorPage/>} />
            </Routes>
        </Router>
    )
}