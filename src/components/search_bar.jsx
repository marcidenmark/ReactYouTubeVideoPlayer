import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
			this.state = { term: '' };
	}

	render() {
   	return (
   	<div className="search-bar">
   	<input
   		value={this.state.term}
   		onChange={event => this.onInputChange(event.target.value)}
   		placeholder="Search for you favorite YouTube video here!"
   	/>
   	</div>
    );
  }

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(tern);
	}
}
export default SearchBar;
