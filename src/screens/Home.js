import React from "react";
import SearchBar from "../components/SearchBar";

export default class Home extends React.Component {

    render() {
        return (
            <div className="text-center">
                <h1 className="text-3xl font-bold underline">
                    Search Pokemon
                </h1>
                <SearchBar />
            </div>
        )
    }
}