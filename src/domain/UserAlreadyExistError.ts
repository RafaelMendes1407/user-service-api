export class DocumentAlreadyExists implements Error {
    name: string;
    message: string;
    stack?: string;

    constructor(message: string){
        this.message = message;
    }
}