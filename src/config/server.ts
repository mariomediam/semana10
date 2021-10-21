import express, { Express } from "express";

export default class Server {
  private readonly app: Express;
  private readonly port: string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
  }
}
