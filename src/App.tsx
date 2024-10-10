import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import Home from "./pages/Home";
import Main from "./pages/Main";

function App() {
    return (
        <RecoilRoot>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </RecoilRoot>
    );
}

export default App;
