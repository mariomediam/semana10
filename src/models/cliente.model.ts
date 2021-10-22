import { model, Schema } from "mongoose";

interface ICliente {
  clienteNombre: string;
  clienteApellido: string;
  clienteCorreo: string;
  clienteDni: string;
}

const clienteSchema = new Schema<ICliente>({
  clienteNombre: {
    type: Schema.Types.String,
    alias: "nombre", //nombre con el que se guardará las llaves en los documentos
    required: true,
    maxlength: 40,
  },
  clienteApellido: {
    type: Schema.Types.String,
    alias: "apellido",
    required: true,
  },
  clienteCorreo: {
    type: Schema.Types.String,
    validate: {
      validator: (input: string) => /\w+[@]\w+[.]\w{2,3}/.test(input),
      message: "Correo invalido",
    },
  },
  clienteDni: {
    type: Schema.Types.String,
    maxlength: 8,
    minlength: [8, "DNI Mínimo 8 caracteres"],
  },
},{timestamps: {createdAt: "fecha_creacion", updatedAt: false}}
);

const Cliente = model<ICliente>("clientes", clienteSchema);

export default Cliente;
