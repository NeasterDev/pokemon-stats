import React from "react";

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: ""
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => {e.preventDefault(); this.props.search(this.state.searchInput)}}>
                    <input onChange={(e) => this.setState({ ...this.state, searchInput: e.target.value })} id="search-input" className="p-1 mt-2 bg-red-500 border-2 border-black rounded focus:border-blue-300 focus:border-4" />
                    <button className="p-1 mt-2 bg-red-500 border-2 border-black rounded hover:bg-blue-300" type="submit">Submit</button>
                </form>
                {this.props.dataComponent}
            </div>
        )
    }
}