import React, { Component } from "react";
import "./add-item.css";

export default class AddItem extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    // const { onAddItem } = this.props;
    return (
      <form className="add-item-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="Wtf do you want"
          value={this.state.label}
        />
        <button className="btn btn-outline-dark btn-sm float-right">
          <i className="fa fa-plus" />
        </button>
      </form>
    );
  }
}
