import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class PersonDetails extends Component {
    state = {
        person: null,
        loading: true,
        error: false,
    };

    SwapiService = new SwapiService();

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        });
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    setLoading(value) {
        this.setState({
            loading: value,
        });
    }

    updatePerson() {
        this.setLoading(true);

        const { personId } = this.props;

        if (!personId) {
            return;
        }

        this.SwapiService.getPerson(personId)
            .then((person) => {
                this.setState({
                    person,
                    loading: false,
                });
            })
            .catch(this.onError);
    }

    render() {
        if (!this.state.person) {
            return <span>Select a person from list</span>;
        }
        const { loading, error } = this.state;

        const hasData = !(loading || error);

        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? (
            <ItemContent person={this.state.person} />
        ) : null;

        return (
            <div className="person-details ">
                <div className="jumbotron row">
                    {spinner}
                    {content}
                </div>
            </div>
        );
    }
}

const ItemContent = ({ person }) => {
    const { name, eyeColor, gender, id, height, birthYear } = person;

    return (
        <React.Fragment>
            <div className="person-details-image col-md-4">
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    alt={name}
                />
            </div>
            <div className="person-details-info col-md-8">
                <h3>
                    {name} {id}
                </h3>
                <ul className="list">
                    <li className="list-item">
                        Gender: <strong>{gender}</strong>
                    </li>
                    <li className="list-item">
                        Birth: <strong>{birthYear}</strong>
                    </li>
                    <li className="list-item">
                        Height: <strong>{height}</strong>
                    </li>
                    <li className="list-item">
                        Eye Color: <strong>{eyeColor}</strong>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};
