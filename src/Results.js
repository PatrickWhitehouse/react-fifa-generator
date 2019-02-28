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
                <div>
                    <h2>Select league and rating</h2>
                    <select onChange={this.selectChange} value={this.state.select}>
                        <option></option>
                        <option value="Prem">Prem</option>
                        <option value="International">International</option>
                        <option value="LaLiga">La Liga</option>
                    </select>
                    <p>{this.state.select ? 'You have selected ' + this.state.select : ''}</p>
                </div>
                <button onClick={this.randomTeam.bind(this)} >Randomize</button>
                <h2>Results...</h2> 
                <p>Team: <strong>{this.state.team ? this.state.team : 'No team generated.'}</strong></p>
                <p>Rating: <strong>{this.state.rating ? this.state.rating : 'No team generated.'}</strong></p>
            </div>
        );
    }
}

export default Results;