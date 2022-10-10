import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ROUTES from "../config/ROUTES";
import ErrorPage from "../views/NotFound/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";

export default function Routing() {
    return (
        <Router>
            <Routes>
                {
                    ROUTES.map((route, index) => {
                        
                        if (!route.roles) {
                            return <Route key={index} path={route.path} element={route.component} />
                        } else {
                            return <Route key={index} path={route.path} element={<ProtectedRoute roles={route.roles}>{route.component}</ProtectedRoute>} />
                        }
                        
                    })
                }
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}