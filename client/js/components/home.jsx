"use strict";

import React                    from 'react';
import Request                  from 'superagent';
import _                        from 'lodash';

class Home extends React.Component {

constructor(){
    super();
    this.state = { movies: []};
  }

  componentWillMount(){
    this.search();
  }

  render(){
    var items = _.map(this.state.movies, (movie) => {
      if(_.includes(movie.Title, "Star Wars")){
        return movie.Title;
      }
    })

    items = _.compact(items);
    
    items = _.map(items, (item) => {
      return <li>{item}</li>;
    })



    return <div><ul>{items}</ul></div>;
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