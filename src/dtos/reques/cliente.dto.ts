import { IsEmail, IsNotEmpty, IsString, Max, MaxLength, MinLength } from "class-validator"
import { BaseDto } from "../base.dto"

export class ClienteDto extends BaseDto{
    @IsString()
    @IsNotEmpty()
    clienteNombre: string

    @IsString()
    @IsNotEmpty()
    clienteApellido: string

    @IsEmail()
    @IsNotEmpty()
    clienteCorreo: string

    @IsString()
    @MaxLength(8)
    @MinLength(8, {message: "El DNI es de 8 caracteres"})
    clienteDni: string 
}