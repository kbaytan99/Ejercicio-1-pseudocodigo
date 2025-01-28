/**
 * Ejercicio 3: Asignación de trabajadores
 * Author: Kaan Baytan
 * Version: 1.0
 * Date: 2025-01-28
 * License: MIT
 */

class AsignarTrabajos {
    constructor() {
        // Lista de trabajadores con el número de veces que deben ser asignados
        this.trabajadores = [
            { nombre: "Antonio", veces: 2 },
            { nombre: "Jesús", veces: 1 }
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