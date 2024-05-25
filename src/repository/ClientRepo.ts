import { Client } from "../model/Client";

interface IClientRepo {
  save(client: Client): Promise<void>;
  update(client: Client): Promise<void>;
  retrieveAll(): Promise<Client[]>;
}

export class ClientRepo implements IClientRepo {
  async save(client: Client): Promise<void> {
    try {
      await client.save();
    } catch (error) {
      throw new Error("Error al crear un cliente");
    }
  }
  async update(client: Client): Promise<void> {
    try {
      const existingClient = await Client.findOne({ where: { id: client.id } });
      if (!existingClient) {
        throw new Error("Cliente no encontrado");
      }
      const options = {
        oldClient: existingClient
      }
      await Client.update({
        firstName: client.firstName,
        secondName: client.secondName,
        firstSurname: client.firstSurname,
        secondSurname: client.secondSurname,
        firstAdress: client.firstAdress,
        secondAdress: client.secondAdress,
        dui: client.dui,
        nit: client.nit,
        userId: client.userId,

      },{ where: { id: client.id } ,individualHooks:true,...options});
    } catch (error) {
      console.log(error)
      throw new Error("Error al editar un cliente");
    }
  }
  async retrieveAll(): Promise<Client[]> {
    try {
      return await Client.findAll();
    } catch (error) {
      throw new Error("Error al traer todos los clientes");
    }
  }
}
