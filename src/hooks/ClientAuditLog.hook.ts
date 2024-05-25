import { AuditLog } from "../model/AuditLog";
import { Client } from "../model/Client";

class ClientAuditLog {
  initAfterUpdate() {
    Client.addHook("afterUpdate", async (client: Client, options) => {
      const originalData = (options as any).oldClient;

      await AuditLog.create({
        clientId: client.id,
        action: "editar",
        oldValues: originalData.toJSON(),
        newValues: client.toJSON(),
      });
    });
  }
}

export default new ClientAuditLog();
