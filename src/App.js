import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Sessions from "./components/Sessions/Sessions";
import Seats from "./components/Seats/Seats";

export default function App() {

    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessions/:movieId" element={<Sessions />}></Route>
                <Route path="/seats/:sessionId" element={<Seats />}></Route>
            </Routes>
        </BrowserRouter>
    )
}