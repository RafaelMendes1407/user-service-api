import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

export function IsValidCPF(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsValidCPFConstraint,
        })
    }
}

@ValidatorConstraint()
export class IsValidCPFConstraint implements ValidatorConstraintInterface {
    validate(value: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return validateCpf(value);
    }
}

function validateCpf(cpf: string) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    let cpfNuns = cpf.split('');
    let calcCpf = 0;

    let duplicateDigits = new Array;
    
    cpfNuns.filter((el, i) => {
        if(cpfNuns.indexOf(el) == i) {
            duplicateDigits.push(el)
        };
    });

    if (duplicateDigits.length < 1) {
        return false;
    }

    cpfNuns.forEach(element => {
        calcCpf = calcCpf + parseInt(element);
    });

    let cpfValidation = calcCpf.toString().split('');

    if (calcCpf.toString().length < 2) {
        return false;
    }

    if (cpfValidation[0] !== cpfValidation[1]) {
        return false;
    }

    return true;
}
