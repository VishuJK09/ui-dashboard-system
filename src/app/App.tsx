import { Navigate, Route, Routes } from "react-router-dom";
import { TopNav } from "../components";
import HomePage from "../pages/HomePage";
import ComponentsPage from "../pages/ComponentsPage";
import SettingsPage from "../pages/SettingsPage";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <TopNav />
      <div className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assistant" element={<Navigate to="/" replace />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
