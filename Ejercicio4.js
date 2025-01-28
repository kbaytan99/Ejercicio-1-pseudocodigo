/**
 * Ejercicio 4: Cálculo del máximo beneficio
 * Author: Kaan Baytan
 * Version: 1.0
 * Date: 2025-01-28
 * License: MIT
 */


/**
 * Clase para calcular el máximo beneficio posible al comprar y vender acciones.
 * Los precios de las acciones se proporcionan en una lista de 8 días.
 * Se puede comprar y vender solo una vez.
 * El beneficio es la diferencia entre el precio de venta y el precio de compra.
 * @class
 * @property {number[]} precios - Lista de precios de las acciones durante 8 días
 * @method maximoBeneficio - Calcula el máximo beneficio posible
 * @returns {number} - El beneficio máximo posible
 * @example
 * const calcularMaximoBeneficio = new CalcularMaximoBeneficio();
 * console.log(`El máximo beneficio posible es: ${calcularMaximoBeneficio.maximoBeneficio()} €`);
 * // Salida: El máximo beneficio posible es: 80 €
 */
class CalcularMaximoBeneficio {
    constructor() {
        // Lista de precios durante 8 días
        this.precios = [100, 90, 120, 80, 110, 140, 60, 110];
    }
    /**
     * Calcula el máximo beneficio posible al comprar en un día
     * y vender en otro día posterior.
     * @returns {number} El beneficio máximo posible
     */
    maximoBeneficio() {
        let maxBeneficio = 0; // Beneficio máximo inicializado a 0
        let minPrecio = Number.MAX_VALUE; // Precio mínimo inicializado a un valor muy alto

        // Iteramos sobre la lista de precios
        for (let precio of this.precios) {
            // Actualizamos el precio mínimo si encontramos uno más bajo
            if (precio < minPrecio) {
                minPrecio = precio;
            }

            // Calculamos el beneficio si vendemos al precio actual
            const beneficio = precio - minPrecio;

            // Actualizamos el beneficio máximo si es mayor que el anterior
            if (beneficio > maxBeneficio) {
                maxBeneficio = beneficio;
            }
        }

        return maxBeneficio;
    }
}

// Ejemplo de uso
const calcularMaximoBeneficio = new CalcularMaximoBeneficio();
console.log(`El máximo beneficio posible es: ${calcularMaximoBeneficio.maximoBeneficio()} €`);
