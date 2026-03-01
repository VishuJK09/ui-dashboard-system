import type { ChatConversation, ChatMessage, ProductSettings } from "../types/chat";

const CONVERSATIONS_KEY = "product-navigator:conversations";
const SETTINGS_KEY = "product-navigator:settings";

const DEFAULT_SETTINGS: ProductSettings = {
  assistantName: "Product Navigator",
  integrationMode: "mock",
  endpointUrl: "",
};

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T): void {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function getConversations(): ChatConversation[] {
  const conversations = readJson<ChatConversation[]>(CONVERSATIONS_KEY, []);
  return conversations.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export function saveConversations(conversations: ChatConversation[]): void {
  writeJson(CONVERSATIONS_KEY, conversations);
}

export function createConversation(question: string): ChatConversation {
  const now = new Date().toISOString();
  const conversation: ChatConversation = {
    id: createId(),
    title: question.slice(0, 60),
    createdAt: now,
    updatedAt: now,
    messages: [
      {
        id: createId(),
        role: "user",
        content: question,
        createdAt: now,
      },
    ],
  };

  const conversations = [conversation, ...getConversations()];
  saveConversations(conversations);
  return conversation;
}

export function addMessage(
  conversationId: string,
  role: ChatMessage["role"],
  content: string,
): ChatConversation[] {
  const now = new Date().toISOString();
  const conversations = getConversations().map((conversation) => {
    if (conversation.id !== conversationId) return conversation;
    const next = {
      ...conversation,
      updatedAt: now,
      messages: [
        ...conversation.messages,
        {
          id: createId(),
          role,
          content,
          createdAt: now,
        },
      ],
    };

    if (conversation.title === "New chat" && role === "user") {
      next.title = content.slice(0, 60);
    }

    return next;
  });

  saveConversations(conversations);
  return conversations;
}

export function createEmptyConversation(): ChatConversation {
  const now = new Date().toISOString();
  const conversation: ChatConversation = {
    id: createId(),
    title: "New chat",
    createdAt: now,
    updatedAt: now,
    messages: [],
  };

  const conversations = [conversation, ...getConversations()];
  saveConversations(conversations);
  return conversation;
}

export function deleteConversation(conversationId: string): ChatConversation[] {
  const conversations = getConversations().filter(
    (conversation) => conversation.id !== conversationId,
  );
  saveConversations(conversations);
  return conversations;
}

export function resetConversation(conversationId: string): ChatConversation[] {
  const now = new Date().toISOString();
  const conversations = getConversations().map((conversation) => {
    if (conversation.id !== conversationId) return conversation;
    return {
      ...conversation,
      title: "New chat",
      updatedAt: now,
      messages: [],
    };
  });
  saveConversations(conversations);
  return conversations;
}

export function getSettings(): ProductSettings {
  return {
    ...DEFAULT_SETTINGS,
    ...readJson<ProductSettings>(SETTINGS_KEY, DEFAULT_SETTINGS),
  };
}

export function saveSettings(settings: ProductSettings): ProductSettings {
  writeJson(SETTINGS_KEY, settings);
  return settings;
}
