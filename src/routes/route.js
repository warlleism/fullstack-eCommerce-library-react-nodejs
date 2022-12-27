import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import('../components/body'))
const Cadastrar = React.lazy(() => import('../components/cadastrar'))
const Detalhar = React.lazy(() => import('../components/detalhar'))

export default function Rotas() {
    return (
        <Router>
            <Routes>

                <Route path="/"
                    element={
                        <React.Suspense>
                            <Home />
                        </React.Suspense>
                    } />

                <Route path="/cadastrar"
                    element={
                        <React.Suspense>
                            <Cadastrar />
                        </React.Suspense>
                    } />

                <Route path="/editar"
                    element={
                        <React.Suspense>
                            <Detalhar />
                        </React.Suspense>
                    } />

            </Routes>
        </Router>
    )
}

