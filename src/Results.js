import React, { Component } from 'react';
import Data from './Data';

class Results extends Component{

    constructor(){
        super();
        this.state = {
            team: false,
            rating: false,
            select: false
        }
    }

    randomTeam = () => {
        const team = Data[this.state.select][Math.floor(Math.random() * Data[this.state.select].length)].team;
        const rating = Data[this.state.select][Math.floor(Math.random() * Data[this.state.select].length)].rating;
        this.setState({
            team: team,
            rating: rating
        });
    }

    selectChange = (e) => {
        let newSelect = e.target.value;
        this.setState({
            select: newSelect
        })
    }

    render(){
        
        return(
            <div>
                <p>Please press the randomize button below for a random team.</p>
                <div>
                    <h2>Select league and rating</h2>
                    <select onChange={this.selectChange} value={this.state.select}>
                        <option></option>
                        <option value="Prem">Prem</option>
                        <option value="International">International</option>
                    </select>
                    <p>{this.state.select ? 'You have selected ' + this.state.select : ''}</p>
                </div>
                <button onClick={this.randomTeam.bind(this)} >Randomize</button>
                <h2>Results...</h2> 
                <p>Team: {this.state.team ? this.state.team : 'No team generated.'}</p>
                <p>Rating: {this.state.rating ? this.state.rating : 'No team generated.'}</p>
            </div>
        );
    }
}

export default Results;