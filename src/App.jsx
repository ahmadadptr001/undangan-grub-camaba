import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./ui";

export default function App() {
    return (
        <BrowserRouter>
            <AppRouter></AppRouter>
        </BrowserRouter>
    );
}
