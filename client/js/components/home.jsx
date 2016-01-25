"use strict";

import React                    from 'react';
import assets                   from '../libs/assets';

// Component lifecycle docs:
// https://facebook.github.io/react/docs/component-specs.html

class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      text: "Initial text"
    };
  }

  componentWillMount(){
    // Called the first time the component is loaded right before the component is added to the page
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

  clicked(){
    this.setState({ text: this.refs.textBox.value });
  }

  render(){
    
    const img = assets("./images/atomicjolt.jpg");

    return <div>
      { this.state.text }
      <img src={img} />
      <input ref="textBox" type="text" />
      <button id="button" onClick={ (e) => { this.clicked(); } }>TheButton</button>
    </div>;
  }

}

export { Home as default };