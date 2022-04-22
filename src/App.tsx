import React, { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";
import { useWindowWidth } from "@react-hook/window-size/throttled";

function App() {
    const onlyWidth = useWindowWidth();
    const [data, setData] = useState({
        text: "https://github.com/saadamirpk",
        type: "L",
    });

    function getSize(): number {
        if (onlyWidth <= 768) {
            return 128;
        } else if (onlyWidth < 1200) {
            return 256;
        } else {
            return 512;
        }
    }

    function handleChange(e: any) {
        const typeselected = e.target.name;
        const value = e.target.value;
        setData((prev) => {
            return { ...prev, [typeselected]: value };
        });
    }

    return (
        <div className="holder">
            <div className="item1">
                <h1>Responsive QR Code Generator</h1>
                <form>
                    <h5>Enter Data to Encode</h5>
                    <textarea
                        name="text"
                        value={data.text}
                        placeholder="Enter Data"
                        onChange={handleChange}
                    >
                        {data.text}
                    </textarea>
                    <br />
                    <h5>Choose Type</h5>
                    <input
                        id="level1"
                        name="type"
                        type="radio"
                        value={"L"}
                        onChange={handleChange}
                        checked={data.type === "L"}
                    />
                    <label htmlFor="level1">L</label>
                    <br />
                    <input
                        id="level2"
                        name="type"
                        type="radio"
                        value={"H"}
                        onChange={handleChange}
                        checked={data.type === "H"}
                    />
                    <label htmlFor="level2">H</label>
                    <br />
                    <input
                        id="level3"
                        name="type"
                        type="radio"
                        value={"M"}
                        onChange={handleChange}
                        checked={data.type === "M"}
                    />
                    <label htmlFor="level3">M</label>
                    <br />
                    <input
                        id="level4"
                        name="type"
                        type="radio"
                        value={"Q"}
                        onChange={handleChange}
                        checked={data.type === "Q"}
                    />
                    <label htmlFor="level4">Q</label>
                    <br />
                    <br />
                </form>
            </div>
            <div className="item2">
                <QRCode value={data.text} level={data.type} size={getSize()} />
            </div>
        </div>
    );
}

export default App;
