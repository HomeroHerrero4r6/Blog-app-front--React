import React, { Component } from 'react';
import Slider from './Slider';
import SideBar from './SideBar';

class Home extends Component {
    render() {
        return (
            <div id="home">
                <Slider
                    title="Home"
                    btn="Ir al Blog"
                    size="slider-big" />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Ultimos articulos</h1>
                    </div>
                </div>
                <SideBar />
            </div>
        );
    }
}
export default Home;