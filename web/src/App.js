import React, { Component } from 'react';
import './App.css';

import {HelloRequest} from './proto/helloworld_pb.js';
import {GreeterClient} from './proto/helloworld_grpc_web_pb.js';

const client = new GreeterClient('http://' + window.location.hostname + ':8080', null, null);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    let request = new HelloRequest();
    request.setName('World');

    client.sayHello(request, {}, (err, response) => {
      if (err) {
        console.error(err)
      }
      this.setState({ text: err ? 'Error occurred...' :response.getMessage() })
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>hello</button>
        <div>{this.state.text}</div>
      </div>
    );
  }
}

export default App;
