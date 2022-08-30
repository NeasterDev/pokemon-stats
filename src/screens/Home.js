import React from "react";
import { PokemonStats } from "../components/PokemonStats";
import SearchBar from "../components/SearchBar";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      sprite: ""
    };
  }

  searchByPokemonName = (pokemonName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ ...this.state, data: data, sprite: data.sprites.front_default });
        console.log(data.sprites.front_default);
      });
  };

  render() {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold underline">Search Pokemon</h1>
        <SearchBar
          search={this.searchByPokemonName}
          dataComponent={
            <PokemonStats
              name={this.state.data.name}
              id={this.state.data.id}
              height={this.state.data.height}
              weight={this.state.data.weight}
              sprite={this.state.sprite}
            />
          }
        />
      </div>
    );
  }
}
