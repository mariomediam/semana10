import { Router } from "express";
import { registro, listarClientes } from "../controllers/cliente.controllers";

const clienteRouter = Router();

clienteRouter.route("/cliente").post(registro).get(listarClientes)

export default clienteRouter