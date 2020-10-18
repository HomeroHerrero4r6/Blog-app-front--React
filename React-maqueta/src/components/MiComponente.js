//Cargar el componente con el destructuring
import React, { Component } from 'react';

class MiComponente extends Component {

    render() {
        // Se puede declarar variables
        let receta = {
            nombre: 'pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon cocido'],
            calorias: 400
        }

        return (
            // Puede devolver solo 1 etiquete, por ejemplo todo dentro de un div o un Fragment
            <React.Fragment>
                <h1>{"Receta: " + receta.nombre}</h1>
                <h2>{"Calorias: " + receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            console.log(ingrediente);
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr />
            </React.Fragment>
        );
    }
}

export default MiComponente;