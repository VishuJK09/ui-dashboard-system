import React from "react";
import Layout from "../components/Layout/Layout";
import Select from "../components/Select";

const options = [
  { label: "Select a framework", value: "" },
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Angular", value: "angular", disabled: true },
];

const codeSample = `
<Select
  placeholder="Select a framework"
  options={[
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
  ]}
/>

<Select
  size="sm"
  variant="filled"
  options={[{ label: "Small", value: "sm" }]}
/>

<Select
  variant="outline"
  error="This field is required"
  options={[{ label: "Option", value: "opt" }]}
/>
`;

const SelectShowcase: React.FC = () => {
  const [controlledValue, setControlledValue] = React.useState("");

  return (
    <Layout>
      <div>
        <h2>Select Component Showcase</h2>
      </div>

      <div>
        <h4>Default</h4>
        <div style={{ marginBlockStart : "12px"}}>

        <Select
          placeholder="Select a framework"
          options={options.filter((option) => option.value !== "")}
          />
          </div>
      </div>

      <div>
        <h4>Controlled</h4>
        <div style={{ marginBlockStart : "12px"}}>

        <Select
          placeholder="Pick one"
          value={controlledValue}
          onChange={setControlledValue}
          options={options.filter((option) => option.value !== "")}
          />
          </div>
      </div>

      <div>
        <h4>Sizes</h4>
        <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBlockStart : "12px"}}>
          <Select size="sm" options={options} />
          <Select size="md" options={options} />
          <Select size="lg" options={options} />
        </div>
      </div>

      <div>
        <h4>Variants</h4>
        <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBlockStart : "12px"}}>
          <Select variant="outline" options={options} />
          <Select variant="filled" options={options} />
          <Select variant="subtle" options={options} />
        </div>
      </div>

      <div>
        <h4>Helper and Error</h4>
        <div style={{ display: "flex", gap: "24px", alignItems: "center", marginBlockStart : "12px"}}>
          <Select helperText="Choose the best fit" options={options} />
          <Select error="This field is required" options={options} />
        </div>
      </div>

      <div>
        <h4>Disabled</h4>
        <div style={{ marginBlockStart : "12px"}}>
          <Select disabled options={options} />
        </div>
      </div>

      <div>
        <h4>Code</h4>
        <pre className="code-block">
          <code>{codeSample}</code>
        </pre>
      </div>
    </Layout>
  );
};

export default SelectShowcase;
