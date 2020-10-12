import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indocator";
import ErrorButton from "../error-button";
// import PlanetDetails from "../planet-details";
// import StarshipDetails from "../starship-details";

export default class App extends Component {
    state = {
        showRandomPlanet: true,
        selectedPerson: 2,
        hasError: false
    };

    togglePlanet = () => {
        const { showRandomPlanet } = this.state;
        this.setState({
            showRandomPlanet: !showRandomPlanet,
        });
    };

    componentDidCatch(){
        console.log('catched error')
        this.setState({
            hasError: true,
        });
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        });
    };

    render() {

        if (this.state.hasError){
            return <ErrorIndicator />
        }

        return (
            <div className="app">
                <Header />
                {this.state.showRandomPlanet ? <RandomPlanet /> : null}
                <div className="row mb2 button-row">
                    <div className="col-md-12">
                        <button
                            className="toggle-planet btn btn-warning"
                            onClick={this.togglePlanet}
                        >
                            Toggle Random Planet
                        </button>
                        <ErrorButton />
                    </div>
                </div>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        );
    }
}
