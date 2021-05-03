import { IsNotEmpty, IsString } from "class-validator";
import { IsValidCPF } from "src/service/CpfValidation";

export class Document {

    @IsNotEmpty({ message: "Nome é um campo obrigatório" })
    @IsString()
    name: string;
    rg: string;

    @IsNotEmpty({ message: "CPF é um campo obrigatório" })
    @IsValidCPF({ message: "CPF não é Válido" })
    cpf: string;
    birthdate: Date;

    @IsNotEmpty({ message: "username é um campo obrigatório" })
    username: string;

    ip: string;
    


    constructor(name: string, rg: string, cpf: string, birthdate: Date, username: string, password: string) {
        this.name = name;
        this.rg = rg;
        this.cpf = cpf;
        this.birthdate = birthdate;
        this.username = username;
    }

    public toString(): string {
        return 'name: ' + this.name +
            '\nrg: ' + this.rg +
            '\ncpf: ' + this.cpf +
            '\nbirthdate: ' + this.birthdate +
            '\n' +
            '\nusername: ' + this.username +
            '\nip: ' + this.ip;

    }
}
