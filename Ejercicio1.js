/**
 * Ejercicio 2: Optimización de código
 * Author: Kaan Baytan
 * Version: 1.0
 * Date: 2025-01-28
 * License: MIT
 */

let variable;

/**
 * Simula un cálculo lento y retorna el día actual menos 15.
 * @returns {Promise<number>}
 */
function metodoAuxiliar() {
    return new Promise(resolve => {
        setTimeout(() => resolve(new Date().getDate() - 15), 1000);
    });
}

/**
 * Determina el valor de "variable" basado en el resultado de "metodoAuxiliar".
 * @returns {Promise<void>}
 */
async function metodo() {
    const resultado = await metodoAuxiliar();
    variable = resultado < 0 ? -1 : resultado === 0 ? 0 : 1;
}

// Ejemplo de uso
(async () => {
    await metodo();
    console.log(`Valor de la variable: ${variable}`);
})();