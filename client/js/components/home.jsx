"use strict";

import React                    from 'react';
import assets                   from '../libs/assets';


class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      text: "Initial text"
    };
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
      <button onClick={ (e) => { this.clicked(); } }>TheButton</button>
    </div>;
  }

}

export { Home as default };