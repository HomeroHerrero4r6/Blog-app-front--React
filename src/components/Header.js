import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="center">
                    {/* LOGO */}
                    <div id="logo">
                        <img src={logo} alt="logotype" className="app-logo"></img>
                        <span id="brand">
                            <strong>Curso</strong>React
                            </span>
                    </div>
                    {/* MENU */}
                    <nav id="menu">
                        <ul>
                            <li><NavLink to="/home" activeClassName="active">Inicio</NavLink></li>
                            <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
                            <li><NavLink to="/formulario" activeClassName="active">Formulario</NavLink></li>
                            <li><NavLink to="/peliculas" activeClassName="active">Peliculas</NavLink></li>
                            <li><NavLink to="/pruebas/:Homer" activeClassName="active">Pagina 2</NavLink></li>
                        </ul>

                    </nav>
                    {/* Limpiar Floats  */}
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}
export default Header;