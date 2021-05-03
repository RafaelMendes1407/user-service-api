import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "src/app.module";
import { IsValidCPFConstraint } from "src/service/CpfValidation";


describe('Test CPF Validation', () => {

    let cpfService: IsValidCPFConstraint;

    beforeEach(async () => {
        cpfService = new IsValidCPFConstraint();
    });

    it('Should return false for a invalid CPF', () =>{
        let value = '99999999999';
        // jest.spyOn(cpfService, 'validate').mockImplementation(() => false);
        expect(cpfService.validate(value)).toBe(false);
    })

})