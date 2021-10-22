import { IsNumber, IsOptional, IsPositive } from "class-validator";
import { BaseDto } from "../base.dto";

export class ListarClienteDto extends BaseDto{
    @IsNumber()
    @IsPositive() 
    @IsOptional()  
    page:number

    @IsNumber()
    @IsPositive()
    @IsOptional()
    perPage:number
}