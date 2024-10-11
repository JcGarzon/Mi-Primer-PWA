import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Resultado from './Resultado';
import { operaciones } from '../helpers/operaciones';

const NumberInput = () => {
    const [numeros, setNumeros] = useState({
        numero1: 0,
        numero2: 0,
    });

    const { handleChange, suma, resta, multiplicacion, division, numero1, numero2 } = operaciones(numeros, setNumeros);
    const resultadoSuma = suma();
    const resultadoResta = resta();
    const resultadoMultiplicacion = multiplicacion();
    const resultadoDivision = division();

    return (
        <>
            <label htmlFor="numero1">
                Numero 1:
                <input name="numero1" value={numero1} onChange={handleChange} type="number" />
            </label>
            <label htmlFor="numero2">
                Numero 2:
                <input name="numero2" value={numero2} onChange={handleChange} type="number" />
            </label>
            <Resultado operacion="Suma" calculo={resultadoSuma} />
            <Resultado operacion="Resta" calculo={resultadoResta} />
            <Resultado operacion="Multiplicación" calculo={resultadoMultiplicacion} />
            <Resultado operacion="División" calculo={resultadoDivision} />
        </>
    );
};

NumberInput.propTypes = {
    name: PropTypes.string,
};

export default NumberInput;
