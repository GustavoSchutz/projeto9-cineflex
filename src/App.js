import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Sessions from "./components/Sessions/Sessions";

export default function App() {

    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessions/:movieId" element={<Sessions />}></Route>
            </Routes>
        </BrowserRouter>
    )
}