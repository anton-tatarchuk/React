import React, { Component } from "react";
import ErrorBoundry from "../error-boundry";
import ErrorButton from "../error-button";
import ItemDetails, { Record } from "../item-details/item-details";
import ItemList from "../item-list";

export default class ItemPage extends Component {
    state = {
        selectedItem: null,
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id,
        });
    };

    render() {
        const { getData, getItemData, getImageUrl, label } = this.props;

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected} getData={getData}>
                {label}
            </ItemList>
        );

        const itemDetails = (
            <React.Fragment>
                <ItemDetails
                    itemId={this.state.selectedItem}
                    getItemData={getItemData}
                    getImageUrl={getImageUrl}
                >   
                    {this.props.children}
                </ItemDetails>
                <ErrorButton />
            </React.Fragment>
        );

        return (
            <ErrorBoundry>
                <Row col_1={itemList} col_2={itemDetails} />
            </ErrorBoundry>
        );
    }
}

const Row = ({ col_1, col_2 }) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">{col_1}</div>
            <div className="col-md-6">{col_2}</div>
        </div>
    );
};
