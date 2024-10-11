export const operaciones = (numeros, setNumeros) => {
    const { numero1, numero2 } = numeros;

    const handleChange = (e) => {
        setNumeros({
            ...numeros,
            [e.target.name]: parseFloat(e.target.value),
        });
    };

    const suma = () => numero1 + numero2;
    const resta = () => numero1 - numero2;
    const multiplicacion = () => numero1 * numero2;
    const division = () => (numero2 !== 0 ? numero1 / numero2 : 'Error');  // Evitar división por 0

    return { handleChange, suma, resta, multiplicacion, division, numero1, numero2 };
};
