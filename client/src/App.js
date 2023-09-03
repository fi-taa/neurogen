import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { themeSettings } from "./theme";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Paragraph from "./pages/Paragraph";
import ChatBot from "./pages/ChatBot";
import StrokeRehabilitation from "./pages/StrokeRehabilitation";
import StrokePrevention from "./pages/StrokePreventation";

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/paragraph" element={<Paragraph />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/stroke-rehabilitation" element={<StrokeRehabilitation/>} />
        <Route path="/stroke-prevention" element={<StrokePrevention/>} />
          
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
