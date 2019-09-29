import React from 'react';

//displays page selector, allows change

export class Selector extends React.Component {
    constructor(props) {
        super(props);
        this.pageChange = this.pageChange.bind(this);
    }

    pageChange(event) {
        this.props.setPage(event.target.id);
    }

    render() {
        return (
            <div className="selector-grid" id="header">
                <button onClick={this.pageChange} id="start">Getting Started</button>
                <button onClick={this.pageChange} id="strikes">Strikes</button>
                <button onClick={this.pageChange} id="guards">Guards</button>
                <button onClick={this.pageChange} id="footwork">Footwork</button>
            </div>
        )
    }
}

/*
Selector.propTypes = {
    setPage: React.PropTypes.func.isRequired
}*/