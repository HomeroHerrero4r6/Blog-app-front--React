import React, { Component } from 'react';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component {
    render() {
        return (
            <section id="content">
                <h2 className="subheader">Ultimos Articulos</h2>
                <div className="componentes">
                    <MiComponente />
                    <Peliculas />
                </div>
            </section>
        );
    }
}
export default SeccionPruebas;