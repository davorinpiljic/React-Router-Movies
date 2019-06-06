import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map((movie, key) => (
          <NavLink  to={`/movies/${movie.id}`} 
                    key={key} 
                    style={{textDecoration: "none", color: "black"}}>
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        <NavLink  to="/" 
                  style={{textDecoration: "none", color: "black"}}>
          <div className="home-button">Home</div>
        </NavLink>
      </div>
    );
  }
}
