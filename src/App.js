import React from 'react';
import List from './components/List';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = { 
      list: [
        {isComplete: false, text: 'Shopping', due: '2020-01-18'},
        {isComplete: false, text: 'gym', due: '2020-01-18'},
        {isComplete: false, text: 'Visit friend', due: '2020-01-18'}],
      date: new Date(),
      newTask: { text: '', due: '', isComplete: false},
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

  onAddTask = (e) => {
    const { newTask } = this.state;
    if (newTask.text !== '' && newTask.due !== '') {
      this.setState({list: [...this.state.list, this.state.newTask]});
    }
    this.setState({ newTask: { text: '', due: ''} });
    e.preventDefault();
  }

  onChange = (e) => {
    const target = e.target;
    const { newTask } = this.state;
    const name = target.name;
    this.setState({ newTask: { ...newTask, [name]: target.value, isComplete: false }});
  }

  // onInputText = (e) => {
  //   const { newTask } = this.state;
  //   this.setState({ newTask: { ...newTask, text: e.target.value }});
  // }

  // onPickDate = (e) => {
  //   const { newTask } = this.state;
  //   this.setState({ newTask: { ...newTask, due: e.target.value }});
  // }

  completeTask = (task) => {
    const newTask = { ...task, isComplete: true };
    const newList = this.state.list.map(l => {
      if (l.text === task.text) {
        return newTask;
      }
      return l;
    })
    this.setState({ list: newList });
  }

  render() {
    const options = { 
      weekday: 'long', year: 'numeric', month: 'long',
      day: 'numeric', hour: 'numeric', 
      minute: 'numeric', second: 'numeric' };

    const today = this.state.date.toLocaleDateString('GB', options)

    // This is a function component with text prop
    // const List = (props) => (<li tabIndex="0">{`${props.text}, ${props.due.toDateString()}`}</li>);

    // This is JSX which is a mix of ui and logic
    const listElement = (
      <ul>
        {this.state.list.map(todo => 
        <List key={todo.text}
          text={todo.text}
          due={new Date(todo.due)}
          isComplete={todo.isComplete}
          completeTask={() => this.completeTask(todo)}
        />)}
      </ul>
    );
    
    const { list } = this.state;
    const completedTaskCount = list.filter(l => l.isComplete === true).length;
    const remainingTaskCount = list.filter(l => l.isComplete !== true).length;
    return (
      <div>
        <h1>{today}</h1>
        <h4>{`Completed: ${completedTaskCount}, Remaining: ${remainingTaskCount}`}</h4>
        {listElement}
        <form onSubmit={this.onAddTask}>
          <label>
            Add Task: <input name="text" type="text" value={this.state.newTask.text} onChange={this.onChange} />
          </label>
          <br/>
          <label>
            Pick Due Date: <input name="due" type="date" value={this.state.newTask.due} onChange={this.onChange} />
          </label>
          <br/>
          <input type="submit" value="Add Task" />
        </form>
      </div>
    );
  }
}

export default App;
