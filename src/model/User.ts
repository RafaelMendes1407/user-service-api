import { UsePipes, ValidationPipe } from "@nestjs/common";
import { IsNotEmpty, IsString } from "class-validator";
import { IsValidCPF } from "src/service/CpfValidation";

export class User {

    @IsNotEmpty({message: "Nome é um campo obrigatório"})
    @IsString()
    name: string;
    rg: string;

    @IsNotEmpty({message: "CPF é um campo obrigatório"})
    @IsValidCPF({message: "CPF não é Válido"})
    cpf: string;
    birthdate: Date;

    @IsNotEmpty({message: "login é um campo obrigatório"})
    login: string;
    @IsNotEmpty({message: "Senha é um campo obrigatório"})
    password: string;

    constructor(name: string, rg: string, cpf: string, birthdate: Date, login: string, password:string ){
        this.name = name;
        this.rg = rg;
        this.cpf = cpf;
        this.birthdate = birthdate;
        this.login = login;
        this.password = password;
    }
}

function CpfValidation() {
    throw new Error("Function not implemented.");
}
