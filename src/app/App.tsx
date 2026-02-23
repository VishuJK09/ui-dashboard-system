// import Button from "../components/Button";
import { useState } from "react";
import ButtonShowcase from "../pages/ButtonShowcase";
import SelectShowcase from "../pages/SelectShowcase";
import RadioCheckboxShowcase from "../pages/RadioCheckboxShowcase";
import CardShowcase from "../pages/CardShowcase";
import ToggleShowcase from "../pages/ToggleShowcase";


function App() {
  return (
    <>
      <ButtonShowcase />
      <SelectShowcase />
      <RadioCheckboxShowcase />
      <CardShowcase />
      <ToggleShowcase />
    </>
  );
}

export default App;
