import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  setSearchTerm = (e) => {
    this.props.searchItems(e.target.value);
  };

  render() {
    const searchStyle = {
      fontSize: "20px",
    };

    return (
      <input
        onChange={this.setSearchTerm}
        placeholder="Search"
        style={searchStyle}
      />
    );
  }
}

// const SearchPanel = () => {
//   return <input placeholder={searchText} style={searchStyle} />;
// };

// export default SearchPanel;
