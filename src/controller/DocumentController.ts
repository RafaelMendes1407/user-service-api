import { Controller, Post, Body, UseGuards, Req, Ip } from "@nestjs/common";
import { DocumentService } from "src/service/DocumentService";
import { Document } from "src/model/Document"
import { JwtAuthGuard } from "src/domain/auth/LocalAuthGuard";

@Controller('document')
export class DocumentController {

    constructor(private documentService: DocumentService){
    };
    
    @UseGuards(JwtAuthGuard)
    @Post()
    signin(@Body() document: Document, @Ip() ip: string): Document {
        document.ip = ip;
        return this.documentService.createDocument(document);
    }

}