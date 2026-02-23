import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import ButtonShowcase from "../pages/ButtonShowcase";
import SelectShowcase from "../pages/SelectShowcase";
import RadioCheckboxShowcase from "../pages/RadioCheckboxShowcase";
import CardShowcase from "../pages/CardShowcase";
import ToggleShowcase from "../pages/ToggleShowcase";
import "./App.scss";

type ComponentId = "button" | "select" | "radio-checkbox" | "card" | "toggle";

const MENU_ITEMS = [
  { label: "Button", id: "button" as ComponentId },
  { label: "Select", id: "select" as ComponentId },
  { label: "Radio & Checkbox", id: "radio-checkbox" as ComponentId },
  { label: "Card", id: "card" as ComponentId },
  { label: "Toggle", id: "toggle" as ComponentId },
];

function App() {
  const [activeComponent, setActiveComponent] = useState<ComponentId>("button");

  const renderComponent = () => {
    switch (activeComponent) {
      case "button":
        return <ButtonShowcase />;
      case "select":
        return <SelectShowcase />;
      case "radio-checkbox":
        return <RadioCheckboxShowcase />;
      case "card":
        return <CardShowcase />;
      case "toggle":
        return <ToggleShowcase />;
      default:
        return <ButtonShowcase />;
    }
  };

  return (
    <div className="app-layout">
      <Sidebar
        items={MENU_ITEMS}
        activeItem={activeComponent}
        onItemClick={(id) => setActiveComponent(id as ComponentId)}
      />
      <main className="app-content">{renderComponent()}</main>
    </div>
  );
}

export default App;
