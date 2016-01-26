"use strict";

import React                    from 'react';
import assets                   from '../libs/assets';
import Request                  from 'superagent';
import _                        from 'lodash';

// Component lifecycle docs:
// https://facebook.github.io/react/docs/component-specs.html

class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      query: "trek",
      currentMovieId: "tt2488496"
    };
  }

  componentWillMount(){
    // Called the first time the component is loaded right before the component is added to the page
    this.search();
  }

  componentDidMount(){
    // Called after the component has been rendered into the page
  }

  componentWillReceiveProps(nextProps){
    // Called when the props provided to the component are changed
  }

  componentWillUpdate(nextProps, nextState){
    // Called when the props and/or state change
  }

  componentWillUnmount(){
    // Called when the component is removed
  }

  updateSearch(){
    this.setState({query: this.refs.query.value});
    this.search(this.refs.query.value);
  }

  selectMovie(){
    this.setState({currentMovieId: this.refs.movieSelector.value});
  }

  render(){  
    var movies = _.map(this.state.movies, (movie) => {
      return <li key={movie.imdbID}>{movie.Title}</li>;
    });
    var options = _.map(this.state.movies, (movie) => {
      return <option key={`option_${movie.imdbID}`} value={movie.imdbID}>{movie.Title}</option>;
    });
    var selectedMovie = _.find(this.state.movies, (movie) => {
      return movie.imdbID == this.state.currentMovieId;
    });
    var img;
    if(selectedMovie){
      img = <img src={selectedMovie.Poster} />;
    }
    return <div>
      <input ref="query" onChange={ (e) => { this.updateSearch(); } } type="text" value={this.state.query} />
      <select ref="movieSelector" value={this.state.currentMovieId} onChange={ (e) => { this.selectMovie(); } } >{options}</select>
      <ul>{movies}</ul>
      {img}
    </div>;
  }

  search(query = "star"){
    var url = `http://www.omdbapi.com?s=${query}&y=&r=json&plot=short`;
    Request.get(url).then((response) => {
      this.setState({
        movies: response.body.Search,
        total: response.body.totalResults
      });
    });
  }

}

export { Home as default };