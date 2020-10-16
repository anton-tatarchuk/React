import React, { Component } from "react";

const Record = ({ item, field, label }) => {
    return (
        <li className="list-item">
            {label}: <strong>{item[field]}</strong>
        </li>
    );
};

export { Record };

export default class ItemDetails extends Component {
    state = {
        item: null,
        itemImageUrl: null,
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getItemData, getImageUrl } = this.props;

        if (!itemId) {
            return;
        }

        getItemData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    itemImageUrl: getImageUrl(item),
                });
            })
            .catch(this.onError);
    }

    render() {
        const { item, itemImageUrl } = this.state;

        if (!item) {
            return <h2>Select Item from list</h2>;
        }

        const { name, id, ...props } = item;

        return (
            <div className="person-details ">
                <div className="jumbotron row">
                    <div className="person-details-image col-md-4">
                        <img src={itemImageUrl} alt={item.name} />
                    </div>
                    <div className="person-details-info col-md-8">
                        <h3>{`${item.name} (${item.id})`}</h3>
                        <ul className="list">
                            {
                                React.Children.map(this.props.children, (child) => {
                                    return React.cloneElement(child, {item});
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
