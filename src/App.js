import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Button from '@material-ui/core/Button';

class App extends Component {
  state = {
    persons: [
       { name: 'Evtim', age: 21},
       { name: 'Burov', age: 20}
    ],
    otherState: 'test',
    showPersons: false
  };

   switchNameHandler = () => {
     this.setState({
     persons: [
     { name: 'Evto', age: 27},
     { name: 'Burov1', age: 20}
     ]
    });
   };

   nameChangedHandler = (event) => {
    this.setState({
      persons: [
      { name: 'Evtim', age: 21},
      { name: event.target.value, age: 20}
      ]
     });
   }

   togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
   }
   render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
<div>  
  {this.state.persons.map(person => {
    return <Person 
    name={person.name} 
    age={person.age} />
  })}
   </div> 
      );
    }

    return (
      <div className="App">
      <h1>Hi, welcome to my website!</h1>
      <Button variant="outlined" onClick={this.togglePersonsHandler}>Show Info</Button>
      {persons}
       
   </div>
   ); 
     
  //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now ?'));
  }
 }
 
export default App;

