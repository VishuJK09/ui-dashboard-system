import { useMemo, useState } from "react";
import { Button } from "../components";
import { getAssistantReply } from "../services/chatClient";
import {
  addMessage,
  createConversation,
  createEmptyConversation,
  deleteConversation,
  getConversations,
  resetConversation,
} from "../services/chatStore";
import type { ChatConversation } from "../types/chat";
import "../styles/pages/HomePage.scss";

function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

function HomePage() {
  const [conversations, setConversations] = useState<ChatConversation[]>(getConversations());
  const [activeConversationId, setActiveConversationId] = useState<string | null>(
    conversations[0]?.id ?? null,
  );
  const [draft, setDraft] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [railPreviewOpen, setRailPreviewOpen] = useState(false);

  const activeConversation = useMemo(
    () => conversations.find((item) => item.id === activeConversationId) ?? null,
    [conversations, activeConversationId],
  );

  const hasStartedConversation = useMemo(
    () => conversations.some((conversation) => conversation.messages.length > 0),
    [conversations],
  );

  const previewConversations = useMemo(
    () => conversations.slice(0, 3),
    [conversations],
  );

  const handleNewConversation = () => {
    const conversation = createEmptyConversation();
    const next = getConversations();
    setConversations(next);
    setActiveConversationId(conversation.id);
    setDraft("");
    setSidebarOpen(true);
  };

  const handleDeleteConversation = (conversationId: string) => {
    const next = deleteConversation(conversationId);
    setConversations(next);

    if (activeConversationId === conversationId) {
      setActiveConversationId(next[0]?.id ?? null);
    }

    if (next.length === 0) {
      setRailPreviewOpen(false);
    }
  };

  const handleRefreshConversation = () => {
    if (!activeConversationId) {
      const conversation = createEmptyConversation();
      const next = getConversations();
      setConversations(next);
      setActiveConversationId(conversation.id);
      setDraft("");
      return;
    }

    const next = resetConversation(activeConversationId);
    setConversations(next);
    setDraft("");
  };

  const handleSend = async () => {
    const text = draft.trim();
    if (!text || isSending) return;

    let currentConversationId = activeConversationId;
    if (!currentConversationId) {
      const created = createConversation(text);
      currentConversationId = created.id;
      setConversations(getConversations());
      setActiveConversationId(created.id);
      setSidebarOpen(true);
      setDraft("");
    } else {
      setConversations(addMessage(currentConversationId, "user", text));
      setDraft("");
    }

    setIsSending(true);
    const reply = await getAssistantReply(text);
    setConversations(addMessage(currentConversationId, "assistant", reply));
    setIsSending(false);
  };

  const handleSendOnEnter = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void handleSend();
    }
  };

  return (
    <div
      className={`home-page ${hasStartedConversation ? "home-page--active" : "home-page--landing"}`}
    >
      <div
        className={`chat-layout ${sidebarOpen ? "chat-layout--sidebar-open" : "chat-layout--sidebar-closed"}`}
      >
        {hasStartedConversation ? (
          <aside className="chat-sidebar">
            <div className="chat-rail-top">
              <button type="button" className="chat-rail-action" onClick={handleNewConversation}>
                <Icon path="m12 5 0 14m-7-7 14 0" />
                <span>New thread</span>
              </button>
              <div className="chat-rail-top-actions">
                <button
                  type="button"
                  className="chat-rail-collapse"
                  aria-label="Refresh conversation"
                  onClick={handleRefreshConversation}
                >
                  <Icon path="M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6" />
                </button>
                <button
                  type="button"
                  className="chat-rail-collapse"
                  aria-label="Collapse rail"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon path="M15 6l-6 6 6 6" />
                </button>
              </div>
            </div>

            <div className="chat-sidebar-header">
              <h1>Threads</h1>                            
            </div>
            <ul className="chat-list">
              {conversations.map((conversation) => (
                <li key={conversation.id} className="chat-list-row">
                  <button
                    type="button"
                    className={`chat-list-item ${conversation.id === activeConversationId ? "active" : ""}`}
                    onClick={() => setActiveConversationId(conversation.id)}
                  >
                    <span>{conversation.title}</span>
                    <small>{new Date(conversation.updatedAt).toLocaleDateString()}</small>
                  </button>
                  <button
                    type="button"
                    className="chat-delete-icon"
                    aria-label="Delete conversation"
                    onClick={() => handleDeleteConversation(conversation.id)}
                  >
                    🗑
                  </button>
                </li>
              ))}
              {conversations.length === 0 ? (
                <li className="chat-list-empty">No conversations yet</li>
              ) : null}
            </ul>

            {/* <div className="chat-rail-footer">
              <button type="button" className="chat-rail-action muted">
                <Icon path="M3 19V7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
                <span>New project</span>
              </button>
              <button type="button" className="chat-rail-action muted">
                <Icon path="M3 19V7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm13-6v6m-3-3h6" />
                <span>Add project</span>
              </button>
            </div> */}
          </aside>
        ) : null}

        <section className="chat-main">
          {/* <div className="chat-main-toolbar">
            <div className="toolbar-left">
              {hasStartedConversation && !sidebarOpen ? (
                <button
                  type="button"
                  className="icon-toggle"
                  aria-label="Show history"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Icon path="M9 6l6 6-6 6" />
                </button>
              ) : null}
            </div>
            <div className="toolbar-actions">
              {!hasStartedConversation ? (
                <Button variant="outline-secondary" size="sm" onClick={handleNewConversation}>
                  New Chat
                </Button>
              ) : null}
            </div>
          </div> */}

          <header className={`chat-main-header ${hasStartedConversation ? "" : "chat-main-header--landing"}`}>
            <h2>{hasStartedConversation ? activeConversation?.title : "Where should we begin?"}</h2>
            {hasStartedConversation ? (
              <p>
                Plan features, write specs, debug issues, and define delivery steps with your
                assistant.
              </p>
            ) : null}
          </header>

          <div className="chat-thread">
            {activeConversation?.messages.length ? (
              activeConversation.messages.map((message) => (
                <article key={message.id} className={`message message--${message.role}`}>
                  <p>{message.content}</p>
                </article>
              ))
            ) : (
              <div className="chat-placeholder">
                <h3>How can I help with your product today?</h3>
                <p>Try: &quot;Create a launch checklist for the new dashboard module.&quot;</p>
              </div>
            )}
            {isSending ? (
              <article className="message message--assistant">
                <p>Thinking...</p>
              </article>
            ) : null}
          </div>

          <div className={`chat-composer ${hasStartedConversation ? "" : "chat-composer--landing"}`}>
            {!hasStartedConversation ? (
              <div className="composer-plus-wrap">
                <button type="button" className="composer-icon-button" aria-label="Add files and more">
                  +
                </button>
                <span className="composer-plus-tooltip" role="tooltip">
                  Add files and more
                </span>
              </div>
            ) : null}
            <textarea
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onFocus={() => {
                if (!hasStartedConversation) setRailPreviewOpen(true);
              }}
              onKeyDown={handleSendOnEnter}
              placeholder="“Great products start with great questions.” Ask anything..."
            />
            <Button variant="primary" size="md" onClick={() => void handleSend()} disabled={isSending}>
              {hasStartedConversation ? (
                "Send"
              ) : (
                <Icon path="M12 19V5M5 12l7-7 7 7" />
              )}
            </Button>
          </div>
        </section>
      </div>

      {!hasStartedConversation ? (
        <section className={`chat-rail-preview ${railPreviewOpen ? "chat-rail-preview--visible" : ""}`}>
          <h3>Conversation Setup</h3>
          {previewConversations.length > 0 ? (
            <ul>
              {previewConversations.map((conversation) => (
                <li key={conversation.id}>{conversation.title}</li>
              ))}
            </ul>
          ) : (
            <p>Your conversation history will appear here once you start chatting.</p>
          )}
        </section>
      ) : null}
    </div>
  );
}

export default HomePage;
