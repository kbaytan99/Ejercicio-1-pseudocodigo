/**
 * Ejercicio 2: Optimización de código
 * Author: Kaan Baytan
 * Version: 1.0
 * Date: 2025-01-28
 * License: MIT
 */

/**
 * Variable global para almacenar el resultado
 */
let variable;

/**
 * Función auxiliar que simula un cálculo lento.
 * Retorna el día actual menos 15.
 * @async
 * @function
 * @name metodoAuxiliar
 * @returns {number}
 */
function metodoAuxiliar() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Date().getDate() - 15);
        }, 1000); // Simulamos lentitud en la ejecución: 1 segundo de espera
    });
}

/**
 * Método optimizado para determinar el valor de "variable" basado en el resultado de "metodoAuxiliar".
 * Sin modificar el contenido de "metodoAuxiliar".
 * @async
 * @function
 * @name metodo
 * @returns {void}
 * @example
 * await metodo();
 * console.log(`Valor de la variable: ${variable}`);
 * // Salida: Valor de la variable: -1
 * // Dependiendo del día actual, el valor de "variable" será -1, 0 o 1
 * // Si el día actual es menor que 15, el valor será -1
 */
async function metodo() {
    const resultado = await metodoAuxiliar();

    if (resultado < 0) {
        variable = -1;
    } else if (resultado === 0) {
        variable = 0;
    } else {
        variable = 1;
    }
}

// Ejemplo de uso
(async () => {
    await metodo();
    console.log(`Valor de la variable: ${variable}`);
})();