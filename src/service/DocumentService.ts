import { Injectable } from "@nestjs/common";
import { readFileSync } from "fs";
import { readdirSync } from "fs";
import { writeFileSync } from "fs";
import { DocumentAlreadyExists } from "src/domain/UserAlreadyExistError";
import { Document } from "src/model/Document"

@Injectable()
export class DocumentService {

    path: string = "src/documents";

    createDocument(document: Document): Document {
        let cpf = this.formatCpf(document.cpf);

        let rd = readdirSync(this.path);

        if (rd.indexOf(cpf + '.txt') >= 0) {
            throw new DocumentAlreadyExists("Document Alread Exists");
        }
        writeFileSync(this.path + '/' + cpf + '.txt', document.toString());
        return document;
    }

    private formatCpf(cpf: string): string {
        cpf = cpf.replace(/[^\d]/g, "");
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
}