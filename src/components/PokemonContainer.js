import React, { Component } from 'react';
import Name from './Name';

class PokemonContainer extends Component {
    state = {};

    leadingZerosTo3 = num => {
        let s = num + '';
        while (s.length < 3) s = '0' + s;
        return s;
    };

    render() {
        return (
            <div>
                {this.props.matchingPokemons.map(pokemon => {
                    return (
                        <div>
                            <div className='row'>
                                <div className='card blue-grey darken-1 hoverable col s4 offset-s4'>
                                    <div className='card-content white-text center'>
                                        <span className='card-title'>
                                            <span>#{this.props.urlConverter(pokemon.url)}</span>
                                            <span>
                                                <Name name={pokemon.name} />
                                            </span>
                                        </span>
                                        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.leadingZerosTo3(this.props.urlConverter(pokemon.url))}.png`} alt=''></img>
                                    </div>
                                    <div className='card-action center'>
                                        <a href='#'>This is a link</a>
                                        <a href='#'>This is a link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default PokemonContainer;
