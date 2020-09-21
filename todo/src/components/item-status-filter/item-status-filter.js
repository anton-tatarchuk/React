import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  state = {
    active: "all",
  };

  filterClick = (e) => {
    this.setState({
      active: e.target.getAttribute("data-filter"),
    });

    this.props.onFilterItems(e.target.getAttribute("data-filter"));
  };

  render() {

    return (
      <div className="btn-group">
        <button
          className={"btn btn btn-outline-secondary " + (this.state.active === 'all'? 'active' : '') }
          type="button"
          data-filter="all"
          onClick={this.filterClick}
        >
          All
        </button>
        <button
          className={"btn btn btn-outline-secondary " + (this.state.active === 'active'? 'active' : '') }
          type="button"
          data-filter="active"
          onClick={this.filterClick}
        >
          Active
        </button>
        <button
          className={"btn btn btn-outline-secondary " + (this.state.active === 'done'? 'active' : '') }
          type="button"
          data-filter="done"
          onClick={this.filterClick}
        >
          Done
        </button>
      </div>
    );
  }
}
