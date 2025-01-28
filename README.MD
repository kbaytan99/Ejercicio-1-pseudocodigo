# Ejercicio 1: Eliminación de elementos de un array por posición

**Author:** Kaan Baytan  
**Version:** 1.0  
**Date:** 2025-01-28  
**License:** MIT

## Descripción

Función que elimina valores de un array por su posición.

## Uso

```javascript
/**
 * Función que elimina valores de un array por su posición.
 * @param {Array} array - Array del que se eliminarán elementos
 * @param {Array} pos - Array con las posiciones a eliminar
 * @returns {Array} - Array resultante después de eliminar los elementos
 */
function delArrayElementsByPos(array, pos) {
    // Ordena las posiciones en orden descendente
    pos.sort((a, b) => b - a);

    // Elimina los elementos en las posiciones indicadas
    for (let i = 0; i < pos.length; i++) {
        if (pos[i] >= 0 && pos[i] < array.length) { // Verifica si la posición es válida
            array.splice(pos[i], 1); // Elimina el elemento en la posición indicada
        }
    }
    return array;
}

// Ejemplo de prueba
console.log(delArrayElementsByPos([3, 1, 2], [0, 1, 2])); // Salida: []
console.log(delArrayElementsByPos([3, 1, 2], [0, 1]));    // Salida: [2]
console.log(delArrayElementsByPos([3, 1, 2], [0]));       // Salida: [1, 2]
```

# Ejercicio 2: Optimización de código

**Author:** Kaan Baytan  
**Version:** 1.0  
**Date:** 2025-01-28  
**License:** MIT

## Descripción

Este ejercicio optimiza el código para determinar el valor de una variable basada en el resultado de una función
auxiliar que simula un cálculo lento.

## Uso

```javascript
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
```

# Ejercicio 3: Asignación de trabajadores

**Author:** Kaan Baytan  
**Version:** 1.0  
**Date:** 2025-01-28  
**License:** MIT

## Descripción

Este ejercicio asigna trabajadores de una lista a tareas, asegurando que cada trabajador sea asignado el número de veces
especificado antes de pasar al siguiente trabajador.

## Uso

```javascript
class AsignarTrabajos {
    constructor() {
        // Lista de trabajadores con el número de veces que deben ser asignados
        this.trabajadores = [
            {nombre: "Antonio", veces: 2},
            {nombre: "Jesús", veces: 1}
        ];
        // Índice del trabajador actual
        this.currentIndex = 0;
        // Contador de asignaciones del trabajador actual
        this.currentCount = 0;
    }

    /**
     * Método para obtener el nombre del trabajador asignado.
     * @returns {string} - Nombre del trabajador asignado
     */
    getTrabajadorAsignado() {
        // Si el trabajador actual ha sido asignado el número de veces requerido
        if (this.currentCount >= this.trabajadores[this.currentIndex].veces) {
            // Pasamos al siguiente trabajador en la lista
            this.currentIndex = (this.currentIndex + 1) % this.trabajadores.length;
            // Reiniciamos el contador de asignaciones
            this.currentCount = 0;
        }
        // Incrementamos el contador de asignaciones del trabajador actual
        this.currentCount++;
        // Retornamos el nombre del trabajador actual
        return this.trabajadores[this.currentIndex].nombre;
    }
}

// Instancia de la clase AsignarTrabajos
const asignar = new AsignarTrabajos();

// Ejemplo de uso: Asignar trabajadores 10 veces
for (let i = 0; i < 10; i++) {
    console.log(asignar.getTrabajadorAsignado());
}
```

# Ejercicio 4: Cálculo del máximo beneficio

**Author:** Kaan Baytan  
**Version:** 1.0  
**Date:** 2025-01-28  
**License:** MIT

## Descripción

Este ejercicio calcula el máximo beneficio que se puede obtener al comprar y vender acciones en un día determinado.

## Uso

```javascript
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
```