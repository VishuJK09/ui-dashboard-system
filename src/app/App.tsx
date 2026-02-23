import { Routes, Route } from "react-router-dom";
import { TopNav } from "../components";
import HomePage from "../pages/HomePage";
import ComponentsPage from "../pages/ComponentsPage";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <TopNav />
      <div className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/me" element={<HomePage />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
