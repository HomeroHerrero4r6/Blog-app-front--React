import React, { Component } from 'react';
import Pelicula from './Pelicula';
class Peliculas extends Component {
    state = {};
    cambiarTitulo = () => {
        var { peliculas } = this.state;
        peliculas[0].titulo = "Batman";
        this.setState({
            peliculas: peliculas
        })
    }
    favorita = (pelicula) => {
        console.log("Favorita Agregada");
        console.log(pelicula);
        this.setState({
            favorita: pelicula
        })

    }
    componentWillMount() {
        this.setState({
            //Estado inicial de los componentes
            peliculas: [
                { titulo: 'Batman vs Superman', image: 'https://www.cinemascomics.com/wp-content/uploads/2020/06/snyder-cut-batman-vs-superman-960x560.jpg' },
                { titulo: 'Gran Torino', image: 'https://2.bp.blogspot.com/_2Syv7WWYErE/S_FRPIb2QyI/AAAAAAAABP0/DBBINTiZCzs/s1600/Clint+Eastwood+-+Gran+Torino+(2).jpg' },
                { titulo: 'The Hobbit', image: 'https://lamanodelextranjero.files.wordpress.com/2014/12/poster-de-el-hobbit-la-batalla-de-los-cinco-ejrcitos.jpg' }
            ],
            nombre: 'Homero Herrero',
            favorita: {}
        });
    }
    render() {
        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Seleccion de las peliculas favoritas  de {this.state.nombre}</p>
                <p>
                    <button onClick={this.cambiarTitulo}>
                        Cambiar titulo de batman
                    </button>
                </p>
                { this.state.favorita.titulo ? (
                    <p className="favorita">
                        <strong>La Pelicula favorita de {this.state.nombre} es: </strong>
                        <span>{this.state.favorita.titulo}</span>
                    </p>
                ) : (
                        <p>No hay pelicula favorita</p>
                    )
                }
                {/*Crear componente pelicula */}
                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula key={i} pelicula={pelicula} marcarFavorita={this.favorita} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
export default Peliculas;