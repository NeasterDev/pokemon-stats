import React from "react";
import SearchBar from "../components/SearchBar";

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <h1 className=" text-center text-3xl font-bold underline">
                    Pokemon Stats
                </h1>
                <div>
                    <SearchBar />
                </div>
            </div>
        )
    }
}