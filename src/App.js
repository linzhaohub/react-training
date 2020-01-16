import React from 'react';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = { 
      list: [
        {text: 'Shopping', due: '2020-01-18'},
        {text: 'gym', due: '2020-01-18'},
        {text: 'Visit friend', due: '2020-01-18'}],
      date: new Date(),
    }
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
    this.setState({date: new Date()})
  };

  render() {
    const options = { 
      weekday: 'long', year: 'numeric', month: 'long',
      day: 'numeric', hour: 'numeric', 
      minute: 'numeric', second: 'numeric' };

    const today = this.state.date.toLocaleDateString('GB', options)

    // This is a function component with text prop
    const List = (props) => (<li tabIndex="0">{`${props.text}, ${props.due.toDateString()}`}</li>);

    // This is JSX which is a mix of ui and logic
    const listElement = (
      <ul>
        {this.state.list.map(todo => <List key={todo.text} text={todo.text} due={new Date(todo.due)} />)}
      </ul>
    );
    
    return (
      <div>
        <h1>{today}</h1>
        {listElement}
      </div>
    );
  }
}

export default App;
