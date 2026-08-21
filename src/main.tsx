import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element not found");
}

createRoot(rootElement).render(<App />);

// Remove the initial HTML loading skeleton
const initialLoader = document.getElementById("initial-loader");

if (initialLoader) {
    initialLoader.remove();
}