const validateLib = require('validate.js');
const validate = require('./validate');

const Calculadora = 
{
    calcular(n1, op, n2) 
    {
        n1 = parseInt(n1, 10)
        n2 = parseInt(n2, 10)

        const validarN1 = validateLib({ n1 },  validate.validateNumber);
        const validarN2 = validateLib({ n2 },  validate.validateNumber);  

        if(validarN1 !== undefined || validarN2 !== undefined)
        {
            return 'Error';
        }

        else
        {
            if(op == "+")
            {
                return n1 + n2
            }

            else if(op == "-")
            {
                return n1 - n2
            }

            else if(op == "/")
            {
                return n1 / n2
            }

            else if(op == "*")
            {
                return n1 * n2
            }

            else if(op == "^")
            {
                return n1 ** n2
            }

            else
            {
                return 'Error'
            }
        }
    } 
}

module.exports = Calculadora;