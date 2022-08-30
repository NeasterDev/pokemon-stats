import React from "react";
import { PokemonStats } from "../components/PokemonStats";
import SearchBar from "../components/SearchBar";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    
    searchByPokemonName = (pokemonName) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
        .then(res => res.json())
        .then(data => this.setState({ ...this.state, data: data}));
    }



    render() {
        return (
            <div className="text-center">
                <h1 className="text-3xl font-bold underline">
                    Search Pokemon
                </h1>
                <SearchBar search={this.searchByPokemonName} dataComponent={<PokemonStats name={this.state.data.name} id={this.state.data.id}/>} />
            </div>
        )
    }
}