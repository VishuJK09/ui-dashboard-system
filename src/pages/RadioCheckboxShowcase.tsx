import React from "react";
import Layout from "../components/Layout/Layout";
import RadioButton from "../components/RadioButton";
import Checkbox from "../components/Checkbox";

const radioCodeSample = `
<RadioButton
  name="demo"
  direction="horizontal"
  options={[
    { label: "Inline1", value: "inline1" },
    { label: "Inline2", value: "inline2" },
    { label: "Inline3", value: "inline3" },
  ]}
  value={value}
  onChange={setValue}
/>

<RadioButton
  name="demo-v"
  direction="vertical"
  options={[
    { label: "Block1", value: "block1" },
    { label: "Block2", value: "block2" },
    { label: "Disabled", value: "disabled", disabled: true },
  ]}
  value={value}
  onChange={setValue}
/>
`;

const checkboxCodeSample = `
<Checkbox
  label="Option 1"
  checked={checked}
  onChange={setChecked}
/>

<Checkbox
  label="Disabled"
  disabled
/>
`;

const radioOptions = [
  { label: "Inline1", value: "inline1" },
  { label: "Inline2", value: "inline2" },
  { label: "Inline3", value: "inline3" },
];

const radioBlockOptions = [
  { label: "Block1", value: "block1" },
  { label: "Block2", value: "block2" },
  { label: "Block3", value: "block3" },
  { label: "Disabled", value: "disabled", disabled: true },
];

const RadioCheckboxShowcase: React.FC = () => {
  const [radioH, setRadioH] = React.useState("inline1");
  const [radioV, setRadioV] = React.useState("");

  const [checkH, setCheckH] = React.useState<Record<string, boolean>>({
    inline1: true,
    inline2: false,
    inline3: false,
  });

  const [checkV, setCheckV] = React.useState<Record<string, boolean>>({
    block1: true,
    block2: false,
    block3: false,
    disabled: false,
  });

  return (
    <Layout>
      {/* ── Radio Button ──────────────────────────────── */}
      <div>
        <h2>Radio Button</h2>
      </div>

      <div>
        <h4>Horizontal Align</h4>
        <div style={{ marginTop: 12 }}>
          <RadioButton
            name="radio-h"
            options={radioOptions}
            value={radioH}
            onChange={setRadioH}
            direction="horizontal"
          />
        </div>
      </div>

      <div>
        <h4>Vertical Align</h4>
        <div style={{ marginTop: 12 }}>
          <RadioButton
            name="radio-v"
            options={radioBlockOptions}
            value={radioV}
            onChange={setRadioV}
            direction="vertical"
          />
        </div>
      </div>

      <div>
        <h4>Code</h4>
        <pre className="code-block">
          <code>{radioCodeSample}</code>
        </pre>
      </div>

      {/* ── Checkbox ──────────────────────────────────── */}
      <div>
        <h2>Checkbox</h2>
      </div>

      <div>
        <h4>Horizontal Align</h4>
        <div style={{ display: "flex", gap: 28, marginTop: 12 }}>
          {radioOptions.map((opt) => (
            <Checkbox
              key={opt.value}
              label={opt.label}
              checked={checkH[opt.value]}
              onChange={(checked) =>
                setCheckH((prev) => ({ ...prev, [opt.value]: checked }))
              }
            />
          ))}
        </div>
      </div>

      <div>
        <h4>Vertical Align</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginTop: 12,
          }}
        >
          {radioBlockOptions.map((opt) => (
            <Checkbox
              key={opt.value}
              label={opt.label}
              disabled={opt.disabled}
              checked={checkV[opt.value]}
              onChange={(checked) =>
                setCheckV((prev) => ({ ...prev, [opt.value]: checked }))
              }
            />
          ))}
        </div>
      </div>

      <div>
        <h4>Code</h4>
        <pre className="code-block">
          <code>{checkboxCodeSample}</code>
        </pre>
      </div>
    </Layout>
  );
};

export default RadioCheckboxShowcase;
