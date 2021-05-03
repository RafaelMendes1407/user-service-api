import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";

@Catch()
export class ExceptionHandler implements ExceptionFilter {

    private httpAdapter: AbstractHttpAdapter;

    constructor(adapterHost: HttpAdapterHost) {
        this.httpAdapter = adapterHost.httpAdapter;
    }

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();

        const { status, body } = exception instanceof HttpException ? {
            status: exception.getStatus(),
            body: exception.getResponse()
        } : {
            status: HttpStatus.CONFLICT,
            body: {
                statusCode: HttpStatus.CONFLICT,
                timeStamp: new Date().toISOString(),
                message: exception.message,
                path: req.path,
            }
        }

        this.httpAdapter.reply(res, body, status);
    }

}