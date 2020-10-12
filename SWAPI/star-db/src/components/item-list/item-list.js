import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {
    swapiService = new SwapiService();
    state = {
        peopleList: null,
    };

    componentDidMount() {
        this.swapiService.getAllPeople().then((list) => {
            this.setState({
                peopleList: list,
            });
        });
    }

    renderItems(arr) {
        return arr.map(({name}, index) => {
            return (
                <li className="list-item" 
                    key={name}
                    onClick={()=> this.props.onItemSelected(index+1)}>
                    <span>{name}</span>
                </li>
            );
        });
    }

    render() {
        const { peopleList } = this.state;

        if (!peopleList) {
            return <Spinner />;
        }

        return (
            <div className="items-list">
                <div className="jumbotron">
                    <ul className="list">{this.renderItems(peopleList)}</ul>
                </div>
            </div>
        );
    }
}
