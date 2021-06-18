import './DateTime.css';
import React from 'react';
import ReactDOM from 'react-dom';


class DateTime extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
     formatDate(date) {
      return date.toLocaleDateString();
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
      return (
        <div>
          <td>{this.state.date.toLocaleDateString()}</td>
          <td>{this.state.date.toLocaleTimeString()}</td>
        </div>
      );
    }
  }
  ReactDOM.render(
    <DateTime />,
    document.getElementById('root')
  );

  export default DateTime;