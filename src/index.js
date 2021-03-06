import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = { time: ''}
  componentDidMount() {
      setInterval(() => {
          this.setState({ time: new Date().toLocaleTimeString() })
      }, 1000)
  }
  
  render() {
      return (
          <div className="time">
            <div>Hello world</div>
            <div>And the time is: { this.state.time }</div>
          </div>
      );
  }
}


ReactDOM.render(<App />, document.querySelector('#root'));
