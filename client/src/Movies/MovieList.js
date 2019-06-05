import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieCard from './MovieCard'


export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }


  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails 
            key={movie.id} 
            movie={movie} 
          />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`} 
            style={{textDecoration: "none", color: "black"}}>
        <MovieCard movie={movie} />
      </Link>
    </div>
  );
}
