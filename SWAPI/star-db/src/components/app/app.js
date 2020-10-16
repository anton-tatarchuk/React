import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import ErrorButton from "../error-button";
import Header from "../header";
import ItemPage from "../item-page";
import RandomPlanet from "../random-planet";
import { Record } from "../item-details/item-details";

export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true
    };

    togglePlanet = () => {
        const { showRandomPlanet } = this.state;
        this.setState({
            showRandomPlanet: !showRandomPlanet,
        });
    };

    render() {
        const {
            getAllPeople,
            getPerson,
            getPersonImageUrl,
            getAllPlanets,
            getPlanet,
            getPlanetImageUrl,
            getAllStarships,
            getStarship,
            getStarshipImageUrl,
        } = this.swapiService;

        const peoplePage = (
            <ItemPage
                getData={getAllPeople}
                getItemData={getPerson}
                getImageUrl={getPersonImageUrl}
                label={({ name, gender }) => `${name} (${gender})`}
            >
                <Record label="Gender" field="gender" />
                <Record label="Birth" field="birthYear" />
                <Record label="Height" field="height" />
                <Record label="Eye Color" field="eyeColor" />
            </ItemPage>
        );

        const planetPage = (
            <ItemPage
                getData={getAllPlanets}
                getItemData={getPlanet}
                getImageUrl={getPlanetImageUrl}
                label={({ name, population }) => `${name} (${population})`}
            >
                <Record label="Population" field="population" />
                <Record label="Rotation Period" field="rotationPeriod" />
                <Record label="Diameter" field="diameter" />
            </ItemPage>
        );

        const starshipPage = (
            <ItemPage
                getData={getAllStarships}
                getItemData={getStarship}
                getImageUrl={getStarshipImageUrl}
                label={({ name, model }) => `${name} (${model})`}
            >
                <Record label="Model" field="model" />
                <Record label="Manufacturer" field="manufacturer" />
                <Record label="Cost" field="costInCredits" />
                <Record label="Crew" field="crew" />
            </ItemPage>
        );

        return (
            <div className="app">
                <ErrorBoundry>
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
                    {peoplePage}
                    {planetPage}
                    {starshipPage}
                </ErrorBoundry>
            </div>
        );
    }
}
