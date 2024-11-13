import React from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { APIProvider } from "@vis.gl/react-google-maps";
import "./App.css";
import "./GlobalStyles.scss";
import Home from "./pages/Home";
import Main from "./pages/Main";

function App() {
    return (
        <div style={{ fontFamily: "NotoSansKR-Regular" }}>
            <RecoilRoot>
                <APIProvider
                    apiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY || ""}
                    onLoad={() => console.log("Maps API has loaded")}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/main" element={<Main />} />
                    </Routes>
                </APIProvider>
            </RecoilRoot>
        </div>
    );
}

export default App;
