import express, { Express, json, NextFunction } from "express";
import { HttpError } from "http-errors";
import { connect } from "mongoose";
import clienteRouter from "../routes/cliente.routes";

export default class Server {
  private readonly app: Express;
  private readonly port: string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT ?? "8000";
    this.bodyParser()
    this.routes()
  }

  bodyParser() {
    this.app.use(json());
  }

  

  private routes(){
    this.app.use(clienteRouter);
  }
  
  start() {
    this.app.listen(this.port, async () => {
      console.log(`Servidor corriendo en el puerto ${this.port} 👍👍👍`);
      try {
        console.log(process.env.DATABASE_URL)     
          await connect(process.env.DATABASE_URL ?? "")
          console.log("Servidorde BD conetctado exitosamente")
      } catch (error) {
          console.log("Error al conectar la BD")
      }
    });
  }
}
