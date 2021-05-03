
import { IsValidCPFConstraint } from "../src/service/CpfValidation";


describe('Test CPF Validation', () => {

    let cpfService: IsValidCPFConstraint;

    beforeEach(async () => {
        cpfService = new IsValidCPFConstraint();
    });

    it('Should return false for a invalid CPF whith same digit', () =>{
        let value = '99999999999';
        expect(cpfService.validate(value)).toBe(false);
    })

    it('Should return false for a invalid CPF diferent digit', () =>{
        let value = '12345678901';
        expect(cpfService.validate(value)).toBe(false);
    })

    it('Should return true for a valid CPF', () =>{
        let value = '64106045052';
        expect(cpfService.validate(value)).toBe(true);
    })

    it('Should return true for a valid CPF with special characters', () =>{
        let value = '641.060.450-52';
        expect(cpfService.validate(value)).toBe(true);
    })

})