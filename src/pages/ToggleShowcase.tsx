import React, { useState } from "react";
import Toggle from "../components/Toggle";
import Layout from "../components/Layout/Layout";

const basicToggleCode = `<Toggle
  label="Enable feature"
  checked={isEnabled}
  onChange={setIsEnabled}
/>`;

const ToggleShowcase: React.FC = () => {
  const [basicToggle, setBasicToggle] = useState(false);
  const [smToggle, setSmToggle] = useState(false);
  const [mdToggle, setMdToggle] = useState(true);
  const [lgToggle, setLgToggle] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const [controlledToggle, setControlledToggle] = useState(false);

  return (
    <Layout>
      <div>
        <h2>Toggle Component Showcase</h2>

        {/* Basic Toggle */}
        <div style={{ marginTop: "32px" }}>
          <h4>Basic Toggle</h4>
          <div
            style={{
              marginTop: "12px",
              padding: "24px",
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          >
            <Toggle
              label="Enable feature"
              checked={basicToggle}
              onChange={setBasicToggle}
            />
            <p style={{ marginTop: "12px", fontSize: "14px", color: "#6b7280" }}>
              State: <strong>{basicToggle ? "ON" : "OFF"}</strong>
            </p>
          </div>
        </div>

        {/* Size Variations */}
        <div style={{ marginTop: "32px" }}>
          <h4>Size Variations</h4>
          <div
            style={{
              marginTop: "12px",
              padding: "24px",
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Toggle size="sm" checked={smToggle} onChange={setSmToggle} />
                <span style={{ fontSize: "14px" }}>Small size</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Toggle size="md" checked={mdToggle} onChange={setMdToggle} />
                <span style={{ fontSize: "14px" }}>Medium size (default)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Toggle size="lg" checked={lgToggle} onChange={setLgToggle} />
                <span style={{ fontSize: "14px" }}>Large size</span>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Group */}
        <div style={{ marginTop: "32px" }}>
          <h4>Settings</h4>
          <div
            style={{
              marginTop: "12px",
              padding: "24px",
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                }}
              >
                <div>
                  <p style={{ fontWeight: "500", marginBottom: "4px" }}>Enable Notifications</p>
                  <p style={{ fontSize: "14px", color: "#6b7280" }}>
                    Receive email notifications
                  </p>
                </div>
                <Toggle
                  checked={notificationsEnabled}
                  onChange={setNotificationsEnabled}
                />
              </div>
              <div
                style={{
                  borderTop: "1px solid #e5e7eb",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                }}
              >
                <div>
                  <p style={{ fontWeight: "500", marginBottom: "4px" }}>Dark Mode</p>
                  <p style={{ fontSize: "14px", color: "#6b7280" }}>
                    Use dark theme for the app
                  </p>
                </div>
                <Toggle checked={darkModeEnabled} onChange={setDarkModeEnabled} />
              </div>
              <div
                style={{
                  borderTop: "1px solid #e5e7eb",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                }}
              >
                <div>
                  <p style={{ fontWeight: "500", marginBottom: "4px" }}>Auto Save</p>
                  <p style={{ fontSize: "14px", color: "#6b7280" }}>
                    Automatically save your progress
                  </p>
                </div>
                <Toggle checked={autoSaveEnabled} onChange={setAutoSaveEnabled} />
              </div>
            </div>
          </div>
        </div>

        {/* Disabled State */}
        <div style={{ marginTop: "32px" }}>
          <h4>Disabled State</h4>
          <div
            style={{
              marginTop: "12px",
              padding: "24px",
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Toggle label="Disabled (OFF)" disabled={true} checked={false} />
              <Toggle label="Disabled (ON)" disabled={true} checked={true} />
            </div>
          </div>
        </div>

        {/* Controlled Toggle */}
        <div style={{ marginTop: "32px" }}>
          <h4>Controlled Toggle</h4>
          <div
            style={{
              marginTop: "12px",
              padding: "24px",
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          >
            <Toggle
              label="Controlled state"
              checked={controlledToggle}
              onChange={setControlledToggle}
            />
            <div
              style={{
                marginTop: "16px",
                padding: "12px",
                backgroundColor: "#f3f4f6",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            >
              <p>
                Current state: <strong>{controlledToggle ? "ON" : "OFF"}</strong>
              </p>
              <p style={{ marginTop: "8px", color: "#6b7280" }}>
                This toggle is fully controlled by React state. You can track and manipulate
                its state programmatically.
              </p>
            </div>
          </div>
        </div>

        {/* Code Samples */}
        <div style={{ marginTop: "32px" }}>
          <h4>Code</h4>
          <pre className="code-block">
            <code>{basicToggleCode}</code>
          </pre>
        </div>
      </div>
    </Layout>
  );
};

export default ToggleShowcase;