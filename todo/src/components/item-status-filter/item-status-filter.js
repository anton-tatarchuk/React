import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  render () {
  const {onFilterItems} = this.props;

    return (
      <div className="btn-group">
        <button className="btn btn-outline-secondary" type="button" onClick={onFilterItems('all')}>
          All
        </button>
        <button className="btn btn-outline-secondary" type="button" onClick={onFilterItems('done')}>
          Active
        </button>
        <button className="btn btn-outline-secondary" type="button" onClick={onFilterItems('active')}>
          Done
        </button>
      </div>
    );
  }
}
