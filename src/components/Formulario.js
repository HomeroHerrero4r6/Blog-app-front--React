import React, { Component } from 'react';
import Slider from './Slider';
import SideBar from './SideBar';

class Blog extends Component {
    render() {
        return (
            <div id="blog">
                <Slider
                    title="Formulario"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        {/* Listado de Articulos que vendran de la API */}
                    </div>
                </div>
                <SideBar
                    blog="false"
                />
            </div>
        );
    }
}
export default Blog;