import React, { Component } from 'react'

export default class Player extends Component {

    // some logic needs to be done for onsubmit event handler
    handleForm = (e) => {
        e.preventDefault();     // prevent a browser reload/refresh
        let selectedPlayer = e.target.player.value;
        this.props.player(selectedPlayer);      // calls setPlayer() function of parent;
    }
    render() {
        return (
            <form onSubmit={(e) => {this.handleForm(e)}}>
                <label>
                    Player X
                    <input type="radio" name="player" value="X"/>
                </label>
                <label>
                    Player O
                    <input type="radio" name="player" value="O"/>
                </label>
                <input type="submit" value="Start"/>
            </form>
        )
    }
}
