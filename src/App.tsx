import React from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import "./GlobalStyles.scss";
import Home from "./pages/Home";
import Main from "./pages/Main";

function App() {
    return (
        <div style={{ fontFamily: "NotoSansKR-Regular" }}>
            <RecoilRoot>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/main" element={<Main />} />
                </Routes>
            </RecoilRoot>
        </div>
    );
}

export default App;
