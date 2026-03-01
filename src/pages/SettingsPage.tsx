import { useMemo, useState } from "react";
import { Select } from "../components";
import { getConversations, getSettings, saveSettings } from "../services/chatStore";
import type { ProductSettings } from "../types/chat";
import "../styles/pages/SettingsPage.scss";

function SettingsPage() {
  const [settings, setSettings] = useState<ProductSettings>(getSettings());
  const [saved, setSaved] = useState(false);

  const stats = useMemo(() => {
    const conversations = getConversations();
    const totalMessages = conversations.reduce(
      (sum, conversation) => sum + conversation.messages.length,
      0,
    );
    return {
      conversations: conversations.length,
      messages: totalMessages,
      avgMessages:
        conversations.length > 0
          ? (totalMessages / conversations.length).toFixed(1)
          : "0.0",
    };
  }, []);

  const onSave = () => {
    saveSettings(settings);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1500);
  };

  return (
    <div className="settings-page">
      <div className="settings-content">
        <section className="settings-panel">
          <h1>Product Configuration</h1>
          <p>Configure assistant behavior and integration mode.</p>

          <label>
            Assistant Name
            <input
              type="text"
              value={settings.assistantName}
              onChange={(event) =>
                setSettings((prev) => ({
                  ...prev,
                  assistantName: event.target.value,
                }))
              }
            />
          </label>

          <label>
            Integration Mode
            <div className="settings-select">
              <Select
                options={[
                  { label: "Mock (local)", value: "mock" },
                  { label: "API Endpoint", value: "endpoint" },
                ]}
                value={settings.integrationMode}
                size="md"
                variant="outline"
                onChange={(value) =>
                  setSettings((prev) => ({
                    ...prev,
                    integrationMode: value as ProductSettings["integrationMode"],
                  }))
                }
              />
            </div>
          </label>

          <label>
            Endpoint URL
            <input
              type="url"
              value={settings.endpointUrl}
              placeholder="https://your-api.example.com/chat"
              onChange={(event) =>
                setSettings((prev) => ({
                  ...prev,
                  endpointUrl: event.target.value,
                }))
              }
            />
          </label>

          <div className="settings-actions">
            <button type="button" onClick={onSave}>
              Save Settings
            </button>
            {saved ? <span>Saved</span> : null}
          </div>
        </section>

        <aside className="stats-panel">
          <h2>Usage Stats</h2>
          <article>
            <h3>{stats.conversations}</h3>
            <p>Total Conversations</p>
          </article>
          <article>
            <h3>{stats.messages}</h3>
            <p>Total Messages</p>
          </article>
          <article>
            <h3>{stats.avgMessages}</h3>
            <p>Avg Messages / Conversation</p>
          </article>
        </aside>
      </div>
    </div>
  );
}

export default SettingsPage;
