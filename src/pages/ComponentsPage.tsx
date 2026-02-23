import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ButtonShowcase from "./ButtonShowcase";
import SelectShowcase from "./SelectShowcase";
import RadioCheckboxShowcase from "./RadioCheckboxShowcase";
import CardShowcase from "./CardShowcase";
import ToggleShowcase from "./ToggleShowcase";
import "../styles/pages/ComponentsPage.scss";

type ComponentId =
  | "all"
  | "button"
  | "select"
  | "checkbox"
  | "radio"
  | "card"
  | "toggle"
  | "layout";

const MENU_ITEMS = [
  { label: "All", id: "all" as ComponentId },
  { label: "Button", id: "button" as ComponentId },
  { label: "Select", id: "select" as ComponentId },
  { label: "Checkbox", id: "checkbox" as ComponentId },
  { label: "Radio Button", id: "radio" as ComponentId },
  { label: "Card", id: "card" as ComponentId },
  { label: "Toggle", id: "toggle" as ComponentId },
  { label: "Layout", id: "layout" as ComponentId },
];

function ComponentsPage() {
  const [activeComponent, setActiveComponent] = useState<ComponentId>("all");

  const renderComponent = () => {
    switch (activeComponent) {
      case "all":
        return (
          <div className="all-components">
            <ButtonShowcase />
            <SelectShowcase />
            <RadioCheckboxShowcase />
            <CardShowcase />
            <ToggleShowcase />
          </div>
        );
      case "button":
        return <ButtonShowcase />;
      case "select":
        return <SelectShowcase />;
      case "checkbox":
      case "radio":
        return <RadioCheckboxShowcase />;
      case "card":
        return <CardShowcase />;
      case "toggle":
        return <ToggleShowcase />;
      case "layout":
        return (
          <div className="component-showcase">
            <h1>Layout Component</h1>
            <p>Layout component documentation and showcase coming soon.</p>
          </div>
        );
      default:
        return (
          <div className="all-components">
            <ButtonShowcase />
            <SelectShowcase />
            <RadioCheckboxShowcase />
            <CardShowcase />
            <ToggleShowcase />
          </div>
        );
    }
  };

  return (
    <div className="components-page-layout">
      <Sidebar
        items={MENU_ITEMS}
        activeItem={activeComponent}
        onItemClick={(id: string) => setActiveComponent(id as ComponentId)}
      />
      <main className="components-page-content">{renderComponent()}</main>
    </div>
  );
}

export default ComponentsPage;
