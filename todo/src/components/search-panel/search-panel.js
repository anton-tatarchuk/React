import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    searchText: "Type to search",
  };

  searchItems = (e) => {};

  render() {
    const searchStyle = {
      fontSize: "20px",
    };

    return (
      <input
        onChange={this.searchItems}
        placeholder={this.state.searchText}
        style={searchStyle}
      />
    );
  }
}

// const SearchPanel = () => {
//   return <input placeholder={searchText} style={searchStyle} />;
// };

// export default SearchPanel;
