import { getSettings } from "./chatStore";

interface EndpointResponse {
  reply?: string;
}

function mockReply(message: string): string {
  const trimmed = message.trim();
  if (!trimmed) {
    return "Please share a bit more context and I can help you structure it.";
  }

  return [
    "Here is a practical starting point:",
    `1. Clarify objective: ${trimmed.slice(0, 80)}${trimmed.length > 80 ? "..." : ""}`,
    "2. Break work into milestones with owners and deadlines.",
    "3. Define acceptance criteria and rollout checks.",
  ].join("\n");
}

export async function getAssistantReply(message: string): Promise<string> {
  const settings = getSettings();

  if (settings.integrationMode === "endpoint" && settings.endpointUrl.trim()) {
    try {
      const response = await fetch(settings.endpointUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`Endpoint error: ${response.status}`);
      }

      const data = (await response.json()) as EndpointResponse;
      if (data.reply?.trim()) return data.reply.trim();
      throw new Error("Missing reply in endpoint response");
    } catch {
      return `${mockReply(message)}\n\n(Endpoint unavailable, fallback to local response.)`;
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 450));
  return mockReply(message);
}
