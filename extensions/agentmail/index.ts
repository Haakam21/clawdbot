import type { MoltbotPluginApi } from "clawdbot/plugin-sdk";
import { emptyPluginConfigSchema } from "clawdbot/plugin-sdk";

import { agentmailPlugin } from "./src/channel.js";
import { setAgentMailRuntime } from "./src/runtime.js";

const plugin = {
  id: "agentmail",
  name: "AgentMail",
  description: "Email channel plugin via AgentMail API",
  configSchema: emptyPluginConfigSchema(),
  register(api: MoltbotPluginApi) {
    setAgentMailRuntime(api.runtime);
    api.registerChannel({ plugin: agentmailPlugin });
  },
};

export default plugin;
