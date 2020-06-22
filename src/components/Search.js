import React, { Component } from 'react';
import axios from 'axios';

import PokemonContainer from './PokemonContainer';

class Search extends Component {
    state = {
        pokemons: [],
        searchTerm: ''
    };

    componentDidMount() {
        this.setState({
            searchTerm: localStorage.getItem('searchTerm')
        });
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`).then(res => {
            const pokemons = res.data.results;
            this.setState({ pokemons });
        });
    }

    editSearchTerm = e => {
        this.setState({ searchTerm: e.target.value });
        localStorage.setItem('searchTerm', e.target.value);
    };

    convertUrlToId = url => {
        return url.split('/')[url.split('/').length - 2];
    };

    dynamicSearch = () => {
        return this.state.pokemons.filter(pokemon => {
            return pokemon.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()) && this.convertUrlToId(pokemon.url) < 10000;
        });
    };

    render() {
        return (
            <div>
                <div className='container row card-title'>
                    <div className='input-field col s6'>
                        <i className='small material-icons col s2'>search</i>
                        <input id='search-field' type='text' className='validate' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder={this.state.searchTerm}></input>
                        {/* <label for='search-field'>Search Pokémon</label> */}
                    </div>
                </div>

                <br></br>

                <h5>Matches:</h5>
                <PokemonContainer matchingPokemons={this.dynamicSearch()} urlConverter={this.convertUrlToId} />
            </div>
        );
    }
}

export default Search;
