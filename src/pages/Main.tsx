import ChatBox from "../components/chatBox/ChatBox";
import VisualBox from "../components/visualBox/VisualBox";
import "./Main.scss";

const Main = () => {
    return (
        <div className="app-container">
            <div className="main-content">
                <div className="left-panel">
                    <ChatBox />
                </div>
                <div className="right-panel">
                    <VisualBox />
                </div>
            </div>
        </div>
    );
};

export default Main;
