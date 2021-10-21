import express, { Express, json } from "express";

export default class Server {
  private readonly app: Express;
  private readonly port: string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT ?? "8000";
    this.bodyParser()
  }
  bodyParser() {
    this.app.use(json());
  }
  start() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port} 👍👍👍`);
    });
  }
}
