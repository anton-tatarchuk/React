import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indocator";

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.interval = setInterval(this.updatePlanet, 5000);
    }

    componentWillUnmount(){
        clearInterval(this.interval)
        console.log("Unmount Random Planet")
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        // const id = Math.floor(Math.random()*25 + 2);
        const id = Math.floor(Math.random()*25)+1;
        this.swapiService
                .getPlanet(id)
                .then(this.onPlanetLoaded)
                .catch(this.onError);
    }

   
    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;
        const errorMessage = error ? <ErrorIndicator /> : null;

        return (
            <div className="random-planet">
                <div className="jumbotron row">
                    {errorMessage}
                    {spinner}
                    {content}
                </div>
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <div className="random-planet-image col-md-4">
                <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    alt={name}
                />
            </div>
            <div className="random-planet-info col-md-8">
                <h3>{name}</h3>
                <ul className="list">
                    <li className="list-item">
                        Population <strong>{population}</strong>
                    </li>
                    <li className="list-item">
                        Rotation Period <strong>{rotationPeriod}</strong>
                    </li>
                    <li className="list-item">
                        Diameter <strong>{diameter}</strong>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};
