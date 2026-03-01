import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Card from "../components/Card";
import Checkbox from "../components/Checkbox";
import Select from "../components/Select";

const codeSample = `
<Card 
  title="User Profile" 
  description="Edit your profile information"
  onSave={handleSave}
  onCancel={handleCancel}
>
  <input type="text" placeholder="Name" />
</Card>
`;

const CardShowcase = () => {
  const [saveMessage, setSaveMessage] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const handleSave = () => {
    setSaveMessage("Changes saved successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const handleCancel = () => {
    setSaveMessage("Cancelled!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  return (
    <Layout>
      <div>
        <h2>Card Component Showcase</h2>
      </div>

      <div style={{ marginTop: "32px" }}>
        <h4>Basic Card with Content</h4>
        <div style={{ marginTop: "12px" }}>
          <Card
            title="User Profile"
            description="Edit your profile information"
            onSave={handleSave}
            onCancel={handleCancel}
            fullWidth
          >
            <div>
              <p>
                <strong>Name:</strong> John Doe
              </p>
              <p>
                <strong>Email:</strong> john@example.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div style={{ marginTop: "32px" }}>
        <h4>Card with Empty Content</h4>
        <div style={{ marginTop: "12px" }}>
          <Card
            title="Empty Card"
            description="This card shows the default no data message"
            onSave={handleSave}
            onCancel={handleCancel}
            fullWidth
          />
        </div>
      </div>

      <div style={{ marginTop: "32px" }}>
        <h4>Card with Checkboxes</h4>
        <div style={{ marginTop: "12px" }}>
          <Card
            title="Settings"
            description="Configure your application settings"
            saveBtnText="Apply"
            cancelBtnText="Dismiss"
            onSave={handleSave}
            onCancel={handleCancel}
            fullWidth
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Checkbox
                label="Enable notifications"
                checked={notificationsEnabled}
                onChange={setNotificationsEnabled}
              />
              <Checkbox
                label="Dark mode"
                checked={darkModeEnabled}
                onChange={setDarkModeEnabled}
              />
              <Checkbox
                label="Auto-save"
                checked={autoSaveEnabled}
                onChange={setAutoSaveEnabled}
              />
            </div>
          </Card>
        </div>
      </div>

      <div style={{ marginTop: "32px" }}>
        <h4>Card with Disabled Buttons</h4>
        <div style={{ marginTop: "12px" }}>
          <Card
            title="Read-Only Card"
            description="This card has disabled action buttons"
            saveDisabled={true}
            cancelDisabled={true}
            onSave={handleSave}
            onCancel={handleCancel}
            fullWidth
          >
            <div>
              <p>
                <strong>Status:</strong> Read-Only
              </p>
              <p>
                <strong>Last Updated:</strong> 2026-02-23
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div style={{ marginTop: "32px" }}>
        <h4>Card with Form Controls</h4>
        <div style={{ marginTop: "12px" }}>
          <Card
            title="Login Form"
            onSave={handleSave}
            onCancel={handleCancel}
            fullWidth
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1px solid var(--border-default)",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "1px solid var(--border-default)",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
                  User Role
                </label>
                <Select
                  options={[
                    { label: "Select a role", value: "" },
                    { label: "Admin", value: "admin" },
                    { label: "User", value: "user" },
                    { label: "Viewer", value: "viewer" },
                  ]}
                  value={selectedRole}
                  onChange={setSelectedRole}
                  placeholder="Select a role"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {saveMessage && (
        <div
          style={{
            marginTop: "24px",
            padding: "12px 16px",
            backgroundColor: "var(--state-success-bg)",
            color: "var(--state-success)",
            borderRadius: "4px",
            border: "1px solid var(--state-success-border)",
          }}
        >
          {saveMessage}
        </div>
      )}

      <div style={{ marginTop: "32px" }}>
        <h4>Code</h4>
        <pre className="code-block">
          <code>{codeSample}</code>
        </pre>
      </div>
    </Layout>
  );
};

export default CardShowcase;
