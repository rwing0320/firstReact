import React, { Component } from "react";
import countries from '../src/Countries'

export default class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: "",
    };
  }

  onTextChange = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {

      //The constructor function's parameters are not enclosed between slashes but do use quotation marks.
      //The constructor of the regular expression object—for example, new RegExp('ab+c')—results in runtime compilation of the regular expression.
      const regex = new RegExp(`^${value}`, "i");
      
      //Using the regex that was created above using the countries (list from the COuntries.js file) sort the countires and filter them with v (country) and
      //test it with the regex (if the country (v) matches the value the user passed in (value) then add that to the list of suggestions)
      suggestions = countries.sort().filter(v => regex.test(v));
      
    }

    this.setState(() => ({
        suggestions,
        text: value,
      }));
  };

  selectedText(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }

  renderSuggestions = () => {
    let { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item, index) => (
          <li key={index} onClick={() => this.selectedText(item)}>
            {item}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { text, suggestions } = this.state;

    return (
      <div id="notebooks">
        <h2>Auto Completed</h2>

        <input
          id="query"
          type="text"
          onChange={this.onTextChange}
          value={text}
        />
        {this.renderSuggestions()}
        <span>Suggestions: {suggestions.length}</span>
      </div>
    );
  }
}
