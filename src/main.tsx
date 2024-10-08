import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider";
import {BrowserRouter as Router} from 'react-router-dom'

import "./globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Router>
        <App />
    </Router>
  </ThemeProvider>
);
