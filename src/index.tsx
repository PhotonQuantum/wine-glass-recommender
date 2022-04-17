import {App} from "./App";
import {createRoot} from "react-dom/client";
import { StrictMode } from "react";

const app = document.getElementById("app");
const root = createRoot(app!);
root.render(<StrictMode><App/></StrictMode>);
