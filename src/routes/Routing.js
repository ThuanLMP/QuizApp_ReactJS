import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ROUTES from "../config/ROUTES";
import LoginPage from "../views/Login/LoginPage";
import ForgotPasswordPage from "../views/ForgotPassword/ForgotPasswordPage";
import RegisterPage from "../views/Register/RegisterPage";
import PlayQuiz from "../views/PlayQuiz/PlayQuizPage";
import ErrorPage from "../views/NotFound/ErrorPage";
import GetQuestions from "../views/PlayQuiz/GetQuestions";
import ChoiceFeature from "../views/ChoiceFeature/ChoiceFeature";
import Management from "../views/Management/Management";
import AddUser from "../views/Management/UserManagement/AddUser";
import AddQuestion from "../views/Management/QuestionManagement/AddQuestion";
import ShowResult from "../views/PlayQuiz/ShowResult/ShowResult";

export default function Routing() {
    return (
        <Router>
            <Routes>
                {
                    ROUTES.map((route, index) => {
                        return <Route key={index} path={route.path} element={route.component} />
                    })
                }
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </Router>
    )
}