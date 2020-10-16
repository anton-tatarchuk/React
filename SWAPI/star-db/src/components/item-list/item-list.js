import React, { Component } from "react";
import Spinner from "../spinner";

export default class ItemList extends Component {
    state = {
        itemList: null,
    };

    componentDidMount() {
        const { getData } = this.props;

        getData().then((list) => {
            this.setState({
                itemList: list,
            });
        });
    }

    renderItems(arr) {
        return arr.map((item, index) => {
            const value = this.props.children(item);
            return (
                <li className="list-item" 
                    key={index}
                    onClick={()=> this.props.onItemSelected(item.id)}>
                    <span>{value}</span>
                </li>
            );
        });
    }

    render() {
        const { itemList } = this.state;

        if (!itemList) {
            return <Spinner />;
        }

        return (
            <div className="items-list">
                <div className="jumbotron">
                    <ul className="list">{this.renderItems(itemList)}</ul>
                </div>
            </div>
        );
    }
}
