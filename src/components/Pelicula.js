import React, { Component } from 'react';

class Pelicula extends Component {
    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula);
    }
    render() {
        //Desctructuring
        const { titulo, image } = this.props.pelicula;
        return (
            <article className="article-item" id="article-template">
                <div className="img-wrap">
                    <img src={image} alt={titulo}></img>
                </div>
                <h2>{titulo}</h2>
                <span className="date">
                    hace 5 min
                </span>
                <a href="#">leer mas</a>
                <button onClick={this.marcar}>
                    Marcar como favorita
                </button>
                <div className="clearfix"></div>
            </article>
        )
    }
}
export default Pelicula;