import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Sessions from "./components/Sessions/Sessions";
import Seats from "./components/Seats/Seats";
import Success from "./components/Success/Success";
import { useState } from "react";

export default function App() {


    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessions/:movieId" element={<Sessions />}></Route>
                <Route path="/seats/:sessionId" element={<Seats />}></Route>
                <Route path="/success/:seatsId" element={<Success />}></Route>
            </Routes>
        </BrowserRouter>
    )
}