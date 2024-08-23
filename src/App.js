import "./App.css";
import { ColorModeContext, useMode } from "../../admin_mine/src/components/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/login/LoginPage";
import Signup from "./components/signup/SignupPage";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* Add other routes here */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
