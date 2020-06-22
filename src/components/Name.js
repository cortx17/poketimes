import React, { Component } from 'react';

class Name extends Component {
    render() {
        return <div>{this.props.name.toUpperCase()}</div>;
    }
}

export default Name;
