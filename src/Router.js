import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Importar Componentes
// import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
// import SeccionPruebas from './components/SeccionPrueba';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
class Router extends Component {
    render() {
        return (
            // Configurar rutas y paginas
            <BrowserRouter>
                <Header />

                {/* Dentro de switch van a ir todas las rutas */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/formulario" component={Formulario} />
                    <Route exact path="/peliculas" component={Peliculas} />
                    {/* Rutas de prueba */}
                    {/* <Route exact path="/segundaruta" component={MiComponente} />
                    <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                        var nombre = props.match.params.nombre;
                        var apellidos = props.match.params.apellidos;
                        return (
                            <div id="content">
                                <h1 className="subheader">Pagina de pruebas</h1>
                                <h2>
                                    {nombre && !apellidos &&
                                        <span>{nombre}</span>
                                    }
                                    {nombre && apellidos &&
                                        <span>{nombre} {apellidos}</span>
                                    }
                                </h2>
                            </div>
                        );
                    }} /> */}
                    <Route component={Error} />
                </Switch>
                <div className="clearfix"></div>
                <Footer />
            </BrowserRouter >
        );
    }
}
export default Router;