import React, { Component } from 'react';
import './App.css';
import './Styles/style.css';
import { Container, Row, Col } from 'reactstrap';
import Header from "./Components/Header";
import Lists from "./Components/Lists";
import Submit from "./Components/Submit";
import Todos from "./Components/Todos";
import Widgets from "./Components/Widgets"
class App extends Component {
  //this is the original state of the component; what will show on the page when it loads 
  state = {
    tasks: ['Call mom', 'Clean the house', 'Buy groceries']
  };

handleSubmit = task => {
  //... tells the event to ignore what is already there. So includes original state and adds a new task that the user put
  // in with the form 
  this.setState({tasks: [...this.state.tasks, task]});
}
//the delete button removes an element from the tasks array
handleDelete = (index) => {
  const newArr = [...this.state.tasks];
  //.splice removes ann item 
  newArr.splice(index, 1);
  this.setState({tasks: newArr});
};
//all JS needs to be written above the render
render() {
  return(
    <>
    <div>
    <Container>
      <Row>
        <Col md="10">
          <div></div>
        </Col>
        <Col md="2">
    <Widgets />
        </Col>
      </Row>
    </Container>

    <div className='wrapper'>
      <div className='card frame'>
        <Header numTodos={this.state.tasks.length} />
        <Todos tasks={this.state.tasks} onDelete={this.handleDelete} />
        <Submit onFormSubmit={this.handleSubmit} />
      </div>
    </div>
    </div>
    </>
  );
}
}


export default App;