import "../styles/canvases.css";
import React from "react";

const Canvases = () => {
    return (
        <div className="container">
            <div className="canvases-container">
                <div>
                    <canvas />
                    <input type={"file"}/>
                </div>
                <div>
                    <canvas />
                    <input type={"file"}/>
                </div>
            </div>
        </div>
    )
}

export default Canvases;