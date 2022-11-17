import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import ColorButton from "./components/button/ColorButton";

const el = document.getElementById("root");
const root = createRoot(el);
// root.render(<App name="Beer" age="40"/>);
// root.render(<App name="Beer" age={}/>);
// root.render(<App name="Beer" age={10}/>);
// root.render(<App/>);

root.render(<ColorButton></ColorButton>);
